import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'counter',
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    import('./containers/CounterContainer').then((module) => {
      const Counter = module.default
      import('./modules/counter').then((reducerModule) => {
        const reducer = reducerModule.default
        injectReducer(store, { key: 'counter', reducer })
        cb(null, Counter)
      })
    })
  }
})
