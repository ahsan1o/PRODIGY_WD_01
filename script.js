window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.pageYOffset > 0) {
      nav.style.backgroundColor = '#649';
    } else {
      nav.style.backgroundColor = '#333';
    }
  });

