const cover = document.querySelector('.cover');
const page2 = document.getElementById('page-2');
const openBtn = document.getElementById('Open');
const closeBtn = document.getElementById('Close');

openBtn.addEventListener('click', () => {
  cover.classList.add('open');
  page2.style.display = 'block';
  openBtn.style.display = 'none';
  closeBtn.style.display = 'inline';
});

closeBtn.addEventListener('click', () => {
  cover.classList.remove('open');
  closeBtn.style.display = 'none';
  openBtn.style.display = 'inline';
  setTimeout(() => {
    page2.style.display = 'none';
  }, 800); // waits for cover flip animation to finish
});