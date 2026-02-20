import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ location }) => (
  <div>
    <Header location={location} />
    <div className='core-layout__viewport'>
      <Outlet />
    </div>
    <div className='footer-image'>
      <div className='overlay'>&nbsp;</div>
    </div>
    <div className='footer-text'>
      ©2026<span className='name'>&nbsp;Houston Harris</span>
    </div>
  </div>
)

import PropTypes from 'prop-types'

CoreLayout.propTypes = {
  location: PropTypes.object
}

export default CoreLayout
