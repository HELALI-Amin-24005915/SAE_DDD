document.addEventListener('DOMContentLoaded',function(){
  const burger=document.getElementById('burger');
  const links=document.getElementById('nav-links');
  if(!burger||!links) return;
  function toggle(){
    const show = !links.classList.contains('show');
    links.classList.toggle('show', show);
    burger.setAttribute('aria-expanded', String(show));
  }
  burger.addEventListener('click', toggle);
  document.addEventListener('click', function(e){ if(!links.contains(e.target) && !burger.contains(e.target)) { links.classList.remove('show'); burger.setAttribute('aria-expanded','false'); } });
});