import React from "react";
import NewTask from "./NewTask";

const TaskList = ({data}) => {
  return (
    <div id="tasklist"
      className="flex gap-2 items-center justify-start flex-nowrap overflow-x-auto h-[67%] w-full mt-10 py-5 ">
      <NewTask />  
      {/* <div className="flex-shrink-0 h-full w-[360px] bg-blue-500 rounded-xl">
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
      </div> */}

      <div className="flex-shrink-0 h-full w-[360px] bg-green-500 rounded-xl">
        <div className="flex justify-center mt-1 ">
        <h1 className=" bg-black px-2 py-1 font-bold text-xl rounded-[5px] ">Task</h1>
        </div>
        <div className="flex justify-between p-4">
          <h3 className="bg-yellow-400 px-2 py-1 rounded-[5px] text-black font-medium ">
            Medium
          </h3>
          <h2 className="text-black font-semibold m-1">20 oct 2024</h2>
        </div>

        <div className="px-4 mt-2  ">
          <h1 className=" font-bold text-xl text-black rounded-full p-1">
            Make a Employee Managemnet System</h1>
          <p className=" text-semibold p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, temporibus? Quis iure, sapiente magnam magni officia laborum voluptate quod nemo?
            <br /><br />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam inventore maiores impedit repudiandae!
          </p>
        </div>
      </div>

      <div className="flex-shrink-0 h-full w-[360px] bg-yellow-500 rounded-xl">
        <div className="flex justify-center mt-1 ">
        <h1 className=" bg-black px-2 py-1 font-bold text-xl rounded-[5px] ">Task</h1>
        </div>
        <div className="flex justify-between p-4">
          <h3 className="bg-green-400 px-3 py-1 rounded-[5px] text-black font-medium ">
            Low
          </h3>
          <h2 className="text-black font-semibold m-1">28 oct 2024</h2>
        </div>

        <div className="px-4 mt-2  ">
          <h1 className=" font-bold text-xl text-black rounded-full p-1">
            Make a Employee Managemnet System</h1>
          <p className=" text-semibold p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, temporibus? Quis iure, sapiente magnam magni officia laborum voluptate quod nemo?
            <br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quae.
          </p>
        </div>
      </div>

      <div className="flex-shrink-0 h-full w-[360px] bg-red-500 rounded-xl">
        <div className="flex justify-center mt-1 ">
        <h1 className=" bg-black px-2 py-1 font-bold text-xl rounded-[5px] ">Task</h1>
        </div>
        <div className="flex justify-between p-4">
          <h3 className="bg-yellow-400 px-2 py-1 rounded-[5px] text-black font-medium ">
            Medium
          </h3>
          <h2 className="text-black font-semibold m-1">3 Nov 2024</h2>
        </div>

        <div className="px-4 mt-2  ">
          <h1 className=" font-bold text-xl text-black rounded-full p-1">
            Make a Employee Managemnet System</h1>
          <p className=" text-semibold p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, temporibus? Quis iure, sapiente magnam magni officia laborum voluptate quod nemo?
            <br /><br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos pariatur doloribus possimus quibusdam voluptatibus obcaecati voluptate!
          </p>
        </div>
      </div>

      {/* <div className="flex-shrink-0 h-full w-[360px] bg-blue-500 rounded-xl">
        <div className="flex justify-center mt-1 ">
        <h1 className=" bg-black px-2 py-1 font-bold text-xl rounded-[5px] ">Task</h1>
        </div>
        <div className="flex justify-between p-4">
          <h3 className="bg-red-600 px-3 py-1 rounded-[5px] text-black font-medium ">
            High
          </h3>
          <h2 className="text-black font-semibold m-1">10 Nov 2024</h2>
        </div>

        <div className="px-4 mt-2  ">
          <h1 className=" font-bold text-xl text-black rounded-full p-1">
            Make a Employee Managemnet System</h1>
          <p className=" text-semibold p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, temporibus? Quis iure, sapiente magnam magni officia laborum voluptate quod nemo?
            <br /><br />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis eaque reiciendis tempore.
          </p>
        </div>
      </div>

      <div className="flex-shrink-0 h-full w-[360px] bg-green-500 rounded-xl">
        <div className="flex justify-center mt-1 ">
        <h1 className=" bg-black px-2 py-1 font-bold text-xl rounded-[5px] ">Task</h1>
        </div>
        <div className="flex justify-between p-4">
          <h3 className="bg-yellow-600 px-2 py-1 rounded-[5px] text-black font-medium ">
            Medium
          </h3>
          <h2 className="text-black font-semibold m-1">20 oct 2024</h2>
        </div>

        <div className="px-4 mt-2  ">
          <h1 className=" font-bold text-xl text-black rounded-full p-1">
            Make a Employee Managemnet System</h1>
          <p className=" text-semibold p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, temporibus? Quis iure, sapiente magnam magni officia laborum voluptate quod nemo?
            <br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus?
          </p>
        </div>
      </div>

      <div className="flex-shrink-0 h-full w-[360px] bg-yellow-500 rounded-xl">
        <div className="flex justify-center mt-1 ">
        <h1 className=" bg-black px-2 py-1 font-bold text-xl rounded-[5px] ">Task</h1>
        </div>
        <div className="flex justify-between p-4">
          <h3 className="bg-red-600 px-3 py-1 rounded-[5px] text-black font-medium ">
            High
          </h3>
          <h2 className="text-black font-semibold m-1">20 oct 2024</h2>
        </div>

        <div className="px-4 mt-2  ">
          <h1 className=" font-bold text-xl text-black rounded-full p-1">
            Make a Employee Managemnet System</h1>
          <p className=" text-semibold p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, temporibus? Quis iure, sapiente magnam magni officia laborum voluptate quod nemo?
            <br /><br />Lorem, ipsum dolor.
          </p>
        </div>
      </div>

      <div className="flex-shrink-0 h-full w-[360px] bg-red-400 rounded-xl">
        <div className="flex justify-center mt-1 ">
        <h1 className=" bg-black px-2 py-1 font-bold text-xl rounded-[5px] ">Task</h1>
        </div>
        <div className="flex justify-between p-4">
          <h3 className="bg-green-600 px-3 py-1 rounded-[5px] text-black font-medium ">
            Low
          </h3>
          <h2 className="text-black font-semibold m-1">20 oct 2024</h2>
        </div>

        <div className="px-4 mt-2  ">
          <h1 className=" font-bold text-xl text-black rounded-full p-1">
            Make a Employee Managemnet System</h1>
          <p className=" text-semibold p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, temporibus? Quis iure, sapiente magnam magni officia laborum voluptate quod nemo?
          </p>
        </div>
      </div>

      <div className="flex-shrink-0 h-full w-[360px] bg-blue-500 rounded-xl">
        <div className="flex justify-center mt-1 ">
        <h1 className=" bg-black px-2 py-1 font-bold text-xl rounded-[5px] ">Task</h1>
        </div>
        <div className="flex justify-between p-4">
          <h3 className="bg-red-600 px-3 py-1 rounded-[5px] text-black font-medium ">
            High
          </h3>
          <h2 className="text-black font-semibold m-1">7 oct 2024</h2>
        </div>

        <div className="px-4 mt-2  ">
          <h1 className=" font-bold text-xl text-black rounded-full p-1">
            Make a Employee Managemnet System</h1>
          <p className=" text-semibold p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, temporibus? Quis iure, sapiente magnam magni officia laborum voluptate quod nemo?
            <br /><br />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ex.
          </p>
        </div>
      </div>

      <div className="flex-shrink-0 h-full w-[360px] bg-yellow-500 rounded-xl">
        <div className="flex justify-center mt-1 ">
        <h1 className=" bg-black px-2 py-1 font-bold text-xl rounded-[5px] ">Task</h1>
        </div>
        <div className="flex justify-between p-4">
          <h3 className="bg-red-600 px-3 py-1 rounded-[5px] text-black font-medium ">
            High
          </h3>
          <h2 className="text-black font-semibold m-1">20 oct 2024</h2>
        </div>

        <div className="px-4 mt-2  ">
          <h1 className=" font-bold text-xl text-black rounded-full p-1">
            Make a Employee Managemnet System</h1>
          <p className=" text-semibold p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, temporibus? Quis iure, sapiente magnam magni officia laborum voluptate quod nemo?
          </p>
        </div>
      </div> */}

    </div>
  );
};

export default TaskList;
