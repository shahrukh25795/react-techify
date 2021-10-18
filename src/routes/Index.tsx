import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Login from '../componentes/Auth/Login'
import Home from '../componentes/Dashboard/Home'

const Index = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={(props) => <Login {...props} />} />
                <Route exact path="/dashboard" render={(props) => <Home {...props} />} />
            </Switch>
        </BrowserRouter>
    )
}

export default Index
