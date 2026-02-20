import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from 'components/Header'
import { Router, Route, createMemoryHistory } from 'react-router'
import { describe, it, expect, beforeEach } from 'vitest'

describe('(Component) Header', () => {
  let history

  beforeEach(() => {
    history = createMemoryHistory('/')
  })

  it('Should render a Link to Home route', () => {
    render(
      <Router history={history}>
        <Route path="/" component={Header} />
      </Router>
    )
    // screen.debug()
    const homeLink = screen.getByText('Home')
    // expect(homeLink).toBeInTheDocument() // jest-dom matcher
    // In Vitest with globals, we can use expect
    expect(homeLink).toBeTruthy()
    expect(homeLink.tagName).toBe('A')
    expect(homeLink).toHaveAttribute('href', '/')
  })
})
