import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import PropTypes from 'prop-types'
import { ThemeContext } from '../../contexts/ThemeContext'
import './CoreLayout.scss'
import '../../styles/core.scss'

import SciFiShips from '../../components/SciFiShips/SciFiShips'
import FlyingObjects from '../../components/FlyingObjects/FlyingObjects'

export const CoreLayout = ({ location }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`layout-root ${theme}`}>
      {theme === 'dark' && (
        <>
          <div className='starscape'></div>
          <SciFiShips />
        </>
      )}
      {theme === 'light' && <FlyingObjects />}
      <Header location={location} />
      <div className='core-layout__viewport'>
        <Outlet />
      </div>
      <div className={`footer-image ${theme}`}>
        {theme === 'light' && <div className='overlay'>&nbsp;</div>}
      </div>
      <div className='footer-text'>
        ©2026<span className='name'>&nbsp;Houston Harris</span>
      </div>
    </div>
  )
}

CoreLayout.propTypes = {
  location: PropTypes.object
}

export default CoreLayout
