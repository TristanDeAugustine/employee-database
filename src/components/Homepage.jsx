import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

const HomePage = () => {
  const [employees, setEmployees] = useState([])

  const fetchEmployees = async () => {
    const resp = await Axios.get(
      'https://sdg-staff-directory-app.herokuapp.com/api/Company/developersmingle'
    )
    console.log(resp.data)
    setEmployees(resp.data)
  }

  useEffect(() => {
    fetchEmployees()
  }, [])

  return (
    <div class="container">
      <div class="content">
        <nav>
          <ul className="list-ul">
            {employees.map(employee => {
              return (
                <Link className="link-employee" to={`/${employee.id}`}>
                  <li className="employee-list">
                    <h3>{employee.firstName}</h3>
                  </li>
                </Link>
              )
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default HomePage
