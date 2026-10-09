const header = document.querySelector("[data-site-header]");
const menu = document.querySelector("[data-mobile-menu]");
const menuOpenButton = document.querySelector("[data-menu-open]");
const menuCloseButtons = menu?.querySelectorAll("[data-menu-close]") ?? [];
const menuLinks = menu?.querySelectorAll("a[href]") ?? [];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let menuTrigger = null;

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 16);
}

function getFocusableElements(container) {
  return [...container.querySelectorAll(
    "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])",
  )].filter((element) => !element.hidden);
}

function openMenu() {
  if (!(menu instanceof HTMLDialogElement)) return;

  menuTrigger = document.activeElement;
  menuOpenButton?.setAttribute("aria-expanded", "true");
  document.body.classList.add("is-scroll-locked");
  menu.showModal();
  getFocusableElements(menu)[0]?.focus();
}

function closeMenu() {
  if (!(menu instanceof HTMLDialogElement) || !menu.open) return;
  menu.close();
}

function restoreAfterMenuClose() {
  menuOpenButton?.setAttribute("aria-expanded", "false");
  document.body.classList.remove("is-scroll-locked");
  if (menuTrigger instanceof HTMLElement) menuTrigger.focus();
  menuTrigger = null;
}

function keepFocusInMenu(event) {
  if (event.key !== "Tab" || !(menu instanceof HTMLDialogElement)) return;

  const focusable = getFocusableElements(menu);
  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable.at(-1);
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function handleBackdropClick(event) {
  if (event.target === menu) closeMenu();
}

function prepareReveal() {
  const targets = document.querySelectorAll("[data-reveal]");
  if (!targets.length) return;

  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    targets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -10%", threshold: 0.12 },
  );

  targets.forEach((target) => observer.observe(target));
}

window.addEventListener("scroll", updateHeader, { passive: true });
menuOpenButton?.addEventListener("click", openMenu);
menuCloseButtons.forEach((button) => button.addEventListener("click", closeMenu));
menuLinks.forEach((link) => link.addEventListener("click", closeMenu));
menu?.addEventListener("close", restoreAfterMenuClose);
menu?.addEventListener("keydown", keepFocusInMenu);
menu?.addEventListener("click", handleBackdropClick);

updateHeader();
prepareReveal();
