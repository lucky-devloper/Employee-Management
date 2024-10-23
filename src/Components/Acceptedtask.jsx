import React, { useContext } from 'react'
import { EmployeeManagementContext } from '../context/ManagementProvider';

function Acceptedtask({ acceptedwork, employeeDetails }) {
    // console.log(employeeDetails);
    const { completedORfailed } = useContext(EmployeeManagementContext)

    const confirmation = (title, confirmation) => {
        // console.log(title, confirmation);
        completedORfailed(employeeDetails.id, { projectname: title, confirmation: confirmation })
    }
    return (
        <div className='min-h-[100px] w-[100%] bg-[#f5cf60] p-2 overflow-hidden mb-2'>
            <div className='w-[100%] flex justify-between font-semibold'>
                <h1 className='min-w-[45px] h-[25px] items-center px-1 rounded-md bg-red-600'>{acceptedwork.category}</h1>
                <p>{acceptedwork.taskDate}</p>
            </div>
            <h1 className='text-xl font-semibold text-black'>{acceptedwork.taskTitle}</h1>
            <p className='text-[14px] text-black'>{acceptedwork.taskDescription}</p>
            <div className='w-[100%] mt-5 flex justify-between'>
                <button onClick={() => confirmation(acceptedwork.taskTitle, true)} className='px-2 py-1 bg-green-600 rounded-md'>Mark as Completed</button>
                <button onClick={() => confirmation(acceptedwork.taskTitle, false)} className='px-2 py-1 bg-red-600 rounded-md'>Mark as Failed</button>
            </div>
        </div>
    )
}

export default Acceptedtask