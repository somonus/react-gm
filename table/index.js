import Table from './table'
import SubTable from './table/sub_table'
import EditTable from './edit/edit_table'

import fixedColumnsTableHOC from './hoc/fixed_columns_table'
import fixedFirstColumnsTableHOC from './hoc/fixed_first_columns_table'
import selectTableV2HOC from './hoc/select_table'
import expandTableHOC from './hoc/expand_table'
import diyTableHOC from './hoc/diy_table'
// 准备废弃
import selectTableHOC from './hoc/select_table_old'

import BatchActionBar from './hoc/select_table/batch_action_bar'

// 只暴露些方法
import {
  OperationHeader,
  OperationDelete,
  OperationDetail,
  OperationCell,
  OperationRowEdit,
  SortHeader,
  EditTableOperation,
  referOfWidth,
  EditBox
} from './util'

// 向下兼容，保留，会逐步废弃
const SelectTable = selectTableHOC(Table)

const TableUtil = {
  OperationHeader,
  OperationDelete,
  OperationDetail,
  OperationCell,
  OperationRowEdit,
  SortHeader,
  EditTableOperation,
  EditBox,
  referOfWidth,
  BatchActionBar
}

export {
  Table,
  EditTable,
  SubTable,
  SelectTable,
  selectTableHOC,
  diyTableHOC,
  fixedColumnsTableHOC,
  fixedFirstColumnsTableHOC,
  selectTableV2HOC,
  expandTableHOC,
  TableUtil
}
