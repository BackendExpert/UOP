import axios from 'axios';
import React, { useState } from 'react'
import secureLocalStorage from 'react-secure-storage'

const StaffLogin = () => {
    const [stafflogin, setstafflogin] = useState({
        email: '',
        password: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setstafflogin((prevData) => ({
          ...prevData,
          [name]: value
        }));
    };

    const headleStaffLogin = async (e) => {
        e.preventDefault()

        try{
            const res = await axios.post(
                import.meta.env.VITE_APP_API,  
                { ...stafflogin, action: 'login' }, 
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            const { status, message, user, token } = res.data;

            if(status === "Success"){
                localStorage.setItem('token', token);
                secureLocalStorage.setItem('LoginR', user.role)
                secureLocalStorage.setItem('LoginE', user.email)
                secureLocalStorage.setItem('LoginU', user.username)
                alert('Login successful!');
                // navigate('/Dashboard/Home'); 
            }
            else{
                alert(message)
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
                <form onSubmit={headleStaffLogin} method="post">
                    <div className="my-2">
                        <p className="">Email:</p>
                        <div className="my-2">
                            <input 
                                type="email"
                                name='email'
                                value={stafflogin.email}
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
                                value={stafflogin.password}
                                required
                                placeholder='Enter Password'
                                onChange={handleInputChange}
                                className='w-full h-12 bg-gray-200 border pl-2'
                            />
                        </div>
                    </div>


                    <div className="">
                        <button className='bg-[#560606] py-2 px-8 text-[#e8b910] rounded'>
                            Login as Staff
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default StaffLogin