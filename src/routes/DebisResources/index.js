export default (store) => ({
  path : 'debis-resources',
    /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
        /*  Webpack - use 'require.ensure' to create a split point
            and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
        /*  Webpack - use require callback to define
            dependencies for bundling   */
      const Handouts = require('./components/DebisResourcesView').default

        /*  Return getComponent   */
      cb(null, Handouts)

        /* Webpack named bundle   */
    }, 'debis-resources')
  }
})
