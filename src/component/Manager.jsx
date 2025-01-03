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
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,rgba(251,207,232,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(251,207,232,0.1)_1px,transparent_1px)] bg-[size:6rem_4rem]">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#f8a8d8,transparent)]"></div>
            </div>


            {/* STARTS  */}
            <div className="container p-3 m-3 
flex-wrap: wrap;">
                {/* heading  */}
                <div className="heading">
                    <h1 className='font-extrabold text-5xl text-center text-pink-700'>&lt; Pass-Safe /&gt;</h1>

                    <p className='text-center'>Your own Password Manager</p>
                </div>

                {/* website input  */}
                <div className="website flex justify-center my-5 ">
                    <input value={form.site} ref={clearRef} onChange={handleChange} type="text" id='' name='site' placeholder='enter website url' className='bg-pink-200 rounded-full w-[70vw] border border-solid border-pink-300 focus:border-white focus:outline-none py-[8px] px-[12px]' />
                </div>

                {/* credentials */}
                <div className='flex justify-center gap-20' >

                    {/* username  */}
                    <input name='username' value={form.username} onChange={handleChange} type="text" placeholder='enter username' className='bg-pink-200 py-[8px] px-[12px] border border-solid border-pink-300 w-[50vw] rounded-full  focus:border-white focus:outline-none ' />

                    {/* password  */}
                    <input name='password' onKeyDown={handleKeyDown} ref={ref} value={form.password} onChange={handleChange} type="password" placeholder='enter password' className='bg-pink-200 py-[8px] px-[12px]  border border-solid border-pink-300 w-[15vw] rounded-full  focus:border-white focus:outline-none' />
                    <span className='absolute right-56 cursor-pointer top-[26 0px]' onClick={showPassword}><lord-icon
                        src="https://cdn.lordicon.com/dicvhxpz.json"
                        trigger="hover"
                        stroke="bold"
                        state="in-reveal"
                        colors="primary:#f4a09c,secondary:#c7166f">
                    </lord-icon></span>
                </div>

                {/* save button  */}
                <div className="flex justify-center my-5">

                    <button onClick={savePassword} type="submit" className='flex gap-2 justify-center items-center rounded-full border border-solid py-2 px-6  bg-pink-200 font-semibold text-pink-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-300 focus:outline-none' >
                        <lord-icon
                            src="https://cdn.lordicon.com/sbnjyzil.json"
                            trigger="hover"
                            stroke="bold"
                            colors="primary:#ee66aa,secondary:#c7166f">
                        </lord-icon> Save</button>

                </div>

                {/* table  */}
                <h2 className='font-extrabold text-pink-700 text-2xl text-center'> Your Passwords</h2>
                {passwordArray.length === 0 && <div className='text-lg text-center m-10  text-pink-600 '>Nothing to Show</div>}
                {passwordArray.length != 0 && <div className=' p-5  '>
                    <table className="table-auto w-[90vw] mx-auto rounded-lg overflow-hidden ml-7">
                        <thead className='bg-pink-700'>
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
                                    <td className='px-4 py-2 text-center flex justify-center' >{item.site}<span       onClick={() => handleCopy(item.password)} className="cursor-pointer material-symbols-outlined">
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
                                    <span onClick={()=>handleEdit(item.id)} className='cursor-pointer'><img src="/edit.png" width={30}  alt="Edit" />
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
