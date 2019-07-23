export default (store) => ({
  path : 'debis-resources/handouts',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Orientation = require('./components/Orientation').default
      cb(null, Orientation)
    }, 'handy-handouts')
  }
})
