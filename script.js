
const fullPath = window.location.pathname;

const splitPath=fullPath.split("/");
const currPath= splitPath[splitPath.length-1];

const navLink=document.querySelectorAll('.nav-item .nav-link');

navLink.forEach(item=>{
    const linkAttr=item.getAttribute("href");
    if(currPath===linkAttr){
     item.classList.add("active");
}else return item.classList.remove("active");
})