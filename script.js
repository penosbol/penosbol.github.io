const cover = document.querySelector('.cover');
const page2 = document.getElementById('page-2');
const btn = document.getElementById('Open');
let state = 0;

btn.addEventListener('click', () => {
    if (state === 0) {
        cover.classList.add('open');
        page2.style.display = 'block';
        btn.textContent = 'Close';
        state = 1;
    } else if (state === 1) {
        cover.classList.remove('open');
        page2.style.display = 'none';
        btn.textContent = 'Open';
        state = 0;
    }
    }
    )
;
