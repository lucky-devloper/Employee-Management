import React, { useContext, useEffect, useState } from 'react'
import { FaRegPaste } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { EmployeeManagementContext } from '../context/ManagementProvider';
import { FaUserLarge } from "react-icons/fa6";

function TaskStatus() {
    const { userData, viewProfile, employeeProfile } = useContext(EmployeeManagementContext)
    const [toggleProfile, settoggleProfile] = useState(false)
    console.log(employeeProfile);



    return (
        <div className='w-[100%] max-h-[100%] mt-4 relative'>
            <div className='w-[100%] flex justify-center items-center gap-4 '>
                <h1 className='text-xl font-semibold'>Task Status</h1>
                <FaRegPaste fontSize='25px' />
            </div>
            <hr />
            <div className='w-[100%] h-[100%]'>
                <span className='w-[100%] flex justify-between items-center font-semibold h-[40px]'>
                    <h1>Name</h1>
                    <h1>Position</h1>
                    <h1>Profile</h1>
                </span>
                <div className='w-[100%] h-[100%] flex flex-col gap-4'>
                    {userData.employees?.map((info) => {

                        return <span key={info.id} className='w-[100%] flex justify-between items-center rounded-md bg-green-500 min-h-[40px] text-black px-2'>
                            <p className='w-[33%] text-left'>{info.name}</p>
                            <p className='w-[33%] text-center'>{info.Role}</p>
                            <button onClick={() => { viewProfile(info.id), settoggleProfile(!toggleProfile) }} className='w-[33%] text-right'>View</button>
                        </span>
                    })}
                </div>
            </div>
            {toggleProfile && <div className='w-[100%] h-[300px] bg-[#f2f2f2] absolute top-0 rounded-sm p-1'>
                <RxCross2 onClick={() => settoggleProfile(!toggleProfile)} color='black' fontSize='25px' className=' absolute top-0 right-1' />
                <div className='w-[100%] h-[91%] flex flex-col items-center text-black'>
                    <FaUserLarge className='w-[100px] h-[100px] border-2 border-black p-2 rounded-full' />
                    <p className='font-semibold text-xl'>{employeeProfile.name}</p>
                    <p className='font-semibold text-xl'>{employeeProfile.Role}</p>
                    <span className='w-[100%] flex items-center justify-between bg-red-500 h-[40px] px-1 text-[13px] lg:text-[15px] rounded-md font-semibold mt-3'>
                        <h2>New Task</h2>
                        <h2>Accepted Task</h2>
                        <h2>Completed</h2>
                        <h2>Failed</h2>
                    </span>
                    <span className='w-[100%] flex justify-between px-4 text-3xl font-bold text-center'>
                        <p>{employeeProfile.taskCount.newTask}</p>
                        <p>{employeeProfile.taskCount.active}</p>
                        <p>{employeeProfile.taskCount.complete}</p>
                        <p>{employeeProfile.taskCount.failed}</p>
                    </span>
                </div>
            </div>}
        </div>
    )
}

export default TaskStatus