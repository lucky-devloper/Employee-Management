import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Login'
import EmployeeDashboard from './Components/EmployeeDashboard'
import AdminPannel from './Components/AdminPannel'
import { EmployeeManagementContext } from './context/ManagementProvider'
import { toast } from 'react-toastify'

function App() {
  const { userData, updateProfile } = useContext(EmployeeManagementContext)
  const [user, setuser] = useState('')
  const [logindata, setlogindata] = useState()

  useEffect(() => {
    if (updateProfile) {
      setlogindata(updateProfile)
    }
  }, [updateProfile])


  // here set the login data in loggedIn localstroage
  useEffect(() => {
    const userRole = JSON.parse(localStorage.getItem("loggedIn"))
    if (userRole) {
      setuser(userRole.role)
      setlogindata(userRole.loginInfo)
    }
  }, [user])

  // here perform the login features in Admin pannel and employeeDashboard its depend upon what are user login category
  const handleLogin = (email, password) => {
    if (userData && userData.employees.find((data) => data.email === email && data.password === password)) {
      const loginEmployee = userData.employees.find((data) => data.email === email && data.password === password)
      setuser('Employee Login')
      toast.success("Employee login successfully")
      localStorage.setItem("loggedIn", JSON.stringify({ role: "Employee", loginInfo: loginEmployee }))
    } else if (userData && userData.Admin.find((data) => data.email === email && data.password === password)) {
      setuser('Admin Login')
      toast.success("Admin login successfully")
      localStorage.setItem("loggedIn", JSON.stringify({ role: "Admin" }))
    } else {
      toast.error("Invalid Login")
      setuser('')
    }
  }

  // here make it logout functionality when employee and user click on logout button we clear the login data from local stroage and also set setuser is empty
  const handleLogOut = () => {
    localStorage.setItem("loggedIn", JSON.stringify({}))
    setuser('')
  }

  return (
    // here perform task based on condition
    <div className='w-[100%] h-[100%] flex flex-col gap-4 justify-center items-center text-white'>
      {!user ? <Login handlelogin={handleLogin} /> : ""}
      {user === 'Employee' ? < EmployeeDashboard handleLogOut={handleLogOut} employee={logindata} /> : ""}
      {user === 'Admin' ? <AdminPannel handleLogOut={handleLogOut} /> : ""}
    </div>
  )
}

export default App