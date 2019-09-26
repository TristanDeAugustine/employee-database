import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AddNewEmployee = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')

  const addEmployee = async () => {
    const resp = await axios.post(
      'https://sdg-staff-directory-app.herokuapp.com/api/developersmingle/Employees',
      {
        firstName,
        lastName,
        jobTitle,
        email,
        phoneNumber
      }
    )
  }

  return (
    <div class="container">
      <div class="content">
        <form
          onSubmit={e => {
            e.preventDefault()
            addEmployee()
          }}
        >
          <section className="george">
            <label>First Name</label>
            <input
              type="text"
              placeholder="John"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />

            <label>Last Name</label>
            <input
              type="text"
              placeholder="Deere"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />

            <label>Email</label>
            <input
              type="text"
              placeholder="JohnDeere.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <label>Phone Number</label>
            <input
              type="number"
              placeholder="123-456-7890"
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
            />

            <label>Job Title</label>
            <input
              type="text"
              placeholder="Manager"
              value={jobTitle}
              onChange={e => setJobTitle(e.target.value)}
            />
          </section>
          <button>Add Employee</button>
        </form>
      </div>
    </div>
  )
}

export default AddNewEmployee
