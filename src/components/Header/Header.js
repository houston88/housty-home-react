import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import './Header.scss'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    this.state = {
      scrollPos: 0
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(e) {
    // get scroll position
    let scrollTop = document.documentElement.scrollTop
    // set to state... need to debounce
    this.setState({
      scrollPos: scrollTop
    })
  }

  render() {
    let headerClass = 'header'
    if (this.state.scrollPos > 56) {
      headerClass += ' dark'
    }
    const navClass = ({ isActive }) => (isActive ? 'route--active' : '')

    return (
      <div className={headerClass}>
        <div>
          <NavLink to='/' className={navClass} end>
            Home
          </NavLink>
          <NavLink to='/twitter-data' className={navClass}>
            Twitter Data
          </NavLink>
          <NavLink to='/resume' className={navClass}>
            Resume
          </NavLink>
          <NavLink to='/debis-resources' className={navClass}>
            Debi
          </NavLink>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  location: PropTypes.object
}

export default Header
