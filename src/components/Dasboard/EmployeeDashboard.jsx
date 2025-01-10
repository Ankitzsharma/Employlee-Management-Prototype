import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'
const EmployeeDashboard=({data})=>{
    
    return (
        <div className='p-10 bg-[#1C1C1C] h-screen'>
            {/* <h1>{data.firstName}</h1> */}
            <Header data={data}/>
            <TaskListNumber data={data}/>
            <TaskList data={data}/>
        </div>
    )
}

export default EmployeeDashboard