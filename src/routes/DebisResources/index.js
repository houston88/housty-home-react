export default (store) => ({
  path: 'debis-resources',
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    import('./components/DebisResourcesView').then((module) => {
      const Handouts = module.default
      cb(null, Handouts)
    })
  }
})
