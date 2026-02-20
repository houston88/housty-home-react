import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import CoreLayout from 'layouts/CoreLayout/CoreLayout'
import { describe, it, expect } from 'vitest'

describe('(Layout) Core', () => {
  it('Should render as a <div> containing the nested route children.', () => {
    const child = <h1 className='child'>Child</h1>
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<CoreLayout />}>
            <Route index element={child} />
          </Route>
        </Routes>
      </MemoryRouter>
    )

    expect(container.firstChild.tagName).toBe('DIV')
    expect(screen.getByText('Child')).toBeTruthy()
  })
})
