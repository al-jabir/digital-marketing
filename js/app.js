// execute script after page load

window.onload = function digital() {
  // toggle btn loading
  let toggle = document.querySelector('#nav');
  let collapse = document.querySelector('.collapse');

  toggle.addEventListener('click', () => {
    collapse.classList.toggle('active');
  });

  // mansonry js
  let grid = document.querySelector('.images-flex');

  let msnry = new Masonry(grid, {
    itemSelector: '.flex-item',
    gutter: 100,
    fitWidth: true,
  });
};
