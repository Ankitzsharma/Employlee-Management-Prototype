import React from 'react'

const CreateTask =()=>{
    return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded' >
        <div className='flex justify-between items-start'>
            <div className='w-1/2'>
                <div>
                    <h3 className='text-sm font-semibold text-gray-300 mb-1'>Task Tittle</h3>
                    <input className='text-sm rounded px-2 py-1 w-4/5 bg-transparent border-[1px] border-gray-400 mb-4 ' type="text" placeholder='Enter Task Tittle' />
                </div>

                <div>
                    <h3 className='text-sm font-semibold text-gray-300 mb-1'>Date</h3>
                    <input className='text-sm py-1 px-2 border-[1px] w-4/5 rounded border-gray-400 bg-transparent mb-4' type="" placeholder='dd/mm/yyyy' />
                </div>

                <div>
                    <h3 className='text-sm font-semibold text-gray-300 mb-1'>Assign to</h3>
                    <input className='text-sm py-1 px-2 w-4/5 border-[1px] border-gray-400 bg-transparent rounded mb-4  ' type="text" placeholder='Employee Name' />
                </div>

                <div>
                    <h3 className='text-sm font-semibold text-gray-300 mb-1'>Category</h3>
                    <input className='text-sm bg-transparent py-2 px-2 w-4/5 rounded border-[1px] border-gray-400 outline-none mb-4' type="text" placeholder='Design, Dev, etc.' />
                </div>
            </div>
            <div className='w-2/5 flex flex-col items-start'>
                <h3 className='text-xl font-semibold text-gray-300 mb-1  '>Description</h3>
                <textarea className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 text-white ' name="area" placeholder="Enter Task Description . . ."></textarea>
                <button className='bg-emerald-500 py-3 px-5 hover:bg-emerald-600 rounded text-sm font-semibold w-full mt-4 '>Create Task</button>
            </div>
        </div>
    </div>
    )
}

export default CreateTask;