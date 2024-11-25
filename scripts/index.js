const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
});

document.querySelectorAll('.navbar__links a, .mobile__links a').forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault(); 

      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

     
      if (targetElement) {
          const offset = 100; 
          const elementPosition = targetElement.offsetTop; 
          const offsetPosition = elementPosition - offset; 

          window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth' 
          });
      }

      
      if (mobileNavbar.classList.contains('active')) {
          mobileNavbar.classList.remove('active');
      }
  });
});

