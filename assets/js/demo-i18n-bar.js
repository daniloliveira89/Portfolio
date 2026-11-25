(function () {
  if (document.getElementById('demo-i18n-bar')) return;

  var cur = location.pathname.endsWith('/en.html')
    ? 'en'
    : location.pathname.endsWith('/es.html')
    ? 'es'
    : 'pt';

  var style = document.createElement('style');
  style.id = 'demo-i18n-bar-style';
  style.textContent = [
    '#demo-i18n-bar {',
    '  position: fixed;',
    '  bottom: 16px;',
    '  left: 16px;',
    '  z-index: 2147483000;',
    '  display: inline-flex;',
    '  align-items: center;',
    '  gap: 4px;',
    '  padding: 5px;',
    '  border-radius: 12px;',
    '  background: rgba(10, 14, 24, 0.86);',
    '  backdrop-filter: blur(14px);',
    '  -webkit-backdrop-filter: blur(14px);',
    '  border: 1px solid rgba(255, 255, 255, 0.16);',
    '  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);',
    '  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;',
    '  opacity: 0.88;',
    '  transition: opacity 0.2s ease, transform 0.2s ease;',
    '}',
    '#demo-i18n-bar:hover {',
    '  opacity: 1;',
    '}',
    '#demo-i18n-bar button.di18n-btn {',
    '  display: inline-flex;',
    '  align-items: center;',
    '  gap: 5px;',
    '  padding: 5px 8px;',
    '  border-radius: 8px;',
    '  border: none;',
    '  background: transparent;',
    '  color: rgba(226, 232, 240, 0.78);',
    '  font-size: 11px;',
    '  font-weight: 700;',
    '  letter-spacing: 0.04em;',
    '  cursor: pointer;',
    '  transition: background-color 0.18s ease, color 0.18s ease;',
    '  line-height: 1;',
    '}',
    '#demo-i18n-bar button.di18n-btn:hover {',
    '  background: rgba(255, 255, 255, 0.1);',
    '  color: #ffffff;',
    '}',
    '#demo-i18n-bar button.di18n-btn.di18n-active {',
    '  background: #2563eb;',
    '  color: #ffffff;',
    '  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.45);',
    '}',
    '#demo-i18n-bar svg.di18n-flag {',
    '  width: 14px;',
    '  height: 10px;',
    '  border-radius: 2px;',
    '  display: block;',
    '  flex-shrink: 0;',
    '}',
    '@media (max-width: 640px) {',
    '  #demo-i18n-bar {',
    '    bottom: 12px;',
    '    left: 12px;',
    '    padding: 4px;',
    '  }',
    '  #demo-i18n-bar button.di18n-btn {',
    '    padding: 5px 6px;',
    '    font-size: 10px;',
    '  }',
    '}'
  ].join('\n');

  var flags = {
    pt: '<svg class="di18n-flag" viewBox="0 0 720 504" aria-hidden="true"><rect width="720" height="504" fill="#009b3a"/><polygon points="360,42 666,252 360,462 54,252" fill="#fedf00"/><circle cx="360" cy="252" r="126" fill="#002776"/></svg>',
    es: '<svg class="di18n-flag" viewBox="0 0 750 500" aria-hidden="true"><rect width="750" height="500" fill="#c60b1e"/><rect y="125" width="750" height="250" fill="#ffc400"/></svg>',
    en: '<svg class="di18n-flag" viewBox="0 0 60 30" aria-hidden="true"><rect width="60" height="30" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="3"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/></svg>'
  };

  function switchLang(targetLang) {
    try {
      localStorage.setItem('portfolio_lang', targetLang);
      localStorage.setItem('portfolio_lang_manual', '1');
    } catch (e) {}
    var url = new URL(location.href);
    url.searchParams.set('lang', targetLang);
    var file = targetLang === 'en' ? 'en.html' : targetLang === 'es' ? 'es.html' : 'index.html';
    var p = url.pathname;
    url.pathname = /\.html$/i.test(p) ? p.replace(/\/[^\/]*$/, '/' + file) : (p.endsWith('/') ? p + file : p + '/' + file);
    location.href = url.toString();
  }

  function mountBar() {
    if (!document.head || !document.body || document.getElementById('demo-i18n-bar')) return;
    document.head.appendChild(style);

    var bar = document.createElement('div');
    bar.id = 'demo-i18n-bar';
    bar.setAttribute('aria-label', 'Language switcher');

    [
      { code: 'pt', label: 'PT', title: 'Português' },
      { code: 'es', label: 'ES', title: 'Español' },
      { code: 'en', label: 'EN', title: 'English' }
    ].forEach(function (item) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'di18n-btn' + (cur === item.code ? ' di18n-active' : '');
      btn.title = item.title;
      btn.innerHTML = flags[item.code] + '<span>' + item.label + '</span>';
      btn.addEventListener('click', function () {
        if (cur !== item.code) switchLang(item.code);
      });
      bar.appendChild(btn);
    });

    document.body.appendChild(bar);

    // Prevent overlap with any existing bottom-left fixed badges or viewport-bottom bars
    setTimeout(function () {
      var barRect = bar.getBoundingClientRect();
      var candidates = document.querySelectorAll('body > *, footer, .bottom-bar, .footer-links');
      var isSingleScreen = document.documentElement.scrollHeight <= window.innerHeight + 24;
      for (var i = 0; i < candidates.length; i++) {
        var el = candidates[i];
        if (el === bar || el.id === 'demo-i18n-bar-style') continue;
        var st = getComputedStyle(el);
        if (st.display === 'none' || st.visibility === 'hidden') continue;
        var isBottomBar = isSingleScreen && (el.tagName === 'FOOTER' || el.classList.contains('bottom-bar') || el.classList.contains('footer-links'));
        if (st.position === 'fixed' || st.position === 'sticky' || isBottomBar) {
          var r = el.getBoundingClientRect();
          var overlapsX = r.left < barRect.right + 12 && r.right > barRect.left - 8;
          var overlapsY = r.bottom > window.innerHeight - 70 && r.top < window.innerHeight && r.height < 140;
          if (overlapsX && overlapsY) {
            if (isBottomBar) {
              bar.style.bottom = 'auto';
              bar.style.left = 'auto';
              bar.style.top = '16px';
              bar.style.right = '16px';
            } else {
              bar.style.bottom = Math.round(window.innerHeight - r.top + 14) + 'px';
            }
            break;
          }
        }
      }
    }, 150);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountBar);
  } else {
    mountBar();
  }
})();
