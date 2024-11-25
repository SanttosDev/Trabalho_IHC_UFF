document.querySelectorAll('.navbar__links a, .mobile__links a').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href'); 

    if (!href.startsWith('#')) return; 

    e.preventDefault();

    const targetId = href.substring(1);
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
