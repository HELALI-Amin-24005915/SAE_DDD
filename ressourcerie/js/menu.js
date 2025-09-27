document.addEventListener('DOMContentLoaded', function() {
  const burger = document.getElementById('burger');
  const links = document.getElementById('nav-links');

  if (!burger || !links) return;

  function toggle() {
      const show = !links.classList.contains('show');
      links.classList.toggle('show', show);
      burger.setAttribute('aria-expanded', String(show));
      // AJOUT : Bloque le défilement du body lorsque le menu est ouvert
      document.body.classList.toggle('noscroll', show);
  }

  burger.addEventListener('click', toggle);

  document.addEventListener('click', function(e) {
      if (!links.contains(e.target) && !burger.contains(e.target)) {
          if (links.classList.contains('show')) {
              links.classList.remove('show');
              burger.setAttribute('aria-expanded', 'false');
              // AJOUT : Réactive le défilement si on clique en dehors
              document.body.classList.remove('noscroll');
          }
      }
  });
});
