import React,{useContext, useEffect, useState} from 'react'
// import { setLocalStorage } from './utils/LocalStorage'
// import { getLocalStorage } from './utils/LocalStorage'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dasboard/EmployeeDashboard'
import AdminDashboard from './components/Dasboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'


const App=()=>{

const [user,setUser]=useState(null)
const[loggedInUserData,setLoggedInUserData]=useState(null)
const authData =useContext(AuthContext)

// useEffect(()=>{
//   if(authData){
//     const loggedInUser=localStorage.getItem("loggedInUser")
//     if(loggedInUser){
//       setUser(loggedInUser.role)
//     }
//   }
// },[authData])

const handleLogin=(email,password)=>{
  if(email=='admin@example.com' && password=='123'){
    setUser('admin')
    localStorage.setItem('loggedInUser',JSON.stringify({Role:'Admin'}))
  }else if(authData){
    const employee= authData.employees.find((e)=>email==e.email && e.password==password)
    if(employee){
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({Role:'Employee'}))
    }
  }
  else{
    alert("Invalid Credentials")
  }

}
  return(
    <>
   
    {!user ?<Login handleLogin={handleLogin}/>: ''}
    {user=='admin' ? <AdminDashboard/> : (user=='employee'?<EmployeeDashboard data={loggedInUserData}/>: null)}
    {/* {<EmployeeDashboard/>}
     {<AdminDashboard/>} */}
    </>
  )
}
export default App