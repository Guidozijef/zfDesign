import { ref } from 'vue'

export let currSelectCompId = ref('')

/**
 * 注册事件
 * @param {*} doc 
 * @param {*} container 
 */
export function setupEvents(doc, container) {

  setupDetecting(doc, container)
  setupSelecting(doc, container)

}

/**
 * 注册鼠标选中高亮组件事件
 * @param {*} doc 事件源
 * @param {*} container 父级容器
 */
export function setupSelecting (doc, container) {
  let selecting = (e) => {
    let currNode = generatorBorderNode(e, 'item-borders-selecting', container)
    if (!currNode) return
    // TODO:根据当前组件节点上绑定的id来查询组件数据
    currSelectCompId.value = currNode.dataset.id
  }

  doc.addEventListener("click", selecting, true)
}

/**
 * 注册鼠标移入高亮组件事件
 * @param {*} doc 事件源
 * @param {*} container 父级容器
 */
export function setupDetecting (doc, container) {
  let hovering = (e) => {
    generatorBorderNode(e, 'item-borders-detecting', container)
  }

  let leaving = () => {
    let borderDom = container.querySelector('.item-borders-detecting');
    borderDom && container.removeChild(borderDom);
  };

  doc.addEventListener("mouseover", hovering, true);

  doc.addEventListener("mouseleave", leaving, false);
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
  let currNode = null
  let nodeList = [...e.path];
  for (let i = 0; i < nodeList.length; i++) {
    if (nodeList[i].id === 'app') break;
    if (nodeList[i].classList.contains('widget-view_item')) {
      currNode = nodeList[i];
      break;
    }
  }
  if (!currNode) {
    currNode = e.target.querySelector('.widget-view_item');
  }
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
