import React, { useState } from 'react'
import employee from '../assets/employee.png'

import OIP from '../assets/OIP.jpeg'
import { Link, useNavigate } from 'react-router-dom';
import { auth ,provider} from './firebase';
import { signInWithPopup } from 'firebase/auth';






const Auth = () => {
    const [useremail,setuseremail]=useState("")
    const [password,setpassword] = useState("")
  const navigate = useNavigate()
  const loginGoogle=()=>{
    signInWithPopup(auth,provider).then((data)=>{
      if(data.user.email){
        sessionStorage.setItem("emailgoogle",data.user.email)
        navigate('/')
      }
    })
  }
  const handlelogin=()=>{
    if(useremail&&password){
        
        sessionStorage.setItem("email",JSON.stringify(useremail))
        sessionStorage.setItem("password",JSON.stringify(useremail))
        navigate('/')
        

    }
    else{
        alert("Incomplete data")
    }
  }
  
     
  return (
    <div>
       {/* <div style={{width:'100%',minHeight:'100vh'}} className="flex justify-center items-center">
       <div className="container">
       <div className="card shadow p-2">
       <div className="row items-center">
            <div className="col-lg-6">
                <img className='w-100' src={employee} alt="" />
            </div>
            <div className="col-lg-6">
            <h3 className='fw-semibold mt-2'> Task Portal</h3>
            <h5 className='fw-bolder mt-2'>
                  Sign to your account
                </h5>
           
                <FloatingLabel controlId="floatingInputemail" label="Email address" className="mb-3" >
                            <Form.Control   type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <button className='btn btn-primary'>Continue with Email</button>
                <p className='mt-2 mb-2'>Or you can use below option</p>

                <button onClick={loginGoogle} className='btn btn-primary' >Login with Google</button>
                </div>
       </div>
       </div>
       </div>
       </div> */}
       <div style={{minHeight:'100vh'}} className='container m-auto flex justify-center items-center'>

            <div  style={{minHeight:'70vh'}} className="bgimage  border shadow bg-orange-600 rounded w-5/6">
            <h1 className='text-center font-bold text-3xl mt-4 text-orange-700'>EasyRecipe</h1>
            <div className='flex justify-center items-center m-5 w-full '>
            <div className="grid grid-cols-2 ">
                <div>
                    {/* <img className='w-full' src={OIP} alt="" /> */}
                </div>
                <div >
                <div className="flex flex-col">
                <input onChange={(e)=>setuseremail(e.target.value)}  style={{width:'400px',height:'50px'}} className='rounded p-2 my-3 w-5/6' type="text" placeholder='ex:abc@gmail.com' />
                <input onChange={(e)=>setpassword(e.target.value)} style={{width:'400px',height:'50px'}} type="password" className='rounded w-5/6 p-2' placeholder='password' />

                </div>
                <button className='bg-red-600 p-2 rounded text-white inline-block my-3 ' onClick={handlelogin}>Login</button>               

                <p>Or you can use</p>
                <button className='bg-red-600 p-2 rounded text-white inline-block mt-3' onClick={loginGoogle}>Login with google</button>               

                </div>

            </div>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Auth
