import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      scrollPos: 0
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    // get scroll position
    let scrollTop = e.srcElement.body.scrollTop;
    // just display for now
    this.setState({
      scrollPos: scrollTop
    });
  }

  render() {
    let headerClass = 'header';
    if (this.state.scrollPos > 56) {
      headerClass += ' dark';
    }
    return (
      <div className={headerClass}>
        <IndexLink to='/' activeClassName='route--active'>
          Home
        </IndexLink>
        <Link to='/counter' activeClassName='route--active'>
          Counter
        </Link>
      </div>
    );
  }

}

export default Header
