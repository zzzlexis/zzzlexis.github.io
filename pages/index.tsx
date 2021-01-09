// This is the index (level 1 for my site)
// We are using TypeScript!
import React from 'react'
import HelloWorld from '../components/HelloWorld'

// Define our page with anonymous function
const IndexPage = () => {
    return <div><HelloWorld name='Alexis'></HelloWorld><HelloWorld name='Michael'></HelloWorld></div>
}


// Export what you want to serve when your client makes a request 
// it's always a react component!
export default IndexPage