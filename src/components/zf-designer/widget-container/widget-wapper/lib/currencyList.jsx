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
    key: "carousel",
    icon: "",
    type: "",
    id: guid(),
    options: {
      autoplay: true,
      render: () => {}
    },
    children: () => {
      return (<span><img
            class="carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
          ></img>
          <img
            class="carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
          ></img>
          <img
            class="carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
          ></img>
          <img
            class="carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
          ></img></span>)
    }
  },
  {
    name: "折叠面板",
    key: "collapse",
    icon: "",
    type: "",
    id: guid(),
    options: {},
    children: () => {
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
    options: {}
  },
  {
    name: "文本省略",
    key: "ellipsis",
    icon: "",
    type: "",
    id: guid(),
    isInline: true,
    options: {}
  },
  {
    name: "渐变文字",
    key: "gradientText",
    icon: "",
    type: "",
    id: guid(),
    isInline: true,
    options: {}
  },
  {
    name: "图标",
    key: "icon",
    icon: "",
    type: "",
    id: guid(),
    isInline: true,
    options: {}
  },
  {
    name: "页头",
    key: "pageHeader",
    icon: "",
    type: "",
    id: guid(),
    options: {}
  },
  {
    name: "标签",
    key: "tag",
    icon: "",
    type: "",
    id: guid(),
    isInline: true,
    options: {}
  },
  {
    name: "排印",
    key: "typography",
    icon: "",
    type: "",
    id: guid(),
    options: {}
  },
  {
    name: "水印",
    key: "watermark",
    icon: "",
    type: "",
    id: guid(),
    options: {}
  }
];
