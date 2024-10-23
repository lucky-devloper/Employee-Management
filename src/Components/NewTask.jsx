import React, { useContext } from 'react'
import { EmployeeManagementContext } from '../context/ManagementProvider';

function NewTask({ newtask, employeeDetails }) {
    const { acceptedTask } = useContext(EmployeeManagementContext)
    // console.log(employeeDetails);

    return (
        <div className='min-h-[100px] w-[100%] bg-[#478ae3] p-2 overflow-hidden'>
            <div className='w-[100%] flex justify-between font-semibold'>
                <h1 className='min-w-[45px] h-[25px] items-center px-1 rounded-md bg-red-600'>{newtask.category}</h1>
                <p>{newtask.taskDate}</p>
            </div>
            <h1 className='text-xl font-semibold'>{newtask.taskTitle}</h1>
            <p className='text-[14px]'>{newtask.taskDescription}</p>
            <button onClick={()=> acceptedTask(employeeDetails.id, newtask.taskTitle)} className='bg-green-600 px-2 py-1 rounded-md mt-3'>Accept Task</button>
        </div>
    )
}

export default NewTask