(() => {
  const data = window.ATEL_DATA;
  const main = document.querySelector("main");
  const invalidTemplate = document.querySelector("[data-job-invalid-template]");
  const jobDetailUrl = "https://coconattsu0723.github.io/atel-recruiting-site/pages/job-detail.html";

  if (!data || !main) {
    return;
  }

  const setText = (selector, value, root = document) => {
    root.querySelectorAll(selector).forEach((element) => {
      element.textContent = value ?? "";
    });
  };

  const setList = (selector, items, createItem) => {
    document.querySelectorAll(selector).forEach((list) => {
      list.replaceChildren(...items.map(createItem));
    });
  };

  const setMetadata = (title, descriptionContent, canonicalUrl = jobDetailUrl) => {
    document.title = title;
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", descriptionContent);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", title);
    }
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", descriptionContent);
    }
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", canonicalUrl);
    }
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", canonicalUrl);
    }
  };

  const params = new URLSearchParams(window.location.search);
  const requestedSlug = params.get("job");
  const job = data.jobs.find((item) => item.slug === requestedSlug);
  const detail = job ? data.jobDetails[job.slug] : null;

  if (!job || !detail) {
    if (invalidTemplate) {
      main.replaceChildren(invalidTemplate.content.cloneNode(true));
      const headingPlaceholder = main.querySelector("[data-invalid-heading]");
      if (headingPlaceholder) {
        const heading = document.createElement("h1");
        heading.innerHTML = headingPlaceholder.innerHTML;
        headingPlaceholder.replaceWith(heading);
      }
    }
    setMetadata(
      "募集職種が見つかりません | ATEL RECRUITING",
      "指定された募集職種は見つかりませんでした。ATELの募集職種一覧をご確認ください。",
    );
    setText("[data-job-title]", "NOT FOUND");
    document.querySelectorAll("[data-entry-link]").forEach((link) => {
      link.setAttribute("href", "entry.html");
    });
    return;
  }

  const person = data.people.find((item) => item.id === detail.personId) ?? data.people[0];
  const departmentStyles = {
    DESIGN: { accent: "var(--color-design)", text: "#ffffff" },
    PLANNING: { accent: "var(--color-planning)", text: "var(--color-ink)" },
    PROJECT: { accent: "var(--color-project)", text: "#ffffff" },
    CONSTRUCTION: { accent: "var(--color-construction)", text: "var(--color-ink)" },
    BUSINESS: { accent: "var(--color-ink)", text: "#ffffff" },
    CORPORATE: { accent: "var(--color-gray-700)", text: "#ffffff" },
  };
  const colors = departmentStyles[job.department] ?? departmentStyles.BUSINESS;
  const root = document.documentElement;

  root.style.setProperty("--job-accent", colors.accent);
  root.style.setProperty("--job-accent-text", colors.text);

  setMetadata(
    `${job.title} | JOBS | ATEL RECRUITING`,
    `${job.title}の仕事内容、プロジェクトの進め方、募集要項をご紹介します。ATELで空間づくりの裏側を支える仲間を募集しています。`,
    `${jobDetailUrl}?job=${encodeURIComponent(job.slug)}`,
  );

  setText("[data-job-department]", job.department);
  setText("[data-job-number]", job.number);
  setText("[data-job-title]", job.title);
  setText("[data-job-display-title]", detail.displayTitle);
  setText("[data-job-tagline]", detail.tagline);
  setText("[data-job-career]", job.careerTypes.join(" / "));
  setText("[data-job-location]", job.locations.join(" / "));
  setText("[data-job-statement]", detail.statement);
  setText("[data-job-lead]", detail.lead);
  setText("[data-job-description]", detail.description);
  setText("[data-job-value]", detail.value);
  setText("[data-job-team-lead]", detail.teamLead);

  document.querySelectorAll("[data-job-paint]").forEach((image) => {
    image.setAttribute("src", detail.paint);
  });

  if (person) {
    document.querySelectorAll("[data-job-person-image]").forEach((image) => {
      image.setAttribute("src", person.image);
      image.setAttribute("alt", "");
    });
    document.querySelectorAll("[data-related-image]").forEach((image) => {
      image.setAttribute("src", person.image);
      image.setAttribute("alt", `${person.role}として働く社員`);
    });
    document.querySelectorAll("[data-related-paint]").forEach((image) => {
      image.setAttribute("src", person.paint);
    });
    setText("[data-related-number]", `PERSON ${person.number}`);
    setText("[data-related-role]", person.role);
    setText("[data-related-message]", person.message);
    setText("[data-related-meta]", `${person.careerType} / ${person.location}`);
    document.querySelectorAll("[data-related-link]").forEach((link) => {
      link.setAttribute("href", `people.html?person=${encodeURIComponent(person.id)}`);
    });
  }

  setList("[data-job-responsibilities]", detail.responsibilities, (item, index) => {
    const li = document.createElement("li");
    const number = document.createElement("span");
    const copy = document.createElement("div");
    const heading = document.createElement("h3");
    const text = document.createElement("p");
    number.textContent = String(index + 1).padStart(2, "0");
    heading.textContent = item[0];
    text.textContent = item[1];
    copy.append(heading, text);
    li.append(number, copy);
    return li;
  });

  setList("[data-job-project-points]", detail.projectPoints, (item) => {
    const li = document.createElement("li");
    li.textContent = item;
    return li;
  });

  setList("[data-job-workflow]", detail.workflow, (item, index) => {
    const li = document.createElement("li");
    const number = document.createElement("span");
    const bar = document.createElement("i");
    const heading = document.createElement("strong");
    const text = document.createElement("small");
    number.textContent = String(index + 1).padStart(2, "0");
    heading.textContent = item[0];
    text.textContent = item[1];
    bar.setAttribute("aria-hidden", "true");
    li.append(number, bar, heading, text);
    return li;
  });

  setList("[data-job-team-roles]", detail.teamRoles, (item) => {
    const li = document.createElement("li");
    const role = document.createElement("strong");
    const description = document.createElement("span");
    li.className = `department--${item[1].toLowerCase()}`;
    role.textContent = item[0];
    description.textContent = item[2];
    li.append(role, description);
    return li;
  });

  setList("[data-job-profile]", detail.profile, (item) => {
    const li = document.createElement("li");
    li.textContent = item;
    return li;
  });

  setList("[data-job-required]", detail.required, (item) => {
    const li = document.createElement("li");
    li.textContent = item;
    return li;
  });

  setList("[data-job-preferred]", detail.preferred, (item) => {
    const li = document.createElement("li");
    li.textContent = item;
    return li;
  });

  const officeNames = {
    TOKYO: "東京オフィス",
    OSAKA: "大阪オフィス",
  };
  const location = job.locations.map((item) => officeNames[item] ?? item).join(" / ");
  setText("[data-job-condition-location]", `${location} / プロジェクト現場`);

  const entryHref = `entry.html?job=${encodeURIComponent(job.slug)}`;
  document.querySelectorAll("[data-entry-link]").forEach((link) => {
    link.setAttribute("href", entryHref);
  });
  setText("[data-entry-path]", entryHref);
})();
