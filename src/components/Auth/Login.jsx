import React, {useState} from 'react'

const Login=({handleLogin})=>{

   // console.log(handleLogin)

    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const submitHandler=(e)=>{
        e.preventDefault()
        // console.log("Email IS",email)
        // console.log("Password is",password)
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }



    return(
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 border-emerald-600 rounded-xl p-20'>
                <form 
                onSubmit={(e)=>{
                    submitHandler(e)
                }}
                className='flex flex-col items-center justify-center'>
                    <input
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    
                    required
                    className="border-2 border-emerald-600 rounded-full py-4 px-5 text-xl text-white outline-none bg-transparent placeholder:text-gray-400" type="email" placeholder="Enter your email" 
                    />
                    <input
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}

                    required
                    className="border-2 border-emerald-600 rounded-full py-4 px-5 text-xl text-white outline-none bg-transparent mt-3 placeholder:text-gray-400" type="password" placeholder="Enter password" />
                    <button className="text-white border-none outline-none border-none bg-emerald-700 rounded-full font-semibold w-full py-2 px-8 text-xl mt-5 " >Log in</button>
                </form>
            </div>
        </div>
    )
}
export default Login