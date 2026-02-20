import React, { lazy, Suspense } from 'react'
const DebisResourcesView = lazy(() => import('./components/DebisResourcesView'))

export default function DebisResourcesRoute() {
  return (
    <Suspense fallback={null}>
      <DebisResourcesView />
    </Suspense>
  )
}
