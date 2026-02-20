import {
  default as createStore
} from 'store/createStore'
import { describe, it, expect, beforeAll } from 'vitest'

describe('(Store) createStore', () => {
  let store

  beforeAll(() => {
    store = createStore()
  })

  it('should have an empty asyncReducers object', () => {
    expect(store.asyncReducers).toBeTypeOf('object')
    expect(Object.keys(store.asyncReducers)).toHaveLength(0)
  })

  describe('(Location)', () => {
    it('store should be initialized with Location state', () => {
      const location = {
        pathname: '/echo'
      }
      store.dispatch({
        type: 'LOCATION_CHANGE',
        payload: location
      })
      expect(store.getState().location).toEqual(location)
    })
  })
})
