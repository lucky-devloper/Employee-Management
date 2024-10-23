import React, { createContext, useEffect, useState } from 'react'
import Employeedata from '../Employeedata'

export const EmployeeManagementContext = createContext()
function ManagementProvider({ children }) {
    const [userData, setuserData] = useState()
    const [employeeProfile, setemployeeProfile] = useState()
    const [updateProfile, setupdateProfile] = useState()

    // set employee data in local stroage after save the data then get into in userData state
    useEffect(() => {
        const AdminInfo = JSON.parse(localStorage.getItem("Admin"))
        const EmployeeInfo = JSON.parse(localStorage.getItem("Employee"))
        if (AdminInfo && EmployeeInfo) {
            setuserData({ employees: EmployeeInfo, Admin: AdminInfo })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("Admin", JSON.stringify(Employeedata[1]))
        localStorage.setItem("Employee", JSON.stringify(Employeedata[0]))
    }, [Employeedata])


    // find the employee profile while admin want to see employee profile
    const viewProfile = (employeeID) => {
        const employeeData = JSON.parse(localStorage.getItem("Employee"))
        const finddata = employeeData.find((data) => data.id === employeeID)
        setemployeeProfile(finddata)
    }

    // find employee profile and assign a newTask to choosen employee by the admin and update employee data in localstroage
    const taskAssign = (employeeName, assignTask) => {
        const employeeData = JSON.parse(localStorage.getItem("Employee"))
        const UpdatedData = employeeData.map((data) => data.name === employeeName ? { ...data, taskCount: { ...data.taskCount, newTask: data.taskCount.newTask + 1 }, task: [...data.task, assignTask] } : data)
        localStorage.setItem("Employee", JSON.stringify(UpdatedData))
        // console.log(UpdatedData);
        const AdminInfo = JSON.parse(localStorage.getItem("Admin"))
        const EmployeeInfo = JSON.parse(localStorage.getItem("Employee"))
        if (AdminInfo && EmployeeInfo) {
            setuserData({ employees: EmployeeInfo, Admin: AdminInfo })
        }
    }

    // when employee accept the assign task then it wiil be update newtask
    const acceptedTask = (id, projectname) => {
        // console.log(id, projectname);
        const employeeData = JSON.parse(localStorage.getItem("Employee"))
        const updatedtask = employeeData.map((data) => data.id === id ? { ...data, taskCount: { ...data.taskCount, newTask: data.taskCount.newTask - 1, active: data.taskCount.active + 1 }, task: data.task.map((taskdetails) => taskdetails.taskTitle === projectname ? { ...taskdetails, newTask: !taskdetails.newTask, active: !taskdetails.active } : taskdetails) } : data)
        // console.log(updatedtask);
        localStorage.setItem("Employee", JSON.stringify(updatedtask))
        if (updatedtask) {
            const employeeData = JSON.parse(localStorage.getItem("Employee"))
            const findData = employeeData.find((data) => data.id === id)
            setupdateProfile(findData)
        }
    }

    const completedORfailed = (id, details) => {
        console.log(id, details);
        const employeeData = JSON.parse(localStorage.getItem("Employee"))
        const Confirmation = employeeData.map((data) => data.id === id ? { ...data, taskCount: { ...data.taskCount, active: data.taskCount.active - 1, complete: details.confirmation ? data.taskCount.complete + 1 : data.taskCount.complete, failed: !details.confirmation ? data.taskCount.failed + 1 : data.taskCount.failed }, task: data.task.map((taskdetails) => taskdetails.taskTitle === details.projectname ? { ...taskdetails, active: !taskdetails.active, completed: details.confirmation ? !taskdetails.completed : taskdetails.completed, failed: !details.confirmation ? !taskdetails.failed : taskdetails.failed } : taskdetails) } : data)
        // console.log(Confirmation);
        localStorage.setItem("Employee", JSON.stringify(Confirmation))
        if (Confirmation) {
            const employeeData = JSON.parse(localStorage.getItem("Employee"))
            const findData = employeeData.find((data) => data.id === id)
            setupdateProfile(findData)
        }
    }

    return (
        <EmployeeManagementContext.Provider value={{ userData, viewProfile, employeeProfile, taskAssign, acceptedTask, updateProfile, completedORfailed }}>
            {children}
        </EmployeeManagementContext.Provider>
    )
}

export default ManagementProvider