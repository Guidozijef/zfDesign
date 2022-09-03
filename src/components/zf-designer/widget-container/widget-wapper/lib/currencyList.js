// 通用组件
export default [
  {
    name: '头像',
    key: 'avatar',
    icon: '',
    type: '',
    options: {
      size: "small",
      src: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
    }
  },
  {
    name: '按钮',
    key: 'button',
    icon: '',
    type: '',
    options: {
      context: '按钮',
      type: 'primary',
    }
  },
  {
    name: '卡片',
    key: 'card',
    icon: '',
    type: '',
    options: {
      title: '卡片',
      context: '卡片内容'
    }
  },
  {
    name: '轮播图',
    key: 'carousel',
    icon: '',
    type: '',
    options: {
      autoplay: true,
      render: () => {
        return [1,2,3,4].map(num => {
            return `<img
            class="carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel${num}.jpeg"
          ></img>`
        }).join('');
      }
    }
  },
  {
    name: '折叠面板',
    key: 'collapse',
    icon: '',
    type: '',
    options: {
      render: () => {
        return `<n-collapse-item title="青铜" name="1">
        <div>可以</div>
      </n-collapse-item>`
      }
    }
  },
  {
    name: '分割线',
    key: 'divider',
    icon: '',
    type: '',
    options: {}
  },
  {
    name: '下拉菜单',
    key: 'dropdown',
    icon: '',
    type: '',
    options: {}
  },
  {
    name: '文本省略',
    key: 'ellipsis',
    icon: '',
    type: '',
    options: {}
  },
  {
    name: '渐变文字',
    key: 'gradientText',
    icon: '',
    type: '',
    options: {}
  },
  {
    name: '图标',
    key: 'icon',
    icon: '',
    type: '',
    options: {}
  },
  {
    name: '页头',
    key: 'pageHeader',
    icon: '',
    type: '',
    options: {}
  },
  {
    name: '标签',
    key: 'tag',
    icon: '',
    type: '',
    options: {}
  },
  {
    name: '排印',
    key: 'typography',
    icon: '',
    type: '',
    options: {}
  },
  {
    name: '水印',
    key: 'watermark',
    icon: '',
    type: '',
    options: {}
  },
]