// take and control html to document object
const title = document.querySelector("#title");

function handleClick() {
  title.style.color = "blue";
}

title.addEventListener("click", handleClick);
