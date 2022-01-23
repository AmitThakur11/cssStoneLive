const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const contentBox = document.querySelector(".content-box");
const content = document.querySelector(".content")
const sidebarItem = document.querySelectorAll(".sidebar-item")
const header = document.querySelector("nav")

function toggle() {
  sidebar.classList.toggle("active");
  contentBox.classList.toggle("active");
}
menu.addEventListener("click", toggle);

sidebarItem.forEach(function(link){

  link.addEventListener('click',function(e){
    sidebar.classList.remove("active");
    contentBox.classList.remove("active");

  })
})
