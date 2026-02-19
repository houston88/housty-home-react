export default (store) => ({
  path: 'debis-resources/handouts',
  getComponent(nextState, cb) {
    import('./components/Orientation').then((module) => {
      const Orientation = module.default
      cb(null, Orientation)
    })
  }
})
