document.addEventListener('DOMContentLoaded',function(){
  const btns = document.querySelectorAll('.cards button[data-amount]');
  btns.forEach(btn => {
    btn.addEventListener('click',function(){
      btns.forEach(b => b.classList.remove('primary'));
      btn.classList.add('primary');
    });
  });
});
