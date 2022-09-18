import { guid } from "@/utils";
import { ref, reactive, computed } from "vue";

// 数据录入组件
export default [
  {
    name: "自动填充",
    key: "auto-complete",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    props: {
      value: ref(''),
      inputProps: {
        autocomplete: 'disabled'
      },
      placeholder: "邮箱",
      options: computed(() => {
        return [];
      })
    },
    options: {}
  },
  {
    name: "级联选择",
    key: "cascader",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {},
    props: {}
  },
  {
    name: "颜色选择器",
    key: "colorPicker",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {},
    props: {}
  },
  {
    name: "复选框",
    key: "checkbox",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {},
    props: {}
  },
  {
    name: "日期选择器",
    key: "datePicker",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {},
    props: {}
  },
  {
    name: "动态录入",
    key: "dynamicInput",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {},
    props: {}
  },
  {
    name: "动态标签",
    key: "dynamicTags",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {},
    props: {}
  },
  {
    name: "表单",
    key: "form-custom",
    icon: "",
    type: "",
    id: guid(),
    isDraggable: true,
    options: [
      {
        name: '标签宽度',
        key: 'labelWidth',
        type: 'input',
        defaultVlaue: 70,
      },
      {
        name: '对齐方式',
        key: 'labelPlacement',
        type: 'select',
        options: [
          {
            value: 'left',
            label: 'left'
          },
          {
            value: 'top',
            label: 'top'
          },
        ]
      },
      {
        name: '大小',
        key: 'size',
        type: 'select',
        options: [
          {
            value: 'large',
            label: '大'
          },
          {
            value: 'medium',
            label: '中'
          },
          {
            value: 'small',
            label: '小'
          },
        ]
      },
    ],
    props: {
      labelWidth: 100,
      formRef: ref('formRef'),
      inline: true,
      model: reactive({
        name: ""
      }),
      rules: {
        name: {
          required: true,
          message: "请输入姓名",
          trigger: "blur"
        }
      },
      size: "small"
    },
    children: reactive({
      data: [
        {
          name: "表单项",
          key: "form-item-custom",
          icon: "",
          type: "",
          id: guid(),
          isDraggable: true,
          isInline: true,
          props: {
            label: "表单项",
            path: "name",
            placeholder: '输入表单项'
          },
          options: [{}],
          children: reactive({
            data: [
              {
                name: "文本输入",
                key: "input-custom",
                icon: "",
                type: "",
                id: guid(),
                isInline: true,
                props: {
                  label: "表单项",
                  path: "name",
                  placeholder: '请输入'
                },
                options: [{}],
              }
            ]
          })
        },
      ]
    })
  },
  {
    name: "表单项",
    key: "form-item-custom",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: [{}],
    isDraggable: true,
    props: {
      label: "表单项",
      path: "name",
    }
  },
  {
    name: "文本输入",
    key: "input",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {},
    props: {}
  },
  {
    name: "数字输入",
    key: "inputNumber",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {},
    props: {}
  },
  {
    name: "提及",
    key: "mention",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {},
    props: {}
  },
  {
    name: "单选",
    key: "radio",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {},
    props: {}
  },
  {
    name: "评分",
    key: "rate",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {},
    props: {}
  },
  {
    name: "选择器",
    key: "select",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {},
    props: {}
  },
  {
    name: "滑动选择",
    key: "slider",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {},
    props: {}
  },
  {
    name: "开关",
    key: "switch",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {},
    props: {}
  },
  {
    name: "时间选择器",
    key: "timePicker",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {},
    props: {}
  },
  {
    name: "复选框",
    key: "transfer",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {},
    props: {}
  },
  {
    name: "树形选择",
    key: "treeSelect",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {},
    props: {}
  },
  {
    name: "上传",
    key: "upload",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {},
    props: {}
  }
];
