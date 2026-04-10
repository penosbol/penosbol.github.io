const cover = document.querySelector('.cover');
const page2 = document.getElementById('page-2');
const page4 = document.getElementById('page-4');
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
    page4.style.display = 'block';
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
    page4.style.display = 'none';
    state = 1;
  }

  updateButtons();
});

updateButtons();

