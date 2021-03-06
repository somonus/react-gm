import React from 'react'
import PropTypes from 'prop-types'
import { storiesOf } from '@storybook/react'
import { observable } from 'mobx'
import { Observer } from 'mobx-react'
import {
  keyboardTableHoc,
  KCInput,
  KCInputNumberV2,
  KCLevelSelect,
  KCMoreSelect,
  KCTableSelect,
  KCDatePicker,
  KCSelect,
  KeyboardUtil
} from './'
import { EditTable, fixedColumnsTableHOC, TableUtil } from '../table'
import _ from 'lodash'

const { OperationHeader, EditTableOperation, referOfWidth } = TableUtil
const KeyboardEditTable = fixedColumnsTableHOC(keyboardTableHoc(EditTable))

const data = [
  {
    value: 1,
    text: '南山'
  },
  {
    value: 2,
    text: '福田'
  },
  {
    value: 3,
    text: '罗湖'
  },
  {
    value: 4,
    text: '宝安'
  },
  {
    value: 5,
    text: '宝安'
  },
  {
    value: 6,
    text: '宝安'
  },
  {
    value: 7,
    text: '宝安'
  },
  {
    value: 8,
    text: '宝安'
  },
  {
    value: 9,
    text: '宝安'
  },
  {
    value: 10,
    text: '宝安'
  }
]

const selectData = [
  { value: '', text: '请选择' },
  { value: 0, text: '男' },
  { value: 1, text: '女' }
]

const areaData = [
  {
    value: '0',
    text: '宝安',
    children: [
      {
        value: '01',
        text: '西乡'
      },
      {
        value: '02',
        text: '固戍'
      }
    ]
  },
  {
    value: '1',
    text: '南山',
    children: [
      {
        value: '11',
        text: '科技园',
        children: [
          {
            value: '111',
            text: '东区'
          },
          {
            value: '112',
            text: '西区'
          }
        ]
      }
    ]
  }
]

const tableData = [
  {
    purchase_price_limit: null,
    std_unit_name: '斤',
    sale_ratio: 3,
    category_id_1: 'A3978',
    settle_supplier_name: '水果供应商',
    spu_id: 'C874502',
    sku_id: 'D13944575',
    sale_unit_name: '包',
    category_id_2: 'B19074',
    category_id_2_name: '甘蓝类',
    settle_supplier_id: 'T13251',
    sku_name: '大白菜',
    station_id: 'T7936',
    category_id_1_name: '蔬菜',
    max_stock_unit_price: null
  },
  {
    purchase_price_limit: null,
    std_unit_name: '斤',
    sale_ratio: 1,
    category_id_1: 'A3978',
    settle_supplier_name: '水果供应商',
    spu_id: 'C874502',
    sku_id: 'D3628124',
    sale_unit_name: '斤',
    category_id_2: 'B19074',
    category_id_2_name: '甘蓝类',
    settle_supplier_id: 'T13251',
    sku_name: '小白菜',
    station_id: 'T7936',
    category_id_1_name: '蔬菜',
    max_stock_unit_price: null
  },
  {
    purchase_price_limit: null,
    std_unit_name: '斤',
    sale_ratio: 1,
    category_id_1: 'A3978',
    settle_supplier_name: '水果供应商',
    spu_id: 'C874502',
    sku_id: 'D3628124',
    sale_unit_name: '斤',
    category_id_2: 'B19074',
    category_id_2_name: '甘蓝类',
    settle_supplier_id: 'T13251',
    sku_name: '小白菜',
    station_id: 'T7936',
    category_id_1_name: '蔬菜',
    max_stock_unit_price: null
  }
]

const newTableData = _.map(tableData, v => ({
  value: v.sku_id,
  text: v.sku_name,
  original: v
}))

const tableColumns = [
  {
    Header: 'id',
    accessor: 'original.sku_id',
    width: 100
  },
  {
    Header: '名字',
    accessor: 'original.sku_name',
    width: 100
  },
  {
    Header: '供应商',
    accessor: 'original.settle_supplier_name',
    width: 100
  }
]

const store = observable({
  data: [
    {
      position: null,
      name: '',
      age: null,
      area: [],
      sku: null,
      date: null,
      gender: ''
    },
    {
      position: null,
      name: '',
      age: null,
      area: [],
      sku: null,
      date: null,
      gender: ''
    },
    {
      position: null,
      name: '',
      age: null,
      area: [],
      sku: null,
      date: null,
      gender: ''
    }
  ],
  addList() {
    this.data.push({
      position: null,
      name: '',
      age: null,
      sku: null,
      date: null,
      gender: ''
    })
  },
  setPosition(index, position) {
    this.data[index].position = position
  },
  setName(index, name) {
    this.data[index] = {
      ...this.data[index],
      name
    }
    // this.data[index].name = name
  },
  setAge(index, age) {
    this.data[index].age = age
  },
  setArea(index, area) {
    this.data[index].area = area
  },
  setSku(index, sku) {
    this.data[index].sku = sku
  },
  setDate(index, date) {
    this.data[index].date = date
  },
  setGender(index, gender) {
    this.data[index].gender = gender
  }
})

