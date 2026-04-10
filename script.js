const cover = document.querySelector('.cover');
const btn = document.getElementById('Open');

btn.addEventListener('click', () => {
    cover.classList.toggle('open');
    btn.textContent = cover.classList.contains('open') ? 'Close' : 'Open';
})
;