import { guid } from '@/utils'

// 通用组件
export default [
  {
    name: "头像",
    key: "avatar",
    icon: "",
    type: "",
    id: guid(),
    isInline: true,
    options: {
      size: "small",
      src: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
    }
  },
  {
    name: "按钮",
    key: "button",
    icon: "",
    type: "",
    id: guid(),
    isInline: true,
    options: {
      context: "按钮",
      type: "primary"
    }
  },
  {
    name: "卡片",
    key: "card",
    icon: "",
    type: "",
    id: guid(),
    options: {
      title: "卡片",
      context: "卡片内容"
    }
  },
  {
    name: "轮播图",
    key: "carousel-custom",
    icon: "",
    type: "",
    id: guid(),
    options: {
      autoplay: true,
      showArrow: false
    },
  },
  {
    name: "折叠面板",
    key: "collapse",
    icon: "",
    type: "",
    id: guid(),
    options: {},
    slot: (h, { options }) => {
      return (
        <n-collapse-item title="青铜" name="1">
          <div>可以</div>
        </n-collapse-item>
      );
    }
  },
  {
    name: "分割线",
    key: "divider",
    icon: "",
    type: "",
    id: guid(),
    options: {}
  },
  {
    name: "下拉菜单",
    key: "dropdown",
    icon: "",
    type: "",
    id: guid(),
    isInline: true,
    options: {
      trigger: 'hover',
      options: [
        {
          label: "滨海湾金沙，新加坡",
          key: "marina bay sands",
          disabled: true
        },
        {
          label: "布朗酒店，伦敦",
          key: "brown's hotel, london"
        },
        {
          label: "亚特兰蒂斯巴哈马，拿骚",
          key: "atlantis nahamas, nassau"
        },
        {
          label: "比佛利山庄酒店，洛杉矶",
          key: "the beverly hills hotel, los angeles"
        }
      ]
    },
    slot: () => {
      return <n-button>这是一个下拉菜单</n-button>
    }
  },
  {
    name: "文本省略",
    key: "ellipsis",
    icon: "",
    type: "",
    id: guid(),
    isInline: true,
    options: {
      style: "max-width: 240px",
      context: '住在我心里孤独的 孤独的海怪 痛苦之王 开始厌倦 深海的光 停滞的海浪'
    }
  },
  // {
  //   name: "渐变文字",
  //   key: "gradientText",
  //   icon: "",
  //   type: "",
  //   id: guid(),
  //   isInline: true,
  //   options: {}
  // },
  // {
  //   name: "图标",
  //   key: "icon",
  //   icon: "",
  //   type: "",
  //   id: guid(),
  //   isInline: true,
  //   options: {}
  // },
  // {
  //   name: "页头",
  //   key: "pageHeader",
  //   icon: "",
  //   type: "",
  //   id: guid(),
  //   options: {}
  // },
  {
    name: "标签",
    key: "tag",
    icon: "",
    type: "",
    id: guid(),
    isInline: true,
    options: {
      context: '爱在西元前',
      type: 'success',
      closable: false
    }
  },
  // {
  //   name: "排印",
  //   key: "typography",
  //   icon: "",
  //   type: "",
  //   id: guid(),
  //   options: {}
  // },
  // {
  //   name: "水印",
  //   key: "watermark",
  //   icon: "",
  //   type: "",
  //   id: guid(),
  //   options: {}
  // }
];
