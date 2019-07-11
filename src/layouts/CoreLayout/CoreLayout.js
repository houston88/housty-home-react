import React from 'react'
import Header from '../../components/Header'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children, location }) => (
  <div>
    <Header location={location} />
    <div className='core-layout__viewport'>
      {children}
    </div>
    <div className='footer-image'>
      <div className='overlay'>&nbsp;</div>
    </div>
    <div className='footer-text'>
      ©2019<span className='name'>&nbsp;Houston Harris</span>
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired,
  location : React.PropTypes.object
}

export default CoreLayout
