import React, { useState } from 'react'

export default function WithCounter(OriginalComponent) {
    const NewComponent  = (props) => {
        const [count, setCount] = useState(0)
                console.log("nadii"+props.title)
        const increment = () => {
            setCount(prevState => {
                return prevState + 1
            })
        }

        return <>
            <OriginalComponent increment={increment} count={count} title={props.title}  />
        </>
    }
        
  return NewComponent
}
