import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import ResizeObserver from 'resize-observer-polyfill';
import { generatorBorderNode, createdNode, findCurrWidgetById } from '@/utils';

export default function useCurrSelectComp(doc, container, widgetList) {
  let currSelectComp = ref({});
  let currSelectCompId = ref('');
  onMounted(() => {
    setupEvents(doc.value, container.value);
  });

  onBeforeUnmount(() => {
    // 注销鼠标移入、移出、点击等事件
    clearEvents(canvas.value);
  });

  watch(currSelectCompId, (id) => {
    if (!id) {
      let borderDom = container.value.querySelector('.item-borders-selecting');
      borderDom && container.value.removeChild(borderDom);
    }
  });

  /**
   * 注册事件
   * @param {*} doc
   * @param {*} container
   */
  function setupEvents(doc, container) {
    setupDetecting(doc, container);
    setupSelecting(doc, container);
  }

  function clearEvents(doc) {
    doc.removeListener('mouseover', hovering);

    doc.removeListener('mouseleave', leaving);

    doc.removeListener('click', selecting);
  }

  /**
   * 注册鼠标选中高亮组件事件
   * @param {*} doc 事件源
   * @param {*} container 父级容器
   */
  function setupSelecting(doc, container) {
    doc.addEventListener('click', (e) => selecting(e, container), true);
  }

  /**
   * 注册鼠标移入高亮组件事件
   * @param {*} doc 事件源
   * @param {*} container 父级容器
   */
  function setupDetecting(doc, container) {
    doc.addEventListener('mouseover', (e) => hovering(e, container), true);

    doc.addEventListener('mouseleave', (e) => leaving(e, container), false);
  }

  function hovering(e, container) {
    generatorBorderNode(e, 'item-borders-detecting', container);
  }

  function leaving(e, container) {
    let borderDom = container.querySelector('.item-borders-detecting');
    borderDom && container.removeChild(borderDom);
  }

  function selecting(e, container) {
    let currNode = generatorBorderNode(e, 'item-borders-selecting', container);
    if (!currNode) return;
    watchBoxResize(currNode);
    // TODO:根据当前组件节点上绑定的id来查询组件数据
    currSelectCompId.value = currNode.dataset.id;
    currSelectComp.value = findCurrWidgetById(widgetList.data, currSelectCompId.value);
  }

  // TODO: 监听元素大小变化修改边框的值
  function watchBoxResize(node) {
    const ro = new ResizeObserver((entries, observer) => {
      for (const entry of entries) {
        const { contentRect: { width, height }, target } = entry;
        // console.log(entry)
        // TODO: 目标对象发生改变之后的逻辑操作， top, left 一直都是 0 不知道为什么，所以自己重新计算一下当前的top、left
        let borderDom = container.value.querySelector('.item-borders-selecting');
        if (!borderDom) return 
        let { top: panrentTop, left: parentLeft } = doc.value.getBoundingClientRect();
        let { top, left } = target.getBoundingClientRect();
        createdNode({ top: top - panrentTop, left: left - parentLeft, width, height }, '', borderDom);
        // console.log(left - parentLeft, top - panrentTop, width, height)
      }
    });

    ro.observe(node); //这里是你观察的对象，官方例子观察body，我观察的是header的容器
  }

  return {
    currSelectComp,
    currSelectCompId,
  };
}
