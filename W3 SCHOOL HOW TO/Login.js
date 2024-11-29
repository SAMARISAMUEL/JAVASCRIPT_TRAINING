const mybtn = document.getElementById("mybtn");
const container = document.getElementById("container");
const icon = document.getElementById("icon");
const mybody = document.getElementById("mybody");

mybtn.addEventListener("mouseover", () => {
  container.classList.toggle("container");
});
icon.addEventListener("click", () => {
  container.classList.add("container");
});

// mybody.addEventListener("click", () => {
//   container.classList.add("container");
// });
