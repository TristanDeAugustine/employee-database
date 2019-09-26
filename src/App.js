import React, { Component } from 'react'
import HomePage from './components/Homepage.jsx'
import AddNewEmployee from './components/AddNewEmployee.jsx'
import EmployeePage from './components/EmployeePage.jsx'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <h1 className="header"> Developers Mingle </h1>
        <nav className="nav-bar">
          <Link className="Link-Home" to="/HomePage">
            HomePage
          </Link>
          <Link className="Link-Employee" to="/Add">
            Add New Employee
          </Link>
          <Link className="Link-Employee-Page" to="/EmployeePage">
            Employee Page
          </Link>
        </nav>

        <Switch>
          <Route exact path="/HomePage" component={HomePage} />
          <Route exact path="/Add" component={AddNewEmployee} />
          <Route exact path="/:id" component={EmployeePage} />
        </Switch>
      </Router>
    )
  }
}

export default App
