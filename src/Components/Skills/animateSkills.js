export const animateLangs = () => {
  const langs = document.querySelectorAll(".lang");
  let index = 0;
  let direction = 1;

  const animateNext = () => {
    langs.forEach((el) => el.classList.remove("animated"));
    if (langs.length > 0) langs[index].classList.add("animated");

    index += direction;
    if (index === langs.length || index < 0) {
      index =0;
    }
  };

  const interval = setInterval(animateNext, 700);
  return () => clearInterval(interval);
};
