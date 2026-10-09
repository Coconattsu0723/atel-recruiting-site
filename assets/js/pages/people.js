(function () {
  const data = window.ATEL_DATA;
  const dialog = document.querySelector("[data-interview-dialog]");
  const cards = [...document.querySelectorAll("[data-person-card]")];
  const filters = [...document.querySelectorAll("[data-people-filter]")];
  const count = document.querySelector("[data-people-count]");

  if (!data || !dialog || cards.length === 0) return;

  const closeButton = dialog.querySelector("[data-interview-close]");
  const personById = new Map(data.people.map((person) => [person.id, person]));
  const jobBySlug = new Map(data.jobs.map((job) => [job.slug, job]));
  const accentColors = {
    DESIGN: "var(--color-design)",
    PLANNING: "var(--color-planning)",
    PROJECT: "var(--color-project)",
    CONSTRUCTION: "var(--color-construction)",
    BUSINESS: "var(--color-planning)"
  };

  let lastTrigger = null;
  const setText = (selector, value) => {
    dialog.querySelectorAll(selector).forEach((element) => { element.textContent = value; });
  };

  const populateDialog = (person) => {
    const job = jobBySlug.get(person.jobSlug);
    dialog.style.setProperty("--dialog-accent", accentColors[person.department] || "var(--color-ink)");
    setText("[data-dialog-person-number]", `PERSON ${person.number}`);
    setText("[data-dialog-role]", person.role);
    setText("[data-dialog-profile]", `${person.department} / ${person.location}`);
    setText("[data-dialog-career]", `${person.careerType} / JOINED ${person.joined}`);
    setText("[data-dialog-message]", person.message);
    setText("[data-dialog-why]", person.why);
    setText("[data-dialog-work]", person.work);
    setText("[data-dialog-collaboration]", person.collaboration);
    setText("[data-dialog-job-title]", job?.title || person.role);

    const portrait = dialog.querySelector("[data-dialog-image]");
    const paint = dialog.querySelector("[data-dialog-paint]");
    const jobLink = dialog.querySelector("[data-dialog-job]");
    portrait.src = person.image;
    portrait.alt = `${person.role}の社員`;
    paint.src = person.paint;
    if (jobLink) jobLink.href = `job-detail.html?job=${encodeURIComponent(person.jobSlug)}`;
  };

  const urlWithPerson = (personId) => {
    const url = new URL(window.location.href);
    url.hash = "";
    if (personId) url.searchParams.set("person", personId);
    else url.searchParams.delete("person");
    return `${url.pathname}${url.search}${url.hash}`;
  };

  const openDialog = (person, options = {}) => {
    const { pushHistory = false, trigger = null } = options;
    populateDialog(person);
    lastTrigger = trigger || cards.find((card) => card.dataset.personCard === person.id) || lastTrigger;
    if (!dialog.open) dialog.showModal();
    closeButton?.focus();
    if (pushHistory) history.pushState({ atelPersonDialog: true }, "", urlWithPerson(person.id));
  };

  const closeDialog = ({ restoreFocus = true, syncUrl = true } = {}) => {
    if (dialog.open) dialog.close();
    if (syncUrl) {
      if (history.state?.atelPersonDialog) {
        history.back();
        return;
      }
      history.replaceState(history.state, "", urlWithPerson(null));
    }
    if (restoreFocus) lastTrigger?.focus();
  };

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const person = personById.get(card.dataset.personCard);
      if (person) openDialog(person, { pushHistory: true, trigger: card });
    });
  });

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      const value = filter.dataset.peopleFilter;
      filters.forEach((item) => item.setAttribute("aria-pressed", String(item === filter)));
      let visibleCount = 0;
      cards.forEach((card) => {
        const visible = value === "all" || card.dataset.department === value;
        card.hidden = !visible;
        if (visible) visibleCount += 1;
      });
      if (count) count.textContent = `FILTER BY FIELD / ${visibleCount} ${visibleCount === 1 ? "MEMBER" : "MEMBERS"}`;
    });
  });

  closeButton?.addEventListener("click", () => closeDialog());

  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeDialog();
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeDialog();
  });

  window.addEventListener("popstate", () => {
    const url = new URL(window.location.href);
    const person = personById.get(url.searchParams.get("person"));
    if (person) openDialog(person, { pushHistory: false });
    else closeDialog({ restoreFocus: true, syncUrl: false });
  });

  const initialUrl = new URL(window.location.href);
  const hashPerson = initialUrl.hash.startsWith("#person-") ? initialUrl.hash.slice(1) : null;
  const initialPerson = personById.get(initialUrl.searchParams.get("person")) || personById.get(hashPerson);
  if (initialPerson) {
    if (hashPerson) history.replaceState(history.state, "", urlWithPerson(initialPerson.id));
    openDialog(initialPerson, { pushHistory: false });
  }
})();
