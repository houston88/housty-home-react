import React from 'react'
import { Routes, Route } from 'react-router-dom'

import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import CounterRoute from './Counter'
import ResumeRoute from './Resume'
import TwitterDataRoute from './TwitterData'
import DebisResourcesRoute from './DebisResources'
import DebisResourcesOrientationRoute from './DebisResourcesOrientation'
import HandoutsRoute from './handouts'

export const AppRoutes = ({ store }) => (
  <Routes>
    <Route path="/" element={<CoreLayout />}>
      <Route index element={<Home />} />
      <Route path="counter" element={<CounterRoute store={store} />} />
      <Route path="resume" element={<ResumeRoute />} />
      <Route path="twitter-data" element={<TwitterDataRoute store={store} />} />
      <Route path="debis-resources">
        <Route index element={<DebisResourcesRoute />} />
        <Route path="orientation" element={<DebisResourcesOrientationRoute />} />
        <Route path="handouts/*" element={<HandoutsRoute />} />
      </Route>
    </Route>
  </Routes>
)

export default AppRoutes
