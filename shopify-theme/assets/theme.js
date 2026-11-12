// MS Fit Poster: the little JavaScript the theme needs. Everything works
// without it, except that the mobile menu stays closed.

// Mobile menu: a button toggles the panel; Escape or a link closes it.
document.querySelectorAll("[data-ms-menu]").forEach((menu) => {
  const button = menu.querySelector("[data-ms-menu-toggle]");
  const panel = menu.querySelector("[data-ms-menu-panel]");
  const label = button.querySelector("[data-ms-menu-label]");
  if (!button || !panel) return;

  const setOpen = (open) => {
    button.setAttribute("aria-expanded", String(open));
    panel.hidden = !open;
    if (label) label.textContent = open ? button.dataset.closeLabel : button.dataset.openLabel;
  };

  button.addEventListener("click", () => setOpen(button.getAttribute("aria-expanded") !== "true"));
  panel.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      button.focus();
    }
  });
});

// Phone sticky bar: shown once the hero's buttons have scrolled away, and
// hidden while the contact section (which has the same button) is on screen.
const stickyBar = document.querySelector("[data-ms-sticky-cta]");
const hero = document.querySelector("[data-ms-hero]");
if (stickyBar && hero && "IntersectionObserver" in window) {
  const contact = document.querySelector("[data-ms-contact]");
  const inView = new Map();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => inView.set(entry.target, entry.isIntersecting));
    const show = !inView.get(hero) && !(contact && inView.get(contact));
    stickyBar.classList.toggle("is-visible", show);
  });
  observer.observe(hero);
  if (contact) observer.observe(contact);
}
