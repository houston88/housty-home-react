import React from 'react'
import { createRoot } from 'react-dom/client'
import createStore from './store/createStore'
import AppContainer from './containers/AppContainer'
import './styles/core.scss'

// ========================================================
// Store Instantiation
// ========================================================
const initialState = window.___INITIAL_STATE__
const store = createStore(initialState)

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

const render = () => {
  const root = createRoot(MOUNT_NODE)
  root.render(
    <AppContainer store={store} />
  )
}

// ========================================================
// Go!
// ========================================================
render()
