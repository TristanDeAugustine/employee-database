import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

class Homepage extends Component {
  state = {
    employees: ['mia khalifa']
  }

  componentDidMount() {
    const response = Axios.get(
      'https://sdg-staff-directory-app.herokuapp.com/api/developersmingle/Employees'
    )
    this.setState({
      employees: response.data
    })
  }

  render() {
    return <div>{console.log(this.state.employees)}</div>
  }
}

export default Homepage
