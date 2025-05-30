

export function change() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let logo = document.querySelector('.logo');
  if (logo) {
    logo.style.color = `rgb(${r}, ${g}, ${b})`;
  }
  //while color on mouseout
  logo.addEventListener('mouseout', () => {
    logo.style.color = 'white';
  });
}


export function toggleDropdown() {
  const navmenu = document.querySelector('.navmenu');
  navmenu.classList.toggle('show');
}