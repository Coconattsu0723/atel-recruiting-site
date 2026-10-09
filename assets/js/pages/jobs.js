(function () {
  const groups = [...document.querySelectorAll("[data-filter-group]")];
  const cards = [...document.querySelectorAll("[data-job-card]")];
  const grid = document.querySelector("[data-jobs-grid]");
  const emptyState = document.querySelector("[data-jobs-empty]");
  const countLabel = document.querySelector("[data-jobs-count]");
  const chips = document.querySelector("[data-filter-chips]");
  const heading = document.querySelector("[data-jobs-heading]");
  const headingRow = heading?.closest(".jobs-list__heading");
  const meta = document.querySelector("[data-jobs-meta]");
  const note = document.querySelector("[data-jobs-note]");
  const resetButtons = [...document.querySelectorAll("[data-filter-reset], [data-filter-view-all]")];

  if (groups.length === 0 || cards.length === 0 || !grid || !emptyState) return;

  const filterKeys = ["department", "career", "location"];
  const valuesByGroup = new Map(groups.map((group) => [
    group.dataset.filterGroup,
    new Map([...group.querySelectorAll("[data-filter-value]")].map((button) => [
      button.dataset.filterValue.toLowerCase().replaceAll(" ", "-"),
      button.dataset.filterValue,
    ])),
  ]));

  const state = { department: "ALL", career: "ALL", location: "ALL" };

  function setGroupValue(groupName, value) {
    const group = groups.find((item) => item.dataset.filterGroup === groupName);
    if (!group) return;
    const buttons = [...group.querySelectorAll("[data-filter-value]")];
    const selected = buttons.find((button) => button.dataset.filterValue === value) || buttons[0];
    state[groupName] = selected.dataset.filterValue;
    buttons.forEach((button) => button.setAttribute("aria-pressed", String(button === selected)));
  }

  function valuesForCard(card, key) {
    if (key === "department") return [card.dataset.department];
    return (card.dataset[key] || "").split("|");
  }

  function matches(card) {
    return filterKeys.every((key) => state[key] === "ALL" || valuesForCard(card, key).includes(state[key]));
  }

  function activeLabels() {
    return filterKeys.map((key) => state[key]).filter((value) => value !== "ALL");
  }

  function updateUrl(mode = "push") {
    const url = new URL(window.location.href);
    filterKeys.forEach((key) => {
      if (state[key] === "ALL") url.searchParams.delete(key);
      else url.searchParams.set(key, state[key].toLowerCase().replaceAll(" ", "-"));
    });
    url.hash = "";
    const path = `${url.pathname}${url.search}`;
    history[mode === "replace" ? "replaceState" : "pushState"]({ atelJobsFilters: true }, "", path);
  }

  function updateChips(labels) {
    if (!chips) return;
    chips.replaceChildren();
    const visibleLabels = labels.length ? labels : ["ALL"];
    visibleLabels.forEach((label) => {
      const item = document.createElement("li");
      item.textContent = label;
      chips.append(item);
    });
  }

  function render() {
    let count = 0;
    cards.forEach((card) => {
      const visible = matches(card);
      card.hidden = !visible;
      if (visible) count += 1;
    });

    const labels = activeLabels();
    const resultWord = count === 1 ? "POSITION" : "POSITIONS";
    if (countLabel) countLabel.textContent = `${count} OPEN ${resultWord}`;
    updateChips(labels);

    const isEmpty = count === 0;
    grid.hidden = isEmpty;
    emptyState.hidden = !isEmpty;
    if (headingRow) headingRow.hidden = isEmpty;
    if (note) note.hidden = isEmpty;

    if (!isEmpty && heading) {
      heading.innerHTML = labels.length ? "MATCHED ROLES." : "8 PROFESSIONS.<br>ONE TEAM.";
    }
    if (!isEmpty && meta) {
      meta.textContent = labels.length
        ? `${labels.join(" / ")} / ${count} ${count === 1 ? "RESULT" : "RESULTS"}`
        : `ALL DEPARTMENTS / ${count} RESULTS`;
    }
  }

  function applyUrlState() {
    const url = new URL(window.location.href);
    filterKeys.forEach((key) => {
      const requested = url.searchParams.get(key);
      const validValue = requested ? valuesByGroup.get(key)?.get(requested.toLowerCase()) : null;
      setGroupValue(key, validValue || "ALL");
    });

    if (!url.searchParams.has("career") && ["#new-graduate", "#career"].includes(url.hash)) {
      setGroupValue("career", url.hash === "#new-graduate" ? "NEW GRADUATE" : "CAREER");
    }
    render();
  }

  groups.forEach((group) => {
    group.addEventListener("click", (event) => {
      const button = event.target.closest("[data-filter-value]");
      if (!button || !group.contains(button)) return;
      setGroupValue(group.dataset.filterGroup, button.dataset.filterValue);
      render();
      updateUrl();
    });
  });

  resetButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterKeys.forEach((key) => setGroupValue(key, "ALL"));
      render();
      updateUrl();
      groups[0]?.querySelector("[data-filter-value='ALL']")?.focus();
    });
  });

  window.addEventListener("popstate", applyUrlState);
  window.addEventListener("hashchange", applyUrlState);
  applyUrlState();
})();
