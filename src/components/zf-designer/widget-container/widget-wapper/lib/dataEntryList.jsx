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
        name: 'ref',
        key: 'formRef',
        type: 'input',
      },
      {
        name: '行内表单',
        key: 'inline',
        type: 'switch',
      },
      {
        name: '标签宽度',
        key: 'labelWidth',
        type: 'input',
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
        ],
      },
      {
        name: '标签对齐',
        key: 'labelAlign',
        type: 'select',
        options: [
          {
            value: 'left',
            label: 'left'
          },
          {
            value: 'right',
            label: 'right'
          },
        ],
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
        ],
      },
    ],
    props: {
      labelWidth: '70',
      formRef: ref('formRef'),
      inline: true,
      model: reactive({}),
      size: "small",
      labelPlacement: 'left',
      labelAlign: 'left'
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
            labelWidth: '70',
            showLabel: true,
            showRequireMark: true,
            requireMarkPlacement: 'left',  // 'left' | 'right' | 'right-hanging'
            rules: {
              name: {
                required: true,
                message: "请输入姓名",
                trigger: "blur"
              }
            },
          },
          options: [
            {
              name: 'label',
              key: 'label',
              type: 'input',
            },
            {
              name: '字段路径',
              key: 'path',
              type: 'input',
            },
            {
              name: '标签宽度',
              key: 'labelWidth',
              type: 'input',
            },
            {
              name: '是否显示标签',
              key: 'showLabel',
              type: 'switch',
            },
            {
              name: '必填标记',
              key: 'showRequireMark',
              type: 'switch',
            },
            {
              name: '标记位置',
              key: 'requireMarkPlacement',
              type: 'select',
              options: [
                {
                  value: 'left',
                  label: 'left'
                },
                {
                  value: 'right',
                  label: 'right'
                },
                // {
                //   value: 'right-hanging',
                //   label: 'right-hanging'
                // }
              ]
            },
            {
              name: '校验规则',
              key: 'rule',
              type: 'textarea',
            },
          ],
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
                  placeholder: '请输入',
                  value: "",
                  clearable: ref(true),
                  disabled: ref(false),
                  // readonly: ref(true),
                  showCount: ref(false)
                },
                options: [
                  {
                    name: '当前值',
                    key: 'value',
                    type: 'input',
                  },
                  {
                    name: '占位提示',
                    key: 'placeholder',
                    type: 'input',
                  },
                  {
                    name: '是否清除',
                    key: 'clearable',
                    type: 'switch',
                  },
                  {
                    name: '是否只读',
                    key: 'readonly',
                    type: 'switch',
                  },
                  {
                    name: '是否禁用',
                    key: 'disabled',
                    type: 'switch',
                  },
                  {
                    name: '是否计数',
                    key: 'showCount',
                    type: 'switch',
                  },
                  {
                    name: '最大输入长度',
                    key: 'maxlength',
                    type: 'number-input',
                  },
                  {
                    name: '最小输入长度',
                    key: 'minlength',
                    type: 'number-input',
                  },
                ],
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
