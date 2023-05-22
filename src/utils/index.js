// 生成uuid
export function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}


/**
 * 生成高亮当前组件的样式dom
 * @param {*} e 事件源
 * @param {*} className 类名
 * @param {*} container 容器
 * @returns {*} currNode 当前的组件元素
 */
 export function generatorBorderNode (e, className, container) {
  let currNode = getNodeInstanceFromElement(e)
  if (!currNode) return;
  let { top: panrentTop, left: parentLeft } = container.getBoundingClientRect();
  let { height, width, top, left } = currNode.getBoundingClientRect();
  let rect = { height, width, top: top - panrentTop, left: left - parentLeft }
  let borderDom = container.querySelector(`.${className}`);
  if (borderDom) {
    createdNode(rect, '', borderDom)
  } else {
    let dom = createdNode(rect, `${className} borders-tools`);
    container.appendChild(dom);
  }
  return currNode
}

/**
 * 根据当前事件源获取最近的组件节点
 * @param {*} e 事件源
 * @returns {*} currNode 
 */
export function getNodeInstanceFromElement(e) {
  const currNode = findCurrWidgetByTarget(e.target)
  return currNode
}

/**
 * 创建或者设置节点
 * @param {*} param0 
 * @param {*} className 
 * @param {*} dom 
 */
export function createdNode({ width, height, left, top }, className = '', dom = null) {
  if (!dom) {
    dom = document.createElement('div')
    dom.className = className
  }
  dom.style.height = `${height}px`
  dom.style.width = `${width}px`
  dom.style.top = `${top}px`
  dom.style.left = `${left}px`
  return dom
}

let currSelectComp = {}
/**
 * 根据id递归查找当前组件数据
 * @param {*} list 
 * @param {*} id 
 */
export function findCurrWidgetById (list, id) {
  for (let i = 0; i < list.length; i++) {
    const widget = list[i];
    if (widget.id === id) {
      currSelectComp = widget
      break
    }
    if (widget.children) {
      findCurrWidgetById(widget.children.data, id)
    }
  }
  return currSelectComp
}

/**
 * 根据事件源递归查找当前组件容器
 * @param {*} list 
 * @param {*} id 
 */
export function findCurrWidgetByTarget (target) {
  if(target.id === 'app') return
  if(target.classList.contains('widget-view_item')) return target
  return findCurrWidgetByTarget(target.parentNode)
}

