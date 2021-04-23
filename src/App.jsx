import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// pages

import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Home from './pages/Home'

import './assets/css/styles.css'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
