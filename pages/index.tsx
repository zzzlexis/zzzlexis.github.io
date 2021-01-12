// This is the index (level 1 for my site)
// We are using TypeScript!
import React from 'react'
import HelloWorld from '../components/HelloWorld'

// Define our page with anonymous function
const IndexPage = () => {
    return <div>
        <HelloWorld name='Noodle'></HelloWorld>
        <div className='text-xs text-center text-red-900'>This is a work in progress; check back for changes as I continue to learn!</div>
        <div>boops boop</div>
        <div>boop the snoot</div>
        </div>
}


// Export what you want to serve when your client makes a request 
// it's always a react component!
export default IndexPage