const links = document.querySelectorAll('#mainmenu ul li a');
links.forEach(link => {
  link.addEventListener('click', function (event) {
    links.forEach(link => {
      link.parentElement.classList.remove('active');
    });
    link.parentElement.classList.add('active');
  })
})