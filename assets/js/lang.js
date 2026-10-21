// Language menu in the header (markup: _includes/lang-picker.html).
(function () {
  document.querySelectorAll('[data-mt-lang]').forEach(function (menu) {
    var btn = menu.querySelector('summary');

    document.addEventListener('click', function (e) {
      if (menu.open && !menu.contains(e.target)) menu.open = false;
    });

    menu.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.open) { menu.open = false; btn.focus(); }
    });
  });
})();
