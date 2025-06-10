document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      console.log(`Navigating to ${link.getAttribute('href')}`);
    });
  });
});
