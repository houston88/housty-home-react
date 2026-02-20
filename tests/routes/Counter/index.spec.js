import CounterRoute from 'routes/Counter'
import { describe, it, expect, beforeEach } from 'vitest'

describe('(Route) Counter', () => {
  let _route

  beforeEach(() => {
    _route = CounterRoute({})
  })

  it('Should return a route configuration object', () => {
    expect(typeof _route).toBe('object')
  })

  it('Configuration should contain path `counter`', () => {
    expect(_route.path).toBe('counter')
  })
})
