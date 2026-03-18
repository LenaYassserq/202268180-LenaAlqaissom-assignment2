function qs(selector) {
  return document.querySelector(selector);
}

function buildMailto({ to, name, email, message }) {
  const subject = `Portfolio message from ${name}`.trim();
  const body = `Name: ${name}\nEmail: ${email}\n\n${message}`.trim();

  const params = new URLSearchParams({
    subject,
    body,
  });

  return `mailto:${encodeURIComponent(to)}?${params.toString()}`;
}

function normalize(value) {
  return (value ?? "").toString().trim();
}

function initYear() {
  const yearEl = qs("#year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

function initContact() {
  const form = qs("#contactForm");
  const hint = qs("#formHint");
  const mailtoLink = qs("#mailtoLink");

  // TODO: set this to your real email
  const TO_EMAIL = "you@example.com";

  function updateMailto() {
    if (!form || !mailtoLink) return;
    const fd = new FormData(form);

    const payload = {
      to: TO_EMAIL,
      name: normalize(fd.get("name")),
      email: normalize(fd.get("email")),
      message: normalize(fd.get("message")),
    };

    const ok =
      payload.name.length > 0 &&
      payload.email.length > 0 &&
      payload.message.length > 0;

    mailtoLink.href = ok ? buildMailto(payload) : "#";
    mailtoLink.setAttribute("aria-disabled", ok ? "false" : "true");
  }

  form?.addEventListener("input", updateMailto);
  updateMailto();

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    updateMailto();

    if (!mailtoLink || mailtoLink.href.endsWith("#")) {
      if (hint) hint.textContent = "Please fill out name, email, and message.";
      return;
    }

    if (hint) hint.textContent = "Opening your email app…";
    window.location.href = mailtoLink.href;
  });
}

function initNavHighlight() {
  const links = Array.from(document.querySelectorAll('.nav a[href^="#"]'));
  if (links.length === 0) return;

  const sections = links
    .map((a) => qs(a.getAttribute("href")))
    .filter(Boolean);

  const activeClass = "nav-active";

  function setActive(id) {
    for (const a of links) {
      const href = a.getAttribute("href");
      const isActive = href === `#${id}`;
      a.classList.toggle(activeClass, isActive);
      a.setAttribute("aria-current", isActive ? "page" : "false");
    }
  }

  const io = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      setActive(visible.target.id);
    },
    { rootMargin: "-30% 0px -60% 0px", threshold: [0.1, 0.2, 0.5] },
  );

  for (const s of sections) io.observe(s);
}

initYear();
initContact();
initNavHighlight();

