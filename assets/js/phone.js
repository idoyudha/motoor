// Interactive phone preview on the home page (markup: _includes/phone.html).
(function () {
  document.querySelectorAll('[data-mt-phone]').forEach(function (phone) {
    var scroller = phone.querySelector('.mt-phone__screen');
    var screens = phone.querySelectorAll('[data-screen]');
    var tabs = phone.querySelectorAll('.mt-phone__tab');
    var fab = phone.querySelector('.mt-fab');
    var fabBtn = phone.querySelector('[data-fab]');
    var snack = phone.querySelector('.mt-snack');
    var snackTimer;
    // Vehicle screens belong to the Garage tab
    var TAB_OF = { v1: 'garage', v2: 'garage' };

    function setFab(open) {
      if (open) { fab.setAttribute('data-open', ''); phone.setAttribute('data-fab', ''); }
      else { fab.removeAttribute('data-open'); phone.removeAttribute('data-fab'); }
      fabBtn.setAttribute('aria-expanded', String(open));
    }

    function filter(vid) {
      phone.querySelectorAll('[data-filter]').forEach(function (c) {
        c.setAttribute('aria-pressed', String(c.dataset.filter === vid));
      });
      phone.querySelectorAll('.mt-rcard').forEach(function (card) {
        card.hidden = vid !== 'all' && card.dataset.vid !== vid;
      });
    }

    function go(id) {
      screens.forEach(function (s) { s.hidden = s.dataset.screen !== id; });
      var tab = TAB_OF[id] || id;
      tabs.forEach(function (t) {
        if (t.dataset.go === tab) t.setAttribute('aria-current', 'page');
        else t.removeAttribute('aria-current');
      });
      // FAB is for logging, so it shows on Garage and vehicle screens only
      fab.hidden = tab !== 'garage';
      setFab(false);
      scroller.scrollTop = 0;
    }

    function toast(msg) {
      snack.textContent = msg;
      snack.setAttribute('data-show', '');
      clearTimeout(snackTimer);
      snackTimer = setTimeout(function () { snack.removeAttribute('data-show'); }, 2800);
    }

    phone.addEventListener('click', function (e) {
      var el = e.target.closest('button, [data-fab-close]');
      if (!el || !phone.contains(el)) return;
      var d = el.dataset;

      if ('fabClose' in d) return setFab(false);
      if ('fab' in d) return setFab(!fab.hasAttribute('data-open'));
      if (d.go) {
        go(d.go);
        filter(d.filterTo || 'all');
        return;
      }
      if (d.filter) return filter(d.filter);
      if (d.themeSet) {
        if (d.themeSet === 'system') phone.removeAttribute('data-theme');
        else phone.setAttribute('data-theme', d.themeSet);
        phone.querySelectorAll('[data-theme-set]').forEach(function (b) {
          b.setAttribute('aria-pressed', String(b === el));
        });
        return;
      }
      if (d.cycle) {
        var opts = d.cycle.split('|');
        var val = el.querySelector('.mt-pref__value');
        val.textContent = opts[(opts.indexOf(val.textContent) + 1) % opts.length];
        return;
      }
      if (d.toast) {
        setFab(false);
        toast(d.toast);
      }
    });

    phone.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && fab.hasAttribute('data-open')) { setFab(false); fabBtn.focus(); }
    });
  });
})();
