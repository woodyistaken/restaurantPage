export function contact(){
  let content=document.querySelector("#content")
  let title=document.createElement("h1")
  title.textContent="Best Contact Page"
  content.appendChild(title)
  let p=document.createElement("p")
  p.textContent="This is a place which you can totally contact :p";
  content.appendChild(p)
}