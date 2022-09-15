export function createdControlNode (className, { width, height, left, top }) {
  let dom = document.createElement('div')
  dom.style.width = width
  dom.style.height = height
  dom.className = className
  dom.setAttribute('transform', `translate(${left}px, ${top}px)`)

  return dom
  
}