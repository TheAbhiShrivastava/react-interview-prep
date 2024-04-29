import React, { useEffect } from 'react'

const UseEffectDemo = () => {

    const [count, setCount] = React.useState(0)

    useEffect(() => {
        console.log(`runs on initial render of the component`)

        return () => {
            console.log(`runs on unmount of the component, with old props and state`)
        }
    }, [])

    useEffect(() => {
        console.log(`runs on initial render and every render of the component`)

        return () => {
            console.log(`runs on unmount of the component and every render of the component first,
            with old props and state, then above callback code is executed with new props and state`)
        }
    })

    useEffect(() => {
        console.log(`runs on initial render of the component or when count changes`)

        return () => {
            console.log(`runs on unmount of the component or when count changes, cleanup code
            is executed with old props and state,
            then above callback code is executed with new props and state`)
        }
    }, [count])

  return (
    <div>UseEffectDemo</div>
  )
}

export default UseEffectDemo