document.addEventListener("DOMContentLoaded", () => {
  const dots = [...document.querySelectorAll(".dot")];
  const arrows = document.querySelectorAll(".slider-arrow");

  let activeIndex = 0;

  function updateDots(index) {
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const direction = arrow.classList.contains("left") ? -1 : 1;
      activeIndex = (activeIndex + direction + dots.length) % dots.length;
      updateDots(activeIndex);
    });
  });

  setInterval(() => {
    activeIndex = (activeIndex + 1) % dots.length;
    updateDots(activeIndex);
  }, 5000);
});
