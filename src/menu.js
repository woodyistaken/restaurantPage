export function menu(){
  let content=document.querySelector("#content")
  let title=document.createElement("h1")
  title.textContent="Best Menu"
  content.appendChild(title)
  let p=document.createElement("p")
  p.textContent="We only have generic food for 1 dollar :(";
  content.appendChild(p)
}