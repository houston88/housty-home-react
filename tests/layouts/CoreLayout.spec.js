import React from 'react'
import { render, screen } from '@testing-library/react'
import CoreLayout from 'layouts/CoreLayout/CoreLayout'
import { describe, it, expect } from 'vitest'

describe('(Layout) Core', () => {
  it('Should render as a <div> containing the children.', () => {
    const child = <h1 className='child'>Child</h1>
    const { container } = render(
      <CoreLayout>
        {child}
      </CoreLayout>
    )

    expect(container.firstChild.tagName).toBe('DIV')
    expect(screen.getByText('Child')).toBeTruthy()
  })
})
