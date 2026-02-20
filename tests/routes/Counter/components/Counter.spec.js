import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Counter } from 'routes/Counter/components/Counter'
import { describe, it, expect, beforeEach, vi } from 'vitest'

describe('(Component) Counter', () => {
  let _props, _spies

  beforeEach(() => {
    _spies = {}
    _props = {
      counter: 5,
      doubleAsync: (_spies.doubleAsync = vi.fn()),
      increment: (_spies.increment = vi.fn()),
      // Mock dispatch if needed, though bindActionCreators usually handles it.
      // In the original test, props spread bindActionCreators result.
      // Here we just pass the mock functions directly as props.
    }
  })

  it('Should render as a <div>.', () => {
    const { container } = render(<Counter {..._props} />)
    expect(container.firstChild.tagName).toBe('DIV')
  })

  it('Should render with an <h2> that includes Sample Counter text.', () => {
    render(<Counter {..._props} />)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(/Counter:/)
  })

  it('Should render props.counter at the end of the sample counter <h2>.', () => {
    const { rerender } = render(<Counter {..._props} />)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(/5$/)

    rerender(<Counter {..._props} counter={8} />)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(/8$/)
  })

  it('Should render exactly two buttons.', () => {
    render(<Counter {..._props} />)
    expect(screen.getAllByRole('button')).toHaveLength(2)
  })

  describe('An increment button...', () => {
    it('has bootstrap classes', () => {
      render(<Counter {..._props} />)
      const button = screen.getByText('Increment')
      expect(button).toHaveClass('btn btn-default')
    })

    it('Should dispatch a `increment` action when clicked', () => {
      render(<Counter {..._props} />)
      const button = screen.getByText('Increment')
      fireEvent.click(button)
      expect(_spies.increment).toHaveBeenCalled()
    })
  })

  describe('A Double (Async) button...', () => {
    it('has bootstrap classes', () => {
      render(<Counter {..._props} />)
      const button = screen.getByText('Double (Async)')
      expect(button).toHaveClass('btn btn-default')
    })

    it('Should dispatch a `doubleAsync` action when clicked', () => {
      render(<Counter {..._props} />)
      const button = screen.getByText('Double (Async)')
      fireEvent.click(button)
      expect(_spies.doubleAsync).toHaveBeenCalled()
    })
  })
})
