import React, { useEffect, useState } from 'react'
import { injectReducer } from '../../store/reducers'

export default function CounterRoute({ store }) {
  const [Component, setComponent] = useState(null)

  useEffect(() => {
    let isMounted = true;
    Promise.all([
      import('./containers/CounterContainer'),
      import('./modules/counter')
    ]).then(([module, reducerModule]) => {
      const Counter = module.default
      const reducer = reducerModule.default
      injectReducer(store, { key: 'counter', reducer })
      if (isMounted) setComponent(() => Counter)
    })
    return () => { isMounted = false }
  }, [store])

  return Component ? <Component /> : null
}
