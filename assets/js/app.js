
(function(){
  const path = (location.pathname.split('/').pop() || 'index.html');
  const articlePaths = new Set([
    'ai-dlya-uchitelya.html',
    'bezopasnost-dannyh-ai.html',
    'kak-vnedryat-ai-v-shkole.html'
  ]);
  document.querySelectorAll('nav a[data-path]').forEach(a=>{
    const navPath = a.getAttribute('data-path');
    if(navPath === path || (navPath === 'articles.html' && articlePaths.has(path))) {
      a.classList.add('active');
    }
  });
  const els = Array.from(document.querySelectorAll('.reveal'));
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, {threshold:0.12});
  els.forEach(el=>io.observe(el));

  const cookieKey = 'aiteacher_cookie_notice_accepted';
  if(localStorage.getItem(cookieKey) !== 'yes') {
    const notice = document.createElement('div');
    notice.className = 'cookie-notice';
    notice.setAttribute('role', 'region');
    notice.setAttribute('aria-label', 'Уведомление о cookies');
    notice.innerHTML = `
      <div>
        <strong>Cookies</strong>
        <p>Сайт использует cookies и похожие технологии, чтобы корректно работать и понимать, какие материалы полезны посетителям.</p>
      </div>
      <button type="button" class="cookie-notice-btn">Понятно</button>
    `;
    document.body.appendChild(notice);
    notice.querySelector('button').addEventListener('click', () => {
      localStorage.setItem(cookieKey, 'yes');
      notice.classList.add('cookie-notice-hidden');
      setTimeout(() => notice.remove(), 220);
    });
  }
})();
