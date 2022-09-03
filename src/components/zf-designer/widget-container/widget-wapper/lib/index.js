let uid = 0

import currencyList from './currencyList'
import dataEntryList from './dataEntryList'
import dataDisplayList from './dataDisplayList'
import navigationList from './vavigationList'
import feedbackList from './feedbackList'
import layoutList from './layoutList'
import utilsList from './utilsList'

export default [
  {
    collapseName: '通用组件',
    key: uid++,
    compList: currencyList,
  },
  {
    collapseName: '数据录入组件',
    key: uid++,
    compList: dataEntryList,
  },
  {
    collapseName: '数据展示组件',
    key: uid++,
    compList: dataDisplayList,
  },
  {
    collapseName: '导航组件',
    key: uid++,
    compList: navigationList
  },
  {
    collapseName: '反馈组件',
    key: uid++,
    compList: feedbackList
  },
  {
    collapseName: '布局组件',
    key: uid++,
    compList: layoutList
  },
  {
    collapseName: '工具组件',
    key: uid++,
    compList: utilsList
  },
  {
    collapseName: '配置组件',
    key: uid++,
    compList: []
  },
  {
    collapseName: '废弃组件',
    key: uid++,
    compList: []
  },
]