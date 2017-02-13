import React from 'react';
import Header from '../../components/Header';
import './CoreLayout.scss';
import '../../styles/core.scss';

export const CoreLayout = ({ children }) => (
  <div>
    <Header />
    <div className='core-layout__viewport'>
      {children}
    </div>
    <div className='footer-image'>
      <div className='overlay'></div>
    </div>
    <div className='footer-text'>
      ©2017<span className='name'>&nbsp;Houston Harris</span>
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
