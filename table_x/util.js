import React from 'react'
import { getLocale } from '../locales'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import _ from 'lodash'
import EVENT_TYPE from '../src/event_type'

const TABLEX_SELECT_ID = 'tablex_select_id'
const TABLEX_EXPAND_ID = 'tablex_expand_id'

const Empty = () => {
  return <div>{getLocale('没有数据')}</div>
}

const Loading = () => {
  return <div>{getLocale('加载数据中...')}</div>
}

const Resizer = props => (
  <div
    {...props}
    className={classNames('gm-tablex-resizer', props.className)}
  />
)

Resizer.propTypes = {
  className: PropTypes.string
}

const CellEmpty = () => <span className='gm-text-desc'>-</span>

const getColumnStyle = column => {
  // width 200
  // flex: 200 0 auto; width: 200px; max-width: 200px;
  // maxWidth 300
  // flex: 100 0 auto; width: 100px; max-width: 300px;
  // minWidth 200
  // flex: 200 0 auto; width: 200px;
  // minWidth 50 width 100
  // flex: 100 0 auto; width: 100px; max-width: 100px;
  const style = {
    flex: `${column.width} 0 auto`,
    width: `${column.width || column.minWidth}px`,
    maxWidth: (column.maxWidth || column.width) + 'px'
  }

  return style
}

const SortHeader = ({ type, className, onClick, onChange, ...rest }) => {
  const handleClick = e => {
    onClick(e)

    if (!type) {
      onChange('asc')
    } else if (type === 'asc') {
      onChange('desc')
    } else if (type === 'desc') {
      onChange(null)
    }
  }

  return (
    <span
      {...rest}
      onClick={handleClick}
      className={classNames(
        'gm-tablex-sort-header gm-cursor',
        {
          'gm-tablex-sort-header-asc': type === 'asc',
          'gm-tablex-sort-header-desc': type === 'desc'
        },
        className
      )}
    />
  )
}

SortHeader.propTypes = {
  type: PropTypes.oneOf(['asc', 'desc']),
  /** 之前很多用了 onClick */
  onClick: PropTypes.func,
  /** 建议用onChange，这样不用管理状态 */
  onChange: PropTypes.func,
  className: PropTypes.string
}

SortHeader.defaultProps = {
  onClick: _.noop,
  onChange: _.noop
}

const afterScroll = _.debounce(() => {
  console.log('afterScroll')
  window.dispatchEvent(new window.CustomEvent(EVENT_TYPE.TABLE_SCROLL))
}, 500)

export {
  TABLEX_SELECT_ID,
  TABLEX_EXPAND_ID,
  Empty,
  Loading,
  SortHeader,
  Resizer,
  CellEmpty,
  getColumnStyle,
  afterScroll
}
