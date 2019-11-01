import React, { useState } from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { getLocale } from '../../locales'
import moment from 'moment'
import Flex from '../flex'
import Two from './two'

/** 左侧选择参数列表 */
const quickList = [
  { range: [[0, 'day'], [0, 'day']], text: getLocale('今天') },
  { range: [[-1, 'day'], [-1, 'day']], text: getLocale('昨天') },
  { range: [[-6, 'day'], [0, 'day']], text: getLocale('近7天') },
  { range: [[-30, 'day'], [0, 'day']], text: getLocale('近一个月') }
]

const Left = props => {
  const { onSelect } = props

  const handleClick = item => {
    const [b, e] = item.range

    const begin = moment()
      .startOf('day')
      .add(b[0], b[1])
      .toDate()
    const end = moment()
      .endOf('day')
      .add(e[0], e[1])
      .toDate()

    onSelect(begin, end)
  }

  return (
    <div className='gm-border-right gm-margin-top-10' style={{ width: '70px' }}>
      {_.map(quickList, item => (
        <div
          key={item.text}
          className='gm-text-hover-primary gm-padding-10 gm-cursor'
          onClick={() => handleClick(item)}
        >
          {item.text}
        </div>
      ))}
    </div>
  )
}

Left.propTypes = {
  onSelect: PropTypes.func.isRequired
}

const Bottom = props => {
  const { begin, end, onOK, onCancel } = props

  let b = <span className='gm-text-desc'>开始日期</span>
  let e = <span className='gm-text-desc'>结束日期</span>

  if (begin) {
    b = moment(begin).format('YYYY-MM-DD')
  }

  if (end) {
    e = moment(end).format('YYYY-MM-DD')
  }

  return (
    <Flex
      alignCenter
      justifyBetween
      className='gm-border-top'
      style={{
        padding: ' 10px 10px 10px 70px'
      }}
    >
      <span className='gm-text-bold gm-date-range-picker-bottom-text'>
        {b} ~ {e}
      </span>
      <div>
        <button className='btn btn-default' onClick={onCancel}>
          取消
        </button>
        <span className='gm-gap-10' />
        <button
          className='btn btn-primary'
          onClick={onOK}
          disabled={!(begin && end)}
        >
          确定
        </button>
      </div>
    </Flex>
  )
}

Bottom.propTypes = {
  begin: PropTypes.object,
  end: PropTypes.object,
  onOK: PropTypes.func,
  onCancel: PropTypes.func
}

/**
 * 日期段选择
 * 形态上不支持全键盘，所以不做相关逻辑
 * */
const Overlay = props => {
  const { begin, end, onOK, onCancel, min, max, disabledDate } = props

  const [_begin, setBegin] = useState(begin)
  const [_end, setEnd] = useState(end)

  const handleSelect = (begin, end) => {
    setBegin(begin)
    setEnd(end)
  }

  const handleOk = () => {
    onOK(_begin, _end)
  }

  return (
    <div className='gm-date-range-picker-overlay gm-border-0'>
      <Flex>
        <Left onSelect={onOK} />
        <Two
          begin={_begin}
          end={_end}
          onSelect={handleSelect}
          min={min}
          max={max}
          disabledDate={disabledDate}
        />
      </Flex>
      <Bottom begin={_begin} end={_end} onOK={handleOk} onCancel={onCancel} />
    </div>
  )
}

Overlay.propTypes = {
  begin: PropTypes.object,
  end: PropTypes.object,
  onOK: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  min: PropTypes.object,
  max: PropTypes.object,
  disabledDate: PropTypes.func
}

export default Overlay
