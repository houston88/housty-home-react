import CounterRoute from 'routes/Counter'
import { describe, it, expect } from 'vitest'

describe('(Route) Counter', () => {
  it('Should export a component', () => {
    expect(typeof CounterRoute).toBe('function')
  })
})
