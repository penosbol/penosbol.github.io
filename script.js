const cover = document.querySelector('.cover');
const btn = document.getElementById('Open');
const firstPage = document.querySelector('.page');

btn.addEventListener('click', () => {

    cover.classList.toggle('open');
    firstPage.classList.toggle('visible');
    btn.textContent = cover.classList.contains('open') ? 'Close' : 'Open';

}
)
    ;