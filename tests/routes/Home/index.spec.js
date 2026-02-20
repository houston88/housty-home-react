import HomeRoute from 'routes/Home'
import { describe, it, expect } from 'vitest'

describe('(Route) Home', () => {
  it('Should export a component', () => {
    expect(typeof HomeRoute).toBe('function')
  })
})
