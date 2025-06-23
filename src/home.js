export function home(){
  let content=document.querySelector("#content")
  let title=document.createElement("h1")
  title.textContent="Best Home Page"
  content.appendChild(title)
  let p=document.createElement("p")
  p.textContent="This is the best restaurant ever";
  content.appendChild(p)
}