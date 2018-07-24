import React from 'react'
import { Menu } from '../src/index'
import { history } from './service'
import { withRouter } from 'react-router-dom'
import _ from 'lodash'
import { Framework } from '../framework/index'

const data = [{
  name: 'Guide',
  sub: [
    {name: 'About', path: '/doc/About'}
  ]
}, {
  name: 'Layout',
  sub: [
    {name: 'ClassName', path: '/doc/ClassName'},
    {name: 'Flex', path: '/doc/Flex'},
    {name: 'Quick', path: '/doc/Quick'},
    {name: 'Collapse 折叠面板', path: '/doc/Collapse'},
    {name: 'Divider 分割线', path: '/doc/Divider'},
    {name: 'Nav 新导航', path: '/doc/Nav'}
  ]
}, {
  name: 'Data',
  sub: [
    {name: 'Calendar 日历', path: '/doc/Calendar'},
    {name: 'Sheet 表格', path: '/doc/Sheet'},
    {name: 'Pagination 页码', path: '/doc/Pagination'}
  ]
}, {
  name: 'Select',
  sub: [
    {name: 'Cascader 级联选择', path: '/doc/Cascader'},
    {name: 'DropSelect', path: '/doc/DropSelect'},
    {name: 'FilterSelect 搜索选择', path: '/doc/FilterSelect'},
    {name: 'TreeSelect 树形选择', path: '/doc/TreeSelect'},
    {name: 'Transfer 穿梭框', path: '/doc/Transfer'},
    {name: 'Tree 树形选择', path: '/doc/Tree'},
    {name: 'DatePicker 日期选择', path: '/doc/DatePicker'},
    {name: 'TimeSpan 时间点选择', path: '/doc/TimeSpan'},
    {name: 'ColorPicker 颜色选择', path: '/doc/ColorPicker'}
  ]
}, {
  name: 'Layer',
  sub: [
    {name: 'Tip 提示', path: '/doc/Tip'},
    {name: 'Dialog 对话框', path: '/doc/Dialog'},
    {name: 'Popover 浮层', path: '/doc/Popover'},
    {name: 'Modal 模态框', path: '/doc/Modal'},
    {name: 'Drawer 抽屉', path: '/doc/Drawer'},
    {name: 'ImagePreview 图片预览', path: '/doc/ImagePreview'}
  ]
}, {
  name: 'Form',
  sub: [
    {name: 'Validator 校验工具', path: '/doc/Validator'},
    {name: 'Form 表单', path: '/doc/Form'},
    {name: 'Radio & Checkbox 单(多)选框', path: '/doc/Radio'},
    {name: 'Switch 开关', path: '/doc/Switch'},
    {name: 'InputNumber 数字输入框', path: '/doc/InputNumber'},
    {name: 'Select 选择', path: '/doc/Select'},
    {name: 'DropDown 下拉框', path: '/doc/DropDown'},
    {name: 'Uploader 上传', path: '/doc/Uploader'},
    {name: 'Button 按钮', path: '/doc/Button'}
  ]
}, {
  name: 'Loading',
  sub: [
    {name: 'Loading 加载中', path: '/doc/Loading'},
    {name: 'Progress 请求进度条', path: '/doc/Progress'}
  ]
}, {
  name: 'Other',
  sub: [
    {name: 'NProgress 顶部请求进度条', path: '/doc/NProgress'},
    {name: 'Storage', path: '/doc/Storage'},
    {name: 'EditableText', path: '/doc/EditableText'}
  ]
}, {
  name: '废弃',
  sub: [
    {name: 'SearchSelect 废弃', path: '/doc/SearchSelect'},
    {name: 'FilterSearchSelect 搜索选择', path: '/doc/FilterSearchSelect'},
    {name: 'ImportLead 导入指引', path: '/doc/ImportLead'}
  ]
}]

@withRouter
class NavConfig extends React.Component {
  handleSelect (item) {
    Framework.scrollTop()
    history.push(item.path)
  }

  render () {
    const {location: {pathname}} = this.props
    let selected = null

    // doc 性能无须考虑太多，暂且每次render处理
    _.find(data, v => {
      selected = _.find(v.sub, s => s.path === pathname)
      return selected
    })

    return (
      <Menu
        id='docMenu'
        className='gm-border-0'
        allowCollapse
        data={data}
        onSelect={this.handleSelect}
        selected={selected}
      />
    )
  }
}

export default NavConfig
