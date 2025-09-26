(function(){
  function setTheme(mode){
    const isDark = mode==='dark';
    document.body.classList.toggle('dark-mode', isDark);
    const btn = document.getElementById('toggle-theme');
    if(btn){
      btn.setAttribute('aria-pressed', String(isDark));
      btn.textContent = isDark ? 'Thème: Sombre' : 'Thème: Clair';
    }
    try{localStorage.setItem('theme',mode)}catch(e){}
  }
  function toggle(){
    const next=document.body.classList.contains('dark-mode')?'light':'dark';
    setTheme(next);
  }
  document.addEventListener('DOMContentLoaded',function(){
    try{const saved=localStorage.getItem('theme');if(saved){setTheme(saved)}}catch(e){}
    const btn=document.getElementById('toggle-theme');
    if(btn){btn.addEventListener('click',toggle)}
  });
})();