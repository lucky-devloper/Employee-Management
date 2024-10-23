import React, { useContext, useState } from 'react'
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
import TaskStatus from './TaskStatus'
import { toast } from 'react-toastify';
import { EmployeeManagementContext } from '../context/ManagementProvider';

function AdminPannel({ handleLogOut }) {
    const { taskAssign } = useContext(EmployeeManagementContext)
    const [checkStatus, setcheckStatus] = useState(false)
    const [taskTitle, settaskTitle] = useState('')
    const [taskDescription, settaskDescription] = useState('')
    const [taskDate, settaskDate] = useState('')
    const [employeename, setemployeename] = useState('')
    const [category, setcategory] = useState('')


    const handleCreateTask = (e) => {
        e.preventDefault()
        // console.log(taskTitle, taskDescription, taskDate, employeename, category);
        taskAssign(employeename, { active: false, newTask: true, complete: false, failed: false, taskTitle, taskDescription, taskDate, category })
        setemployeename('')
        settaskTitle('')
        settaskDescription('')
        settaskDate('')
        setcategory('')
    }

    return (
        <div className='w-[98%] h-[100%] lg:w-[400px] lg:p-5 border-2 border-blue-500 p-2 rounded-md'>
            <div className='flex items-center gap-3'>
                <HiOutlineArrowCircleLeft onClick={() => { handleLogOut(), toast.success("Admin Logout") }} className='text-3xl rounded-full' />
                <h1 className='text-xl font-semibold'>Create Task</h1>
            </div>
            <form onSubmit={handleCreateTask} className='mt-2 w-[100%] h-[100%] flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="" className='font-semibold'>Task Title</label>
                    <input type="text" value={taskTitle} onChange={(e) => settaskTitle(e.target.value)} placeholder='enter title' className='h-[40px] p-2 outline-none bg-[#313131] border-2 border-gray-400 rounded' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="" className='font-semibold'>Description</label>
                    <textarea value={taskDescription} onChange={(e) => settaskDescription(e.target.value)} placeholder='detailed description of task (Max 500 word)' className='p-2 outline-none bg-[#313131] border-2 border-gray-400 rounded text-[14px] min-h-[80px]'></textarea>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="" className='font-semibold'>Date</label>
                    <input type="date" value={taskDate} onChange={(e) => settaskDate(e.target.value)} className='h-[40px] p-2 outline-none bg-[#313131] border-2 border-gray-400 rounded' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="" className='font-semibold'>Assign To</label>
                    <input type="text" value={employeename} onChange={(e) => setemployeename(e.target.value)} className='h-[40px] p-2 outline-none bg-[#313131] border-2 border-gray-400 rounded' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="" className='font-semibold'>Category</label>
                    <input type="text" value={category} onChange={(e) => setcategory(e.target.value)} placeholder='Design, Development, etc...' className='h-[40px] p-2 outline-none bg-[#313131] border-2 border-gray-400 rounded' />
                </div>
                <button type='submit' className='border-2 h-[40px] rounded font-bold lg:mt-5'>Create Task</button>
            </form>
            <button onClick={() => setcheckStatus(!checkStatus)} className='border-2 h-[40px] rounded font-bold mt-4 w-[100%]'>Check Status</button>
            {checkStatus && <TaskStatus />}
        </div>
    )
}

export default AdminPannel