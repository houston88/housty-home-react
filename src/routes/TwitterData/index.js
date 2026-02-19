import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'twitter-data',
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    import('./containers/TwitterDataContainer').then((module) => {
      const TwitterData = module.default
      import('./modules/twitterData').then((reducerModule) => {
        const reducer = reducerModule.default
        injectReducer(store, { key: 'twitterData', reducer })
        cb(null, TwitterData)
      })
    })
  }
})
