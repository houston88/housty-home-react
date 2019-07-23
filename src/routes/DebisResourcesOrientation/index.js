export default (store) => ({
    path : 'debis-resources/orientation',
    getComponent (nextState, cb) {
        require.ensure([], (require) => {
        const Orientation = require('./components/Orientation').default
        cb(null, Orientation)
        }, 'debis-resources-orientation')
    }
});
  