import React, { useState } from 'react'
import { signupuser } from '../../api/apicalls';
import { useNavigate } from 'react-router-dom';

const StaffRegistation = () => {
    const navigte = useNavigate()
    const [staffsignup, setstaffsignup] = useState({
        username: '',
        email: '',
        password: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setstaffsignup((prevData) => ({
          ...prevData,
          [name]: value
        }));
    };

    const headleStaffSignup = async (e) => {
        e.preventDefault()

        if(staffsignup.password.length < 6){
            alert("Password Must beat least 6 characters long")
            return
        }

        try{
            const res = await signupuser(staffsignup);

            if(res.message === "User registered successfully"){
                alert("Registaion Success")
                navigte('/staff-login')         
            }
            else{
                alert(res.message)
            }

        }
        catch(err){
            console.log(err)
        }
    }

  return (
    <div className=''>
        <div className="xl:px-32 md:px-16 px-4 my-40">
            <div className="md:w-1/2">
                <form onSubmit={headleStaffSignup} method="post">
                    <div className="my-2">
                        <p className="">Username:</p>
                        <div className="my-2">
                            <input 
                                type="text"
                                name='username'
                                value={staffsignup.username}
                                required
                                placeholder='Enter Username' 
                                onChange={handleInputChange}
                                className='w-full h-12 bg-gray-200 border pl-2'
                            />
                        </div>
                    </div>

                    <div className="my-2">
                        <p className="">Email:</p>
                        <div className="my-2">
                            <input 
                                type="email"
                                name='email'
                                value={staffsignup.email}
                                required
                                placeholder='Enter Email Address' 
                                onChange={handleInputChange}
                                className='w-full h-12 bg-gray-200 border pl-2'
                            />
                        </div>
                    </div>

                    <div className="md:my-2">
                        <p className="">Password:</p>
                        <div className="my-2">
                            <input 
                                type="password"
                                name='password'
                                value={staffsignup.password}
                                required
                                placeholder='Enter Password'
                                onChange={handleInputChange}
                                className='w-full h-12 bg-gray-200 border pl-2'
                            />
                        </div>
                    </div>


                    <div className="">
                        <button className='bg-[#560606] py-2 px-8 text-[#e8b910] rounded'>
                            Register as Staff
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default StaffRegistation