

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
  });
});
