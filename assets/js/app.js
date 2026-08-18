
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
})();
