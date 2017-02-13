import React from 'react'
import { HomeView } from 'routes/Home/components/HomeView'
import { render } from 'enzyme'

describe('(View) Home', () => {
  let _component

  beforeEach(() => {
    _component = render(<HomeView />)
  })

  it('Renders a welcome message', () => {
    const welcome = _component.find('h2')
    expect(welcome).to.exist
    expect(welcome.text()).to.match(/Harris Family Launch Pad/)
  })

  it('Renders a header image', () => {
    const headerImage = _component.find('img')
    expect(headerImage).to.exist
  })
})
