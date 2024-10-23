import React from 'react'

function CompletedTask({ completedTask }) {

    return (
        <div className='min-h-[100px] w-[100%] bg-[#a9c070] p-2 overflow-hidden'>
            <div className='w-[100%] flex justify-between font-semibold'>
                <h1 className='min-w-[45px] h-[25px] items-center px-1 rounded-md bg-red-600'>{completedTask.category}</h1>
                <p>{completedTask.taskDate}</p>
            </div>
            <h1 className='text-xl font-semibold'>{completedTask.taskTitle}</h1>
            <p className='text-[14px]'>{completedTask.taskDescription}</p>
            <button className='w-[100%] py-1 bg-green-700 rounded-md mt-3 font-semibold'>Completed</button>
        </div>
    )
}

export default CompletedTask