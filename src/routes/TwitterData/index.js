import React, { useEffect, useState } from 'react'
import { injectReducer } from '../../store/reducers'

export default function TwitterDataRoute({ store }) {
  const [Component, setComponent] = useState(null)

  useEffect(() => {
    let isMounted = true;
    Promise.all([
      import('./containers/TwitterDataContainer'),
      import('./modules/twitterData')
    ]).then(([module, reducerModule]) => {
      const TwitterData = module.default
      const reducer = reducerModule.default
      injectReducer(store, { key: 'twitterData', reducer })
      if (isMounted) setComponent(() => TwitterData)
    })
    return () => { isMounted = false }
  }, [store])

  return Component ? <Component /> : null
}
