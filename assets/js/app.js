(function () {
  const cookieKey = 'aiteacher_cookie_notice_accepted';
  let accepted = false;
  try {
    accepted = localStorage.getItem(cookieKey) === 'yes';
  } catch (_) {
    // Storage can be unavailable in private browsing or local previews.
  }
  if (accepted) return;

  const notice = document.createElement('div');
  notice.className = 'cookie-notice';
  notice.setAttribute('role', 'region');
  notice.setAttribute('aria-label', 'Данные в браузере');
  notice.innerHTML = `
    <div>
      <strong>Данные в браузере</strong>
      <p>Сохраним ваш выбор в этом браузере, чтобы больше не показывать уведомление.</p>
    </div>
    <button type="button" class="cookie-notice-btn">Понятно</button>
  `;
  document.body.appendChild(notice);
  notice.querySelector('button').addEventListener('click', () => {
    try {
      localStorage.setItem(cookieKey, 'yes');
    } catch (_) {
      // The notice can still be dismissed for the current page.
    }
    notice.remove();
  });
})();
