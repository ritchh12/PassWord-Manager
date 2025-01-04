import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useRef, useState, useEffect } from 'react'

import { ToastContainer, toast } from 'react-toastify';

const Manager = () => {
    const ref = useRef();
    const clearRef = useRef();
    const [form, setform] = useState({id:"", site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])



    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        let passwordArray;
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])

    const savePassword = () => {
        setPasswordArray([...passwordArray,{...form,id:uuidv4()}])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form,id:uuidv4()}]))
        setform({ id: "", site: "", username: "", password: "" });
        console.log([...passwordArray, form])
        toast('Password Saved', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }


    const showPassword = () => {
        // if(ref.current.type.includes("password")){
        //     ref.current.type="text"
        // }else{
        //     ref.current.type="password"
        // }
        ref.current.type = ref.current.type.includes("password") ? "text" : "password";
    }
    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            savePassword();
        }

    }
    const handleCopy = (e) => {
        navigator.clipboard.writeText(e);
        toast('Password Copied to Clipboard', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const handleDelete=(id) => {
    //   console.log(id)

        const udpatedArray=passwordArray.filter((item)=>{
            return item.id!==id;
        })
        setPasswordArray(udpatedArray)
        localStorage.setItem("passwords",JSON.stringify(udpatedArray))
    
    toast('Password Deleted', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}

    const handleEdit=(id) => {
        ref.current.type="text"
        const data=passwordArray.filter((item)=>{
            return item.id===id;
        })
        //   console.log(data);
        //   console.log(data[0]["site"])
        setform({id:data[0]["id"],site:data[0]["site"],username:data[0]["username"],password: data[0]["password"]})
        handleDelete(id);

    }
    
    


    return (

        <div><ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
            


            {/* STARTS  */}
            <div className="md:container p-3 m-3 flex-wrap wrap min-h-[77.9vh]">
                {/* heading  */}
                <div className="heading">
                    <h1 className='font-extrabold text-5xl text-center text-gray-700'>&lt; Pass-Safe /&gt;</h1>

                    <p className='text-center text-gray-400'>Your own Password Manager</p>
                </div>

                {/* website input  */}
                <div className="website flex justify-center my-5 ">
                    <input value={form.site} ref={clearRef} onChange={handleChange} type="text" id='' name='site' placeholder='enter website url' className='bg-pink-200 rounded-full w-[100%] md:w-[70vw] border border-solid border-pink-300 focus:border-white focus:outline-none py-[8px] px-[12px]' />
                </div>

                {/* credentials */}
                <div className=' flex flex-col md:flex-row justify-center gap-5 md:gap-6  ' >

                    {/* username  */}
                    <input name='username' value={form.username} onChange={handleChange} type="text" placeholder='enter username' className='bg-pink-200 py-[8px] px-[12px] border border-solid border-pink-300 md:w-[50vw] rounded-full  focus:border-white focus:outline-none ' />

                    {/* password  */}
                    <input name='password' onKeyDown={handleKeyDown} ref={ref} value={form.password} onChange={handleChange} type="password" placeholder='enter password' className='bg-pink-200 py-[8px] px-[12px]  border border-solid border-pink-300 md:w-[15vw] rounded-full  focus:border-white focus:outline-none ' />
                    <span className='inset-y-1 flex items-center cursor-pointer ' onClick={showPassword}><lord-icon
                        src="https://cdn.lordicon.com/dicvhxpz.json"
                        trigger="hover"
                        stroke="bold"
                        state="in-reveal"
                        colors="primary:#f4a09c,secondary:#c7166f">
                    </lord-icon></span>
                </div>

                {/* save button  */}
                <div className="flex justify-center my-5">

                    <button onClick={savePassword} type="submit" className='flex gap-2 justify-center items-center rounded-full border border-solid py-2 px-6  bg-gray-400 font-semibold text-green-300 focus:border-green-300 focus:ring-2 focus:ring-white focus:outline-none' >
                        <lord-icon
                            src="https://cdn.lordicon.com/sbnjyzil.json"
                            trigger="hover"
                            stroke="bold"
                            colors="primary:#e83a30,secondary:#c7166f">
                        </lord-icon> Save</button>

                </div>

                {/* table  */}
                <h2 className='font-extrabold text-gray-700 text-2xl text-center'> Your Passwords</h2>
                {passwordArray.length === 0 && <div className='text-lg text-center m-10  text-gray-600 '>Nothing to Show</div>}
                {passwordArray.length != 0 && <div className=' md:p-5 overflow-x-auto '>
                    <table className="table-auto md:w-[90vw] md:mx-auto rounded-lg overflow-hidden md:ml-7">
                        <thead className='bg-gray-400'>
                            <tr className=''>
                                <th className='px-4 py-2'>Site</th>
                                <th className='px-4 py-2'>Username</th>
                                <th className='px-4 py-2'>Password</th>   
                                <th className='px-4 py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {passwordArray.map((item, index) => {

                                return <tr key={index} className='border border-solid'>
                                    <td className='px-4 py-2 text-center flex justify-center ' >{item.site}<span       onClick={() => handleCopy(item.password)} className="cursor-pointer material-symbols-outlined">
                                        content_copy
                                    </span></td>
                                    <td className='px-4 py-2 text-center' >{item.username}</td>
                                    <td className='px-4 py-2 text-center' >{item.password}</td>


                                    {/* delete  */}
                                    <td className='px-4 py-2 text-center flex justify-center gap-4 items-center' ><span className='cursor-pointer' onClick={()=>handleDelete(item.id)}><lord-icon
                                        src="https://cdn.lordicon.com/skkahier.json"
                                        trigger="hover"
                                        colors="primary:#e83a30"
                                    >
                                    </lord-icon>


                                    {/* edit */}
                                    </span>
                                    <span onClick={()=>handleEdit(item.id)} className='cursor-pointer w-8'><img src="/edit.png"   alt="Edit" />
</span></td>
                                </tr>

                            })}
                        </tbody>
                    </table>
                </div>
                }


            </div>

        </div>
    )
}

export default Manager
