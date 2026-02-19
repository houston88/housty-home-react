export default (store) => ({
  path: 'resume',
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    import('./components/ResumeView').then((module) => {
      const Resume = module.default
      cb(null, Resume)
    })
  }
})
