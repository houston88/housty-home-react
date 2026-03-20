import React, { lazy, Suspense } from 'react'

const WebMacView = lazy(() => import('./components/WebMacView'))

export default function WebMacRoute() {
    return (
        <Suspense fallback={null}>
            <WebMacView />
        </Suspense>
    )
}
