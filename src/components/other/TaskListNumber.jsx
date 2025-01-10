import React from 'react'

const TaskListNumber=({data})=>{
    return(
        <div className='flex justify-between gap-5 mt-10 screen'>
            <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-500'>
                <h2 className='text-3xl text-black font-semibold '>{data.taskNumbers.newTask}</h2>
                <h3 className='text-xl text-black font-medium'>New Task</h3>
            </div>

            <div className='rounded-xl w-[45%] py-6 px-9 bg-yellow-400'>
                <h2 className='text-3xl text-black font-semibold '>{data.taskNumbers.active}</h2>
                <h3 className='text-xl text-black font-medium'>Active Task</h3>
            </div>

            <div className='rounded-xl w-[45%] py-6 px-9 bg-green-400'>
                <h2 className='text-3xl text-black font-semibold '>{data.taskNumbers.completed}</h2>
                <h3 className='text-xl text-black font-medium'>Completed Task</h3>
            </div>

            <div className='rounded-xl w-[45%] py-6 px-9 bg-red-500'>
                <h2 className='text-3xl text-black font-semibold '>{data.taskNumbers.failed}</h2>
                <h3 className='text-xl text-black font-medium'>Failed Task</h3>
            </div>
        </div>
        

    )
}

export default TaskListNumber