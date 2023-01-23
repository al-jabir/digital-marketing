// execute script after page load

window.onload = function digital() {
  // toggle btn loading
  let toggle = document.querySelector('#nav');
  let collapse = document.querySelector('.collapse');

  toggle.addEventListener('click', () => {
    collapse.classList.toggle('active');
  });
};
