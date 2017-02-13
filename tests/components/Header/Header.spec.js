import React from 'react'
import Header from 'components/Header'
import { IndexLink, Link } from 'react-router'
import { shallow } from 'enzyme'

describe('(Component) Header', () => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Header />)
  })

  describe('Navigation links...', () => {
    it('Should render a Link to Home route', () => {
      expect(_wrapper.contains(
        <IndexLink to='/' activeClassName='route--active'>
          Home
        </IndexLink>
      )).to.be.true
    })

    it('Should render a Link to Counter route', () => {
      expect(_wrapper.contains(
        <Link to='/counter' activeClassName='route--active'>
          Counter
        </Link>
      )).to.be.true
    })
  })
})
