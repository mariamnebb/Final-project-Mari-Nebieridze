
const moveTo = new MoveTo();

export const linkArray = document.querySelectorAll(".atr");


linkArray.forEach((item) => {
  item.addEventListener("click", handleClick);
});

function handleClick(e) {
  e.preventDefault();

  console.log(this); 
  const scrollElement = document.querySelector(this.getAttribute("href"));
  moveTo.move(scrollElement);
}
