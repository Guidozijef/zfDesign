export function createdControlNode ({ width, height, left, top }) {
  let dom = document.createElement('div')
  dom.style.width = width
  dom.style.height = height
  dom.setAttribute('top', top)
}