import {home} from "./home.js"
import {menu} from "./menu.js"
import {contact} from "./contact.js"
function clear(){
  document.querySelector("#content").innerHTML=""
}

document.querySelector(".home").addEventListener("click",()=>{clear();home();})
document.querySelector(".menu").addEventListener("click",()=>{clear();menu();})
document.querySelector(".contact").addEventListener("click",()=>{clear();contact();})