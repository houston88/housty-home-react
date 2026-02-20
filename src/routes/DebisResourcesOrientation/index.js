import React, { lazy, Suspense } from 'react'
const Orientation = lazy(() => import('./components/Orientation'))

export default function DebisResourcesOrientationRoute() {
  return (
    <Suspense fallback={null}>
      <Orientation />
    </Suspense>
  )
}
