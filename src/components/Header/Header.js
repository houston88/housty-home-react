import React, { PropTypes } from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

class Header extends React.Component {

  constructor (props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    this.state = {
      scrollPos: 0
    }
  }

  componentDidMount () {
    document.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    document.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll (e) {
    // get scroll position
    let scrollTop = document.documentElement.scrollTop
    // set to state... need to debounce
    this.setState({
      scrollPos: scrollTop
    })
  }

  render () {
    const { location } = this.props
    let headerClass = 'header'
    if (this.state.scrollPos > 56) {
      headerClass += ' dark'
    }
    return (
      <div className={headerClass}>
        { location.pathname.indexOf('/debis-resources') === 0
          ? <Link to='/debis-resources' activeClassName='route--active'>
            Debi's Resources
          </Link>
          : <div>
            <IndexLink to='/' activeClassName='route--active'>
              Home
            </IndexLink>
            <Link to='/twitter-data' activeClassName='route--active'>
              Twitter Data
            </Link>
            <Link to='/resume' activeClassName='route--active'>
              Resume
            </Link>
            {/* <Link to='/counter' activeClassName='route--active'>
              Counter
            </Link> */}
          </div>}
      </div>
    )
  }

}

Header.propTypes = {
  location: PropTypes.string
}

export default Header
