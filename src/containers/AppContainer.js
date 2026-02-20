import React, { Component, useEffect } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { Provider, useDispatch } from 'react-redux'
import AppRoutes from '../routes/index'
import { updateLocation } from '../store/location'

const LocationListener = () => {
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateLocation({ dispatch })(location.pathname))
  }, [location, dispatch])

  return null
}

class AppContainer extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    const { store } = this.props

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <BrowserRouter>
            <LocationListener />
            <AppRoutes store={store} />
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}

export default AppContainer
