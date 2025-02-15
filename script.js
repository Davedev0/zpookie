const wrapper = document.querySelector(".container");
const yesButton = document.querySelector('.yes-button');
const noButton = document.querySelector('.no-button');

noButton.style.transition = "transform 0.2s ease";

noButton.addEventListener("mouseover", () => {
  const noButtonRect = noButton.getBoundingClientRect();
  const maxX = window.innerWidth - noButtonRect.width;
  const maxY = window.innerHeight - noButtonRect.height;
  
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  
  noButton.style.position = 'absolute'; // Set position to absolute
  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
});

yesButton.addEventListener("click", () => {
  window.location.href = "yes_page.html"; // Redirect to yes_page.html
});