(function(){
  function setTheme(mode){
    const isDark = mode==='dark';
    document.body.classList.toggle('dark-mode', isDark);
    const btn = document.getElementById('toggle-theme');
    if(btn){
      btn.setAttribute('aria-pressed', String(isDark));
      btn.setAttribute('title', isDark ? 'Passer au thème clair' : 'Passer au thème sombre');
      // Icône soleil pour le mode clair, lune pour le mode sombre
      btn.textContent = isDark ? '🌙' : '☀️';
    }
    try{localStorage.setItem('theme',mode)}catch(e){}
  }
  function toggle(){
    const btn = document.getElementById('toggle-theme');
    if(btn){
      btn.classList.add('changing');
      setTimeout(() => btn.classList.remove('changing'), 300);
    }
    const next=document.body.classList.contains('dark-mode')?'light':'dark';
    setTheme(next);
  }
  document.addEventListener('DOMContentLoaded',function(){
    try{const saved=localStorage.getItem('theme');if(saved){setTheme(saved)}}catch(e){}
    const btn=document.getElementById('toggle-theme');
    if(btn){
      btn.addEventListener('click',toggle);
      // Initialiser l'icône au chargement
      const isDark = document.body.classList.contains('dark-mode');
      btn.textContent = isDark ? '🌙' : '☀️';
      btn.setAttribute('title', isDark ? 'Passer au thème clair' : 'Passer au thème sombre');
    }
  });
})();