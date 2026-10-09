(() => {
  const data = window.ATEL_DATA;
  const form = document.querySelector("[data-entry-form]");
  const inputPanel = document.querySelector("[data-entry-input-panel]");
  const confirmPanel = document.querySelector("[data-entry-confirm-panel]");
  const completePanel = document.querySelector("[data-entry-complete-panel]");
  const progress = document.querySelector("[data-entry-progress]");

  if (!data || !form || !inputPanel || !confirmPanel || !completePanel || !progress) {
    return;
  }

  const jobsBySlug = new Map(data.jobs.map((job) => [job.slug, job]));
  const jobSelect = form.elements.job;
  const applicationTypeInputs = [...form.elements.applicationType];
  const queryNote = document.querySelector("[data-job-query-note]");
  const errorSummary = document.querySelector("[data-error-summary]");
  const errorSummaryList = document.querySelector("[data-error-summary-list]");
  const confirmList = document.querySelector("[data-confirm-list]");
  const stateHeading = document.querySelector("[data-state-heading]");
  const stateLabel = document.querySelector("[data-state-label]");
  const stateDescription = document.querySelector("[data-state-description]");
  const resumeInput = form.elements.resume;
  const uploadedFile = document.querySelector("[data-uploaded-file]");
  const uploadedName = document.querySelector("[data-uploaded-name]");
  const uploadDrop = document.querySelector(".entry-upload__drop");
  const characterCount = document.querySelector("[data-character-count]");
  const fieldNames = {
    job: "応募職種",
    applicationType: "応募区分",
    name: "氏名",
    email: "メールアドレス",
    phone: "電話番号",
    organization: "現在の所属・前職",
    experience: "経験年数",
    portfolio: "ポートフォリオURL",
    resume: "履歴書・職務経歴書",
    motivation: "志望動機",
    privacy: "Privacy Policyへの同意",
  };
  const careerLabels = {
    "NEW GRADUATE": "新卒採用 / NEW GRADUATE",
    CAREER: "中途採用 / CAREER",
  };
  const locationLabels = {
    TOKYO: "東京 / TOKYO",
    OSAKA: "大阪 / OSAKA",
  };
  const departmentColors = {
    DESIGN: "var(--color-design)",
    PLANNING: "var(--color-planning)",
    PROJECT: "var(--color-project)",
    CONSTRUCTION: "var(--color-construction)",
    BUSINESS: "var(--color-ink)",
    CORPORATE: "var(--color-gray-700)",
  };
  const stateCopy = {
    input: { label: "INPUT", heading: "応募フォーム", description: "あなたの経験と希望を入力してください。", title: "ENTRY | ATEL RECRUITING" },
    confirm: { label: "CONFIRM", heading: "応募内容の\n確認", description: "入力内容をご確認ください。", title: "応募内容の確認 | ENTRY | ATEL RECRUITING" },
    complete: { label: "COMPLETE", heading: "応募受付\n完了", description: "ご応募ありがとうございました。", title: "応募受付完了 | ENTRY | ATEL RECRUITING" },
  };

  let currentJob = null;

  const setText = (selector, value) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.textContent = value;
    });
  };

  const selectedCareer = () => applicationTypeInputs.find((input) => input.checked)?.value ?? "";

  const setPageAccent = (job) => {
    const detail = job ? data.jobDetails[job.slug] : null;
    document.documentElement.style.setProperty("--entry-accent", departmentColors[job?.department] ?? "var(--color-design)");
    document.querySelectorAll("[data-entry-paint]").forEach((image) => {
      image.src = detail?.paint ?? "../assets/images/paint/paint-design-blue.png";
    });
  };

  const updateSelectedRole = () => {
    const career = selectedCareer();
    const title = currentJob?.title ?? "POSITION NOT SELECTED";
    const careerText = careerLabels[career] ?? "未選択";
    const locationText = currentJob ? currentJob.locations.map((location) => locationLabels[location] ?? location).join(" / ") : "未選択";
    setText("[data-selected-job-title]", title);
    setText("[data-selected-career]", careerText);
    setText("[data-selected-location]", locationText);
    setText("[data-footer-application]", currentJob ? `${career || "TYPE NOT SELECTED"} / ${currentJob.locations.join(" / ")}` : "SELECT A ROLE");
  };

  const configureApplicationTypes = ({ preserveSelection = true } = {}) => {
    const previous = preserveSelection ? selectedCareer() : "";
    applicationTypeInputs.forEach((input) => {
      const available = !currentJob || currentJob.careerTypes.includes(input.value);
      input.disabled = !available;
      const label = input.closest("label");
      if (available) label?.removeAttribute("aria-disabled");
      else label?.setAttribute("aria-disabled", "true");
      if (!available) input.checked = false;
    });

    const availableInputs = applicationTypeInputs.filter((input) => !input.disabled);
    if (previous && availableInputs.some((input) => input.value === previous)) {
      availableInputs.find((input) => input.value === previous).checked = true;
    } else if (currentJob && availableInputs.length === 1) {
      availableInputs[0].checked = true;
    } else if (currentJob && availableInputs.some((input) => input.value === "CAREER")) {
      availableInputs.find((input) => input.value === "CAREER").checked = true;
    } else if (!currentJob) {
      availableInputs.forEach((input) => { input.checked = false; });
    }
    updateSelectedRole();
  };

  const applyJob = (slug, options = {}) => {
    const { preserveCareer = true, invalidQuery = false } = options;
    currentJob = jobsBySlug.get(slug) ?? null;
    jobSelect.value = currentJob?.slug ?? "";
    if (queryNote) queryNote.hidden = !invalidQuery;
    const jobHelp = document.querySelector("[data-job-help]");
    if (jobHelp) {
      jobHelp.textContent = currentJob ? `URLから選択 / ?job=${currentJob.slug}` : "希望する職種を選択してください。";
    }
    setPageAccent(currentJob);
    configureApplicationTypes({ preserveSelection: preserveCareer });
  };

  const syncJobFromUrl = () => {
    const url = new URL(window.location.href);
    const slug = url.searchParams.get("job");
    applyJob(slug, { preserveCareer: false, invalidQuery: Boolean(slug && !jobsBySlug.has(slug)) });
  };

  const updateUrl = (slug) => {
    const url = new URL(window.location.href);
    if (slug) url.searchParams.set("job", slug);
    else url.searchParams.delete("job");
    history.replaceState(history.state, "", `${url.pathname}${url.search}`);
  };

  const controlForField = (name) => {
    if (name === "applicationType") return applicationTypeInputs.find((input) => !input.disabled) ?? applicationTypeInputs[0];
    if (name === "privacy") return form.elements.privacy;
    return form.elements[name];
  };

  const clearFieldError = (name) => {
    const field = form.querySelector(`[data-field="${name}"]`);
    const error = field?.querySelector("[data-field-error]");
    field?.classList.remove("is-error");
    if (error) {
      error.hidden = true;
      error.textContent = "";
    }
    const controls = name === "applicationType" ? applicationTypeInputs : [controlForField(name)];
    controls.filter(Boolean).forEach((control) => control.removeAttribute("aria-invalid"));
  };

  const setFieldError = (name, message) => {
    const field = form.querySelector(`[data-field="${name}"]`);
    const error = field?.querySelector("[data-field-error]");
    field?.classList.add("is-error");
    if (error) {
      error.textContent = message;
      error.hidden = false;
    }
    const controls = name === "applicationType" ? applicationTypeInputs : [controlForField(name)];
    controls.filter(Boolean).forEach((control) => control.setAttribute("aria-invalid", "true"));
  };

  const validateFile = () => {
    const file = resumeInput.files?.[0];
    if (!file) return "";
    const allowedExtension = /\.(pdf|doc|docx)$/i.test(file.name);
    if (!allowedExtension) return "PDF、DOC、DOCX形式のファイルを選択してください。";
    if (file.size > 10 * 1024 * 1024) return "ファイルサイズは10MB以下にしてください。";
    return "";
  };

  const validateForm = () => {
    const errors = [];
    const addError = (name, message) => {
      errors.push({ name, message });
      setFieldError(name, message);
    };

    Object.keys(fieldNames).forEach(clearFieldError);
    if (!currentJob) addError("job", "応募職種を選択してください。");
    if (!selectedCareer()) addError("applicationType", "応募区分を選択してください。");
    if (!form.elements.name.value.trim()) addError("name", "氏名を入力してください。");
    const email = form.elements.email.value.trim();
    if (!email) addError("email", "メールアドレスを入力してください。");
    else if (form.elements.email.validity.typeMismatch) addError("email", "正しい形式のメールアドレスを入力してください。");
    const phone = form.elements.phone.value.trim();
    if (!phone) addError("phone", "電話番号を入力してください。");
    else if (!/^[0-9+()\-\s]{8,20}$/.test(phone)) addError("phone", "正しい形式の電話番号を入力してください。");
    if (!form.elements.organization.value.trim()) addError("organization", "現在の所属・前職を入力してください。");
    if (!form.elements.experience.value) addError("experience", "経験年数を選択してください。");
    const portfolio = form.elements.portfolio.value.trim();
    if (portfolio && form.elements.portfolio.validity.typeMismatch) addError("portfolio", "https://から始まる正しいURLを入力してください。");
    const fileError = validateFile();
    if (fileError) addError("resume", fileError);
    if (!form.elements.motivation.value.trim()) addError("motivation", "志望動機を入力してください。");
    if (!form.elements.privacy.checked) addError("privacy", "応募情報の取り扱いへの同意が必要です。");
    return errors;
  };

  const showErrors = (errors) => {
    errorSummaryList.replaceChildren(...errors.map(({ name, message }) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      const control = controlForField(name);
      link.href = control?.id ? `#${control.id}` : "#entry-job";
      link.textContent = `${fieldNames[name]}：${message}`;
      link.addEventListener("click", (event) => {
        event.preventDefault();
        control?.focus();
      });
      li.append(link);
      return li;
    }));
    errorSummary.hidden = false;
    controlForField(errors[0].name)?.focus();
  };

  const clearErrors = () => {
    Object.keys(fieldNames).forEach(clearFieldError);
    errorSummary.hidden = true;
    errorSummaryList.replaceChildren();
  };

  const valueFor = (name) => {
    if (name === "job") return currentJob?.title ?? "未選択";
    if (name === "applicationType") return careerLabels[selectedCareer()] ?? "未選択";
    if (name === "resume") return resumeInput.files?.[0]?.name ?? "未添付";
    const control = form.elements[name];
    return control?.value.trim() || "未入力";
  };

  const buildConfirmation = () => {
    const rows = [
      ["job", "応募職種 / POSITION"],
      ["applicationType", "応募区分"],
      ["name", "氏名 / NAME"],
      ["email", "メールアドレス"],
      ["phone", "電話番号"],
      ["preferredContact", "希望連絡方法"],
      ["organization", "現在の所属・前職"],
      ["experience", "経験年数"],
      ["portfolio", "ポートフォリオURL"],
      ["resume", "履歴書・職務経歴書"],
      ["motivation", "志望動機 / MOTIVATION"],
    ];
    confirmList.replaceChildren(...rows.map(([name, label]) => {
      const wrapper = document.createElement("div");
      const term = document.createElement("dt");
      const description = document.createElement("dd");
      const edit = document.createElement("button");
      wrapper.className = `entry-confirm__row${name === "motivation" ? " entry-confirm__row--wide" : ""}`;
      term.textContent = label;
      description.textContent = valueFor(name);
      edit.type = "button";
      edit.dataset.editField = name;
      edit.textContent = "修正 →";
      wrapper.append(term, description, edit);
      return wrapper;
    }));
  };

  const updateStateCopy = (state) => {
    const copy = stateCopy[state];
    stateLabel.textContent = copy.label;
    stateHeading.textContent = copy.heading;
    stateDescription.textContent = copy.description;
    document.title = copy.title;
  };

  const updateProgress = (state) => {
    const order = ["input", "confirm", "complete"];
    const activeIndex = order.indexOf(state);
    document.querySelectorAll("[data-progress-step]").forEach((step, index) => {
      step.classList.toggle("is-done", index < activeIndex);
      if (index === activeIndex) step.setAttribute("aria-current", "step");
      else step.removeAttribute("aria-current");
      const number = step.querySelector("span");
      if (number) number.textContent = index < activeIndex ? "✓" : String(index + 1).padStart(2, "0");
    });
  };

  const focusStateHeading = () => {
    stateHeading.tabIndex = -1;
    stateHeading.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };

  const showState = (state, focusField = "") => {
    inputPanel.hidden = state !== "input";
    confirmPanel.hidden = state !== "confirm";
    completePanel.hidden = state !== "complete";
    progress.hidden = state === "complete";
    updateStateCopy(state);
    updateProgress(state);
    if (state === "input" && focusField) {
      requestAnimationFrame(() => controlForField(focusField)?.focus());
    } else {
      requestAnimationFrame(focusStateHeading);
    }
  };

  const updateFileDisplay = () => {
    const file = resumeInput.files?.[0];
    uploadedFile.hidden = !file;
    uploadedName.textContent = file?.name ?? "";
    clearFieldError("resume");
    const message = validateFile();
    if (message) setFieldError("resume", message);
  };

  jobSelect.addEventListener("change", () => {
    const slug = jobSelect.value;
    applyJob(slug, { preserveCareer: true, invalidQuery: false });
    updateUrl(slug);
    clearFieldError("job");
    clearFieldError("applicationType");
  });

  applicationTypeInputs.forEach((input) => {
    input.addEventListener("change", () => {
      clearFieldError("applicationType");
      updateSelectedRole();
    });
  });

  form.querySelectorAll("input, select, textarea").forEach((control) => {
    control.addEventListener("input", () => {
      if (control.name && fieldNames[control.name]) clearFieldError(control.name);
    });
    control.addEventListener("change", () => {
      if (control.name && fieldNames[control.name]) clearFieldError(control.name);
    });
  });

  form.elements.motivation.addEventListener("input", () => {
    characterCount.textContent = `${form.elements.motivation.value.length} / 800`;
  });

  resumeInput.addEventListener("change", updateFileDisplay);
  document.querySelector("[data-remove-file]")?.addEventListener("click", () => {
    resumeInput.value = "";
    updateFileDisplay();
    resumeInput.focus();
  });

  ["dragenter", "dragover"].forEach((eventName) => {
    uploadDrop?.addEventListener(eventName, (event) => {
      event.preventDefault();
      uploadDrop.classList.add("is-dragging");
    });
  });
  ["dragleave", "drop"].forEach((eventName) => {
    uploadDrop?.addEventListener(eventName, (event) => {
      event.preventDefault();
      uploadDrop.classList.remove("is-dragging");
    });
  });
  uploadDrop?.addEventListener("drop", (event) => {
    const file = event.dataTransfer?.files?.[0];
    if (!file) return;
    const transfer = new DataTransfer();
    transfer.items.add(file);
    resumeInput.files = transfer.files;
    updateFileDisplay();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (errors.length) {
      showErrors(errors);
      return;
    }
    clearErrors();
    buildConfirmation();
    showState("confirm");
  });

  confirmList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-edit-field]");
    if (!button) return;
    showState("input", button.dataset.editField);
  });

  document.querySelector("[data-back-to-input]")?.addEventListener("click", () => showState("input"));
  document.querySelector("[data-demo-submit]")?.addEventListener("click", () => showState("complete"));
  window.addEventListener("popstate", syncJobFromUrl);

  syncJobFromUrl();
  updateFileDisplay();
  updateStateCopy("input");
})();
