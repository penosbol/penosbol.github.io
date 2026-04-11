const cover = document.querySelector('.flip.cover');
const page2 = document.getElementById('page-2');
const page4 = document.getElementById('page-4');
const flip = document.getElementById('page-2-flip');
const nextBtn = document.getElementById('Next');
const backBtn = document.getElementById('Back');

let state = 0;

function updateButtons() {
  backBtn.disabled = state === 0;
  nextBtn.disabled = state === 2;
}

nextBtn.addEventListener('click', () => {
  if (state === 0) {
    cover.classList.add('open');
    page2.style.display = 'block';
    state = 1;
  } else if (state === 1) {
    cover.style.zIndex = '0';
    flip.style.display = 'block';
    flip.style.pointerEvents = 'auto';
    page4.style.display = 'block';
    setTimeout(() => {
      flip.classList.add('open');
    }, 20);
    state = 2;
  }
  updateButtons();
});

backBtn.addEventListener('click', () => {
  if (state === 1) {
    cover.classList.remove('open');
    setTimeout(() => {
      page2.style.display = 'none';
    }, 800);
    state = 0;
  } else if (state === 2) {
    flip.classList.remove('open');
    setTimeout(() => {
      cover.style.zIndex = '3';
      flip.style.display = 'none';
      flip.style.pointerEvents = 'none';
      page4.style.display = 'none';
    }, 800);
    state = 1;
  }
  updateButtons();
});

updateButtons();

document.getElementById('page-1').addEventListener('click', () => {
  window.location.href = 'aboutme.html';
});

document.getElementById('page-2').addEventListener('click', () => {
  window.location.href = 'startup.html';
});