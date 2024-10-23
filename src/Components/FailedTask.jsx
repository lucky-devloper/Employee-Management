import React from 'react'

function FailedTask({ FailedTask }) {
    console.log(FailedTask);

    return (
        <div className='min-h-[100px] w-[100%] bg-[#c7734e] p-2 overflow-hidden'>
            <div className='w-[100%] flex justify-between font-semibold'>
                <h1 className='min-w-[45px] h-[25px] items-center px-1 rounded-md bg-red-600'>{FailedTask.category}</h1>
                <p>{FailedTask.taskDate}</p>
            </div>
            <h1 className='text-xl font-semibold'>{FailedTask.taskTitle}</h1>
            <p className='text-[14px]'>{FailedTask.taskDescription}</p>
            <button className='w-[100%] py-1 bg-red-700 rounded-md mt-3 font-semibold'>Completed</button>
        </div>
    )
}

export default FailedTask