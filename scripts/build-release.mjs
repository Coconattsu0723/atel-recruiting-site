import { cp, mkdir, readdir, readFile, rm, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = path.join(projectRoot, "dist");
const releaseEntries = ["index.html", "pages", "assets", "robots.txt", "sitemap.xml"];
const textExtensions = new Set([".css", ".html", ".js"]);
const forbiddenReferences = [
  { label: "localhost", pattern: /(?:localhost|127\.0\.0\.1)/i },
  { label: "file URL", pattern: /file:\/\//i },
  { label: "design source", pattern: /design\/(?:source-images|references)/i },
];

const walk = async (target) => {
  const targetStat = await stat(target);
  if (!targetStat.isDirectory()) return [target];

  const children = await readdir(target);
  const nested = await Promise.all(children.map((child) => walk(path.join(target, child))));
  return nested.flat();
};

const sourceFiles = (
  await Promise.all(releaseEntries.map((entry) => walk(path.join(projectRoot, entry))))
).flat();

const invalidReferences = [];
const sourceTextParts = [];
for (const file of sourceFiles) {
  if (!textExtensions.has(path.extname(file))) continue;
  const content = await readFile(file, "utf8");
  sourceTextParts.push(content);
  forbiddenReferences.forEach(({ label, pattern }) => {
    if (pattern.test(content)) invalidReferences.push(`${path.relative(projectRoot, file)}: ${label}`);
  });
}

if (invalidReferences.length) {
  throw new Error(`Release build stopped because local-only references were found:\n${invalidReferences.join("\n")}`);
}

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });

const sourceText = sourceTextParts.join("\n");
const shouldCopy = (source) => {
  if (path.basename(source) === ".DS_Store") return false;

  const relativePath = path.relative(projectRoot, source);
  const isAssetFile = relativePath.startsWith(`assets${path.sep}`) && path.extname(source);
  const isCodeAsset = relativePath.startsWith(`assets${path.sep}css${path.sep}`)
    || relativePath.startsWith(`assets${path.sep}js${path.sep}`);

  if (isAssetFile && !isCodeAsset) {
    return sourceText.includes(`/${path.basename(source)}`);
  }
  return true;
};

for (const entry of releaseEntries) {
  await cp(path.join(projectRoot, entry), path.join(outputDirectory, entry), {
    recursive: true,
    filter: shouldCopy,
  });
}

const outputFiles = await walk(outputDirectory);
const totalBytes = (
  await Promise.all(outputFiles.map(async (file) => (await stat(file)).size))
).reduce((sum, size) => sum + size, 0);

console.log(`Release build completed: ${outputFiles.length} files / ${(totalBytes / 1024 / 1024).toFixed(1)} MB`);
console.log(`Output: ${outputDirectory}`);
