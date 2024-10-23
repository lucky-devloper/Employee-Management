import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { PiHandWavingFill } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import Acceptedtask from './Acceptedtask';
import NewTask from './NewTask';
import CompletedTask from './CompletedTask';
import FailedTask from './FailedTask';

function EmployeeDashboard({ handleLogOut, employee }) {
    
    const [toggletab, settoggletab] = useState(false)
    const [Tab, setTab] = useState('')

    return (
        <div className='w-[100%] h-[100%] lg:w-[380px] border-2'>
            <div className='w-[100%] flex justify-between items-end p-1'>
                <span>
                    <h3 className='text-[20px]'>Hello,</h3>
                    <span className='flex items-center gap-2'>
                        <h1 className='text-2xl font-semibold'>{employee.name}</h1>
                        <PiHandWavingFill fontSize='25px' color='#f9ce6f' />
                    </span>
                </span>
                <button onClick={() => { handleLogOut(), toast.success("Employee Logout") }} className='w-[80px] h-[30px] rounded-md font-semibold bg-[#c24d3a]'>Log Out</button>
            </div>
            <div className='w-[100%] h-[170px] grid grid-cols-2 gap-2 p-2'>
                <div onClick={() => setTab('New Task')} className='cursor-pointer w-[100%] h-[70px] bg-[#478ae3] rounded-md flex flex-col justify-center p-2'>
                    <h1 className='text-3xl font-bold'>{employee.taskCount.newTask}</h1>
                    <p className='text-xl font-semibold'>New Task</p>
                </div>
                <div onClick={() => setTab('Completed')} className='cursor-pointer w-[100%] h-[70px] bg-[#a9c070] rounded-md flex flex-col justify-center p-2'>
                    <h1 className='text-3xl font-bold'>{employee.taskCount.complete}</h1>
                    <p className='text-xl font-semibold'>Completed</p>
                </div>
                <div onClick={() => setTab('accepted')} className='cursor-pointer w-[100%] h-[70px] bg-[#f5cf60] rounded-md flex flex-col justify-center p-2 text-black'>
                    <h1 className='text-3xl font-bold'>{employee.taskCount.active}</h1>
                    <p className='text-xl font-semibold'>Accepted</p>
                </div>
                <div onClick={() => setTab('Failed')} className='cursor-pointer w-[100%] h-[70px] bg-[#c7734e] rounded-md flex flex-col justify-center p-2'>
                    <h1 className='text-3xl font-bold'>{employee.taskCount.failed}</h1>
                    <p className='text-xl font-semibold'>Failed</p>
                </div>
            </div>
            <div className='h-[400px] w-[100%] flex flex-col items-center'>
                {toggletab ? (
                    <FaChevronDown onClick={() => settoggletab(!toggletab)} className='cursor-pointer' />
                ) : (
                    <FaChevronUp onClick={() => settoggletab(!toggletab)} className='cursor-pointer' />
                )}
                {toggletab && <div className='task w-[100%] h-[100%] mt-4 overflow-y-auto'>
                    {employee.task?.map((work, index) => {
                        if (Tab === 'accepted' && work.active) {
                            return <Acceptedtask key={index} acceptedwork={work} employeeDetails={employee} />
                        } else if (Tab === 'New Task' && work.newTask) {
                            return <NewTask key={index} newtask={work} employeeDetails={employee} />
                        } else if (Tab === 'Completed' && work.completed) {
                            return <CompletedTask key={index} completedTask={work} employeeDetails={employee} />
                        } else if (Tab === 'Failed' && work.failed) {
                            return <FailedTask key={index} FailedTask={work} employeeDetails={employee} />
                        } else {
                            return
                        }
                    })}
                </div>}
            </div>
        </div>
    )
}

export default EmployeeDashboard


// { condition === 'accepted' ? <Acceptedtask /> : "" }
// { condition === 'New Task' ? <NewTask /> : "" }
// { condition === 'Completed' ? <CompletedTask /> : "" }
// { condition === 'Failed' ? <FailedTask /> : "" }