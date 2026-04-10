} else if (state === 2) {
    flip.classList.remove('open');
    setTimeout(() => {
      cover.style.zIndex = '3';
      flip.style.display = 'none';
      page4.style.display = 'none';
    }, 800);
    state = 1;
  }