import React from 'react'
import { HomeView } from 'routes/Home/components/HomeView'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

describe('(View) Home', () => {
  it('Renders a welcome message', () => {
    render(<HomeView />)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(/Harris Family Launch Pad/)
  })

  it('Renders a header image', () => {
    const { container } = render(<HomeView />)
    // Check for img tag
    expect(container.querySelector('img')).toBeTruthy()
  })
})
