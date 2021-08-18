const menu = document.querySelector(".menu");
function toggle() {
  const sidebar = document.querySelector(".sidebar");
  const content = document.querySelector(".content-box");

  sidebar.classList.toggle("active");
  content.classList.toggle("active");
}

menu.addEventListener("click", toggle);