// setTimeout(() => {
//   console.log('set data')
//   store.data[0]['name'] = '12313'
//   // store.data = [{ name: '123123' }]
// }, 5000)

const CellEditOperation = React.memo(({ index }) => {
  return (
    <EditTableOperation
      onAddRow={() => store.addList()}
      onDeleteRow={() => console.log('删除一行', index)}
    />
  )
})

CellEditOperation.propTypes = {
  index: PropTypes.number.isRequired
}

const CellName = React.memo(({ index }) => {
  const item = store.data[index]
  return (
    <Observer>
      {() => {
        return (
          <KCInput
            type='text'
            value={item.name}
            onChange={e => store.setName(index, e.target.value)}
          />
        )
      }}
    </Observer>
  )
})

CellName.propTypes = {
  index: PropTypes.number.isRequired
}

const CellPosition = React.memo(({ index }) => {
  console.log('CellPosition', index)
  const item = store.data[index]
  return (
    <Observer>
      {() => {
        console.log('CellPosition observer', index)
        return (
          <KCMoreSelect
            style={{ width: referOfWidth.searchBox }}
            data={data}
            selected={item.position} // 不能用 row.value，因为并不是 store 的数据
            onSelect={selected => store.setPosition(index, selected)}
          />
        )
      }}
    </Observer>
  )
})

CellPosition.propTypes = {
  index: PropTypes.number.isRequired
}

storiesOf('快速录入|Keyboard', module)
  .add('说明', () => <div />, {
    info: {
      text: `
各单元格宽度 具体见 TableUtil.referOfWidth

上述都是建议宽度，具体根据实际业务场景各自调整。 具体用法看代码。
      `
    }
  })
  .add('hoc', () => {
    const ref = React.createRef()
    return (
      <div>
        <KeyboardEditTable
          id='test'
          ref={ref}
          onAddRow={() => store.addList()}
          data={store.data.slice()} // 记得 slice 下，否则增加数据不会 刷新
          columns={[
            {
              Header: '序号',
              Cell: cellProps => cellProps.index + 1,
              fixed: 'left',
              width: referOfWidth.noCell
            },
            {
              Header: OperationHeader,
              fixed: 'left',
              width: referOfWidth.operationCell,
              Cell: cellProps => <CellEditOperation index={cellProps.index} />
            },
            {
              Header: '位置',
              accessor: 'position',
              minWidth: 170,
              isKeyboard: true,
              Cell: cellProps => (
                // 使用 Observer 包下，才能响应 store 数据
                <CellPosition index={cellProps.index} />
              )
            },
            {
              Header: '名字',
              accessor: 'name',
              minWidth: 150,
              isKeyboard: true,
              Cell: cellProps => <CellName index={cellProps.index} />
            }
          ]}
        />
      </div>
    )
  })
  .add('doFocus and onBeforeDispatch', () => {
    const handleBeforeDispatch = ({ actionName, to, from }) => {
      console.log(actionName, to, from)

      // 假设对name做重复判断
      if (from.columnKey === 'name') {
        // some thing
        // 此时 name 已经设置好。判断下是否重复
        const value = store.data[from.rowKey].name
        const sameIndex = _.findIndex(
          store.data,
          (v, i) => i !== from.rowKey && v.name === value
        )

        // 存在重复
        if (sameIndex >= 0) {
          // 还原值
          store.data[from.rowKey] = ''
          // 调度
          KeyboardUtil.doFocus('test2', sameIndex, 'name')
          // 阻止默认的调度
          return false
        }
      }
    }

    return (
      <KeyboardEditTable
        id='test2'
        onBeforeDispatch={handleBeforeDispatch}
        data={store.data}
        onAddRow={_.noop}
        columns={[
          {
            Header: '名字',
            accessor: 'name',
            minWidth: 150,
            isKeyboard: true,
            Cell: cellProps => <CellName index={cellProps.index} />
          },
          {
            Header: '年龄',
            accessor: 'age',
            minWidth: 100,
            isKeyboard: true,
            Cell: cellProps => (
              <Observer>
                {() => (
                  <KCInputNumberV2
                    onFocus={e => e.target.select()}
                    style={{ width: referOfWidth.numberInputBox }}
                    value={cellProps.original.age}
                    onChange={value => store.setAge(cellProps.index, value)}
                  />
                )}
              </Observer>
            )
          }
        ]}
      />
    )
  })
