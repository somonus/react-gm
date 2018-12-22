import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classNames from 'classnames'

class List extends React.Component {
  isActive = (value) => {
    const { multiple, selected } = this.props
    if (multiple) {
      return selected.includes(value)
    } else {
      return selected === value
    }
  }

  handleSelect = (item) => {
    const { multiple, selected, onSelect } = this.props
    if (multiple) {
      onSelect(_.xor(selected, [item.value]))
    } else {
      onSelect(item.value)
    }
  }

  handleMouseEnter = (item) => {
    const { onMouseEnter } = this.props

    onMouseEnter(item.value)
  }

  render () {
    const {
      data,
      selected, multiple, onSelect, onMouseEnter, // eslint-disable-line
      willSelected,
      renderName,
      className,
      ...rest
    } = this.props

    return (
      <div
        {...rest}
        className={classNames('gm-list', className)}
      >
        {_.map(data, v => (
          <div
            key={v.value}
            className={classNames('gm-list-item', {
              active: this.isActive(v.value),
              'will-active': willSelected === v.value
            })}
            onClick={this.handleSelect.bind(this, v)}
            onMouseEnter={this.handleMouseEnter.bind(this, v)}
          >
            {renderName(v)}
          </div>
        ))}
      </div>
    )
  }
}

List.propTypes = {
  data: PropTypes.array.isRequired, // value name
  selected: PropTypes.any,
  willSelected: PropTypes.any,
  multiple: PropTypes.bool, // true，则 selected 是数组
  onSelect: PropTypes.func,
  onMouseEnter: PropTypes.func,
  renderName: PropTypes.func
}

List.defaultProps = {
  multiple: false,
  onSelect: _.noop,
  onMouseEnter: _.noop,
  renderName: v => v.name
}

export default List
