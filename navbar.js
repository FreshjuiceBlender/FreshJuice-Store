const nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
  const offset = window.scrollY;
  
  if(offset > 75)
    nav.classList.add('scroll')
  else 
    nav.classList.remove('scroll')
});


