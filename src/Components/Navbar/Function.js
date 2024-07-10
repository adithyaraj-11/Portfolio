export function change() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let logo = document.querySelector('.logo');
    if (logo) {
        logo.style.color = `rgb(${r}, ${g}, ${b})`;
    }
    logo.addEventListener('mouseleave', function() {
        logo.style.color = 'white';
    });
}
