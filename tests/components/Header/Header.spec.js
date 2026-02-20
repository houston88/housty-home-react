import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from 'components/Header'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'

describe('(Component) Header', () => {

  it('Should render a Link to Home route', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    const homeLink = screen.getByText('Home')

    expect(homeLink).toBeTruthy()
    expect(homeLink.tagName).toBe('A')
    expect(homeLink).toHaveAttribute('href', '/')
  })
})
