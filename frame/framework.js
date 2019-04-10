import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Flex, LayoutRoot } from '../src/index'
import classNames from 'classnames'
import { setTitle } from 'gm-util'
import _ from 'lodash'
import EVENT_TYPE from '../src/event_type'
import Context from './context'

const Framework = props => {
  let {
    showMobileMenu,
    isFullScreen,
    menu,
    rightTop,
    leftWidth,
    children
  } = props

  const [overflowFlag, setOverflowFlag] = useState(0)

  const addOverflowClass = () => {
    const newFlowFlag = overflowFlag + 1
    setOverflowFlag(newFlowFlag)
    newFlowFlag === 1 &&
      window.document.body.classList.add('gm-overflow-hidden')
  }

  const removeOverflowClass = () => {
    const newFlowFlag = overflowFlag - 1
    setOverflowFlag(newFlowFlag)
    newFlowFlag === 0 &&
      window.document.body.classList.remove('gm-overflow-hidden')
  }

  const doSetTitle = e => {
    setTitle(e.detail)
  }

  const doScroll = _.throttle(() => {
    window.dispatchEvent(new window.CustomEvent(EVENT_TYPE.BROWSER_SCROLL))
  }, 200)

  useEffect(() => {
    window.addEventListener(EVENT_TYPE.MODAL_SHOW, addOverflowClass)
    window.addEventListener(EVENT_TYPE.MODAL_HIDE, removeOverflowClass)

    window.addEventListener(EVENT_TYPE.DRAWER_SHOW, addOverflowClass)
    window.addEventListener(EVENT_TYPE.DRAWER_HIDE, removeOverflowClass)

    window.addEventListener(EVENT_TYPE.TITLE_CHANGE, doSetTitle)

    window.addEventListener('scroll', doScroll)

    return () => {
      window.removeEventListener(EVENT_TYPE.MODAL_SHOW, addOverflowClass)
      window.removeEventListener(EVENT_TYPE.MODAL_HIDE, removeOverflowClass)

      window.removeEventListener(EVENT_TYPE.DRAWER_SHOW, addOverflowClass)
      window.removeEventListener(EVENT_TYPE.DRAWER_HIDE, removeOverflowClass)

      window.removeEventListener(EVENT_TYPE.TITLE_CHANGE, doSetTitle)

      window.removeEventListener('scroll', doScroll)
    }
  })

  return (
    <div
      className={classNames('gm-framework', {
        'gm-framework-mobile-menu': showMobileMenu
      })}
    >
      <Context.Provider value={{ leftWidth: leftWidth }}>
        <div className='gm-framework-inner'>
          {isFullScreen ? (
            children
          ) : (
            <div className='gm-framework-full-height'>
              <Flex className='gm-framework-container'>
                {menu && <div className='gm-framework-left'>{menu}</div>}
                <Flex
                  flex
                  column
                  className='gm-framework-right'
                  style={{ width: `calc(100% - ${leftWidth})` }}
                >
                  {rightTop && (
                    <div className='gm-framework-right-top'>{rightTop}</div>
                  )}
                  <div className='gm-framework-content'>{children}</div>
                </Flex>
              </Flex>
            </div>
          )}
        </div>
      </Context.Provider>
      <LayoutRoot/>
    </div>
  )
}

Framework.scrollTop = function () {
  window.scroll(0, 0)
}

Framework.propTypes = {
  showMobileMenu: PropTypes.bool,
  isFullScreen: PropTypes.bool,
  menu: PropTypes.element,
  rightTop: PropTypes.element,
  leftWidth: PropTypes.string
}

export default Framework
