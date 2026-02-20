import React, { lazy, Suspense } from 'react'
const Orientation = lazy(() => import('./components/Orientation'))

export default function HandoutsRoute() {
  return (
    <Suspense fallback={null}>
      <Orientation />
    </Suspense>
  )
}
