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
    options: {
      value: ref(''),
      inputProps: {
        autocomplete: 'disabled'
      },
      placeholder: "邮箱",
      options: computed(() => {
        return [];
      })
    }
  },
  {
    name: "级联选择",
    key: "cascader",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {}
  },
  {
    name: "颜色选择器",
    key: "colorPicker",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {}
  },
  {
    name: "复选框",
    key: "checkbox",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {}
  },
  {
    name: "日期选择器",
    key: "datePicker",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {}
  },
  {
    name: "动态录入",
    key: "dynamicInput",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {}
  },
  {
    name: "动态标签",
    key: "dynamicTags",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {}
  },
  {
    name: "表单",
    key: "form",
    icon: "",
    type: "",
    id: guid(),
    options: {
      ref: "formRef",
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
          key: "form-item",
          icon: "",
          type: "",
          id: guid(),
          isInline: true,
          options: {
            label: "姓名",
            path: "name"
          },
          slot: (h, { optiions, parent }) => {
            return (
              <n-input
                v-model:value={parent.options.model.name}
                placeholder="输入姓名"
              />
            );
          }
        }
      ]
    })
  },
  {
    name: "文本输入",
    key: "input",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {}
  },
  {
    name: "数字输入",
    key: "inputNumber",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {}
  },
  {
    name: "提及",
    key: "mention",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {}
  },
  {
    name: "单选",
    key: "radio",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {}
  },
  {
    name: "评分",
    key: "rate",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {}
  },
  {
    name: "选择器",
    key: "select",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {}
  },
  {
    name: "滑动选择",
    key: "slider",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {}
  },
  {
    name: "开关",
    key: "switch",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {}
  },
  {
    name: "时间选择器",
    key: "timePicker",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {}
  },
  {
    name: "复选框",
    key: "transfer",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {}
  },
  {
    name: "树形选择",
    key: "treeSelect",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {}
  },
  {
    name: "上传",
    key: "upload",
    icon: "",
    type: "",
    isInline: true,
    id: guid(),
    options: {}
  }
];
