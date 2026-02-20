import React, { lazy, Suspense } from 'react'
const ResumeView = lazy(() => import('./components/ResumeView'))

export default function ResumeRoute() {
  return (
    <Suspense fallback={null}>
      <ResumeView />
    </Suspense>
  )
}
