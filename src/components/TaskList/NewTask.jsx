import React from 'react'

const NewTask=()=>{
    <div className="flex-shrink-0 h-full w-[360px] bg-blue-500 rounded-xl">
        <div className="flex justify-center mt-1 ">
        <h1 className=" bg-black px-2 py-1 font-bold text-xl rounded-[5px] ">Task</h1>
        </div>
        <div className="flex justify-between p-4">
          <h3 className="bg-red-700 px-3 py-1 rounded-[5px] text-black font-medium ">
            High
          </h3>
          <h2 className="text-black font-semibold m-1">25 oct 2024</h2>
        </div>

        <div className="px-4 mt-2  ">
          <h1 className=" font-bold text-xl text-black rounded-full p-1">
            Make a Employee Managemnet System</h1>
          <p className=" text-semibold p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, temporibus? Quis iure, sapiente magnam magni officia laborum voluptate quod nemo?
            <br /><br />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste repellat laudantium dolor delectus.
          </p>
        </div>

        <div>
            <button>Mark as Completed</button>
            
        </div>
      </div>
}
export default NewTask