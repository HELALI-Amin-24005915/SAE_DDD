document.addEventListener('DOMContentLoaded', function(){
  const burger = document.getElementById('burger');
  const links = document.getElementById('nav-links');
  if(!burger || !links) return;
  
  function toggle(){
    const show = !links.classList.contains('show');
    links.classList.toggle('show', show);
    burger.setAttribute('aria-expanded', String(show));
    // Empêcher le scroll du body quand le menu est ouvert
    document.body.style.overflow = show ? 'hidden' : '';
  }
  
  function close(){
    links.classList.remove('show');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  
  burger.addEventListener('click', toggle);
  
  // Fermer le menu en cliquant sur l'overlay
  links.addEventListener('click', function(e){
    if(e.target === links) {
      close();
    }
  });
  
  // Fermer le menu en cliquant sur un lien
  const menuLinks = links.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', close);
  });
  
  // Fermer le menu avec la touche Escape
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && links.classList.contains('show')){
      close();
    }
  });
});