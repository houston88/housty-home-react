import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../../contexts/ThemeContext'
import './Header.scss'

const Header = () => {
  const [scrollPos, setScrollPos] = useState(0)
  const { theme, toggleTheme } = useContext(ThemeContext)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(document.documentElement.scrollTop)
    }

    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  let headerClass = 'header'
  if (scrollPos > 56 || theme === 'dark') {
    headerClass += ' dark'
  }

  const navClass = ({ isActive }) => (isActive ? 'route--active' : '')

  return (
    <div className={headerClass}>
      <div className="nav-links">
        <NavLink to='/' className={navClass} end>
          Home
        </NavLink>
        <NavLink to='/twitter-data' className={navClass}>
          <span className="hide-on-mobile">Twitter </span>Data
        </NavLink>
        <NavLink to='/resume' className={navClass}>
          Resume
        </NavLink>
        <NavLink to='/debis-resources' className={navClass}>
          Debi
        </NavLink>
      </div>
      <div className="theme-toggle">
        <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Theme">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </div>
  )
}

Header.propTypes = {
  location: PropTypes.object
}

export default Header
