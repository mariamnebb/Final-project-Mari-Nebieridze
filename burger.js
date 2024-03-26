// burgerbar
export let navcl = document.getElementById('nav-bar');
export let burgerbar = document.getElementById('burger-bar');

burgerbar.addEventListener('click', function() {
  navcl.classList.toggle('activenav');

  
});
