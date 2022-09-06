import { guid } from '@/utils'

// 数据录入组件
export default [
  {
    name: '自动填充',
    key: 'autoComplete',
    icon: '',
    type: '',
    id: guid(),
    options: {}
  },
  {
    name: '级联选择',
    key: 'cascader',
    icon: '',
    type: '',
    id: guid(),
    options: {}
  },
  {
    name: '颜色选择器',
    key: 'colorPicker',
    icon: '',
    type: '',
    id: guid(),
    options: {}
  },
  {
    name: '复选框',
    key: 'checkbox',
    icon: '',
    type: '',
    id: guid(),
    options: {}
  },
  {
    name: '日期选择器',
    key: 'datePicker',
    icon: '',
    type: '',
    id: guid(),
    options: {}
  },
  {
    name: '动态录入',
    key: 'dynamicInput',
    icon: '',
    type: '',
    id: guid(),
    options: {}
  },
  {
    name: '动态标签',
    key: 'dynamicTags',
    icon: '',
    type: '',
    id: guid(),
    options: {}
  },
  {
    name: '表单',
    key: 'form',
    icon: '',
    type: '',
    id: guid(),
    options: {
      ref: 'formRef',
      inline: true,
      model: {
        name: ''
      },
      rules: {
        name: {
          required: true,
          message: '请输入姓名',
          trigger: 'blur'
        },
      },
      size: 'small'
    },
    children: (h, { options, designer }) => {
      console.log('dasigner', designer)
      return <n-form-item label="姓名" path="name">
      <n-input v-model:value={ designer.formValue.name } placeholder="输入姓名" />
    </n-form-item>
    }
  },
  {
    name: '文本输入',
    key: 'input',
    icon: '',
    type: '',
    id: guid(),
    options: {}
  },
  {
    name: '数字输入',
    key: 'inputNumber',
    icon: '',
    type: '',
    id: guid(),
    options: {}
  },
  {
    name: '提及',
    key: 'mention',
    icon: '',
    type: '',
    id: guid(),
    options: {}
  },
  {
    name: '单选',
    key: 'radio',
    icon: '',
    type: '',
    id: guid(),
    options: {}
  },
  {
    name: '评分',
    key: 'rate',
    icon: '',
    type: '',
    id: guid(),
    options: {}
  },
  {
    name: '选择器',
    key: 'select',
    icon: '',
    type: '',
    id: guid(),
    options: {}
  },
  {
    name: '滑动选择',
    key: 'slider',
    icon: '',
    type: '',
    id: guid(),
    options: {}
  },
  {
    name: '开关',
    key: 'switch',
    icon: '',
    type: '',
    id: guid(),
    options: {}
  },
  {
    name: '时间选择器',
    key: 'timePicker',
    icon: '',
    type: '',
    id: guid(),
    options: {}
  },
  {
    name: '复选框',
    key: 'transfer',
    icon: '',
    type: '',
    id: guid(),
    options: {}
  },
  {
    name: '树形选择',
    key: 'treeSelect',
    icon: '',
    type: '',
    id: guid(),
    options: {}
  },
  {
    name: '上传',
    key: 'upload',
    icon: '',
    type: '',
    id: guid(),
    options: {}
  },
  
]