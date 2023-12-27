const noScrollLinks = document.querySelectorAll('.btn');

noScrollLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
  });
});
