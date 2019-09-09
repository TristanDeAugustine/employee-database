import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

const EmployeePage = props => {
  const [employeeData, setEmployeeData] = useState('')
  const [employeeId, setEmployeeId] = useState('')

  const fetchEmployeeData = async () => {
    const resp = await Axios.get(
      `https://sdg-staff-directory-app.herokuapp.com/api/developersmingle/Employees/${props.match.params.id}`
    )
    console.log(resp.data)
    setEmployeeData(resp.data)
    setEmployeeId(resp.data.id)
  }

  const deleteEmployee = async () => {
    const resp = await Axios.delete(
      `https://sdg-staff-directory-app.herokuapp.com/api/developersmingle/Employees/${employeeId}`
    )
  }

  useEffect(() => {
    fetchEmployeeData()
  }, [])
  return (
    <article>
      <section className="emp-layout">
        <div className="employee-card">
          <h2>First Name: {employeeData.firstName}</h2>
          <h3>Last Name: {employeeData.lastName}</h3>
          <p>Job Title: {employeeData.jobTitle}</p>
          <p>Email: {employeeData.email}</p>
          <p>Phone Number: {employeeData.phoneNumber}</p>
        </div>
      </section>
      <section>
        <button
          type="button"
          className="delete-button"
          onClick={deleteEmployee}
        >
          Delete Employee
        </button>
      </section>
    </article>
  )
}

export default EmployeePage
