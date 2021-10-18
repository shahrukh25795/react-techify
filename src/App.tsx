import React from 'react'
import Route from './routes/Index'
import Network from './network/Index'

interface AppProps { }

const App = (props: AppProps) => {
    return (
        <>
            <Network {...props} />
            <Route {...props} />
        </>
    )
}

export default App
