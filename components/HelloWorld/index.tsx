import React from 'react'

// Props are similar to parameters, 'type' them here
interface HelloWorldProps {
    name: string  
}

// This is our custom component
const HelloWorld = (props: HelloWorldProps) => {
    return <div>Hello World! {props.name} will take over the world!</div>
}

export default HelloWorld