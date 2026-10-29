// Section entrances: each [data-reveal] (and each part of a document page) rises in once as it enters the screen.
// Hidden only while html has the .js class (set in the head), so the page reads without script.
(function () {
  var items = document.querySelectorAll('[data-reveal], .mt-prose > h2, .mt-prose > h3, .mt-prose > p, .mt-prose > ul, .mt-prose > ol, .mt-prose > details, .mt-contact, .mt-note, .mt-toc');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-in');
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -10% 0px' });
  items.forEach(function (el) { io.observe(el); });
})();
