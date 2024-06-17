"use client"
import Link from "next/link"
import React ,{ useState } from "react"



const Navbar01 =()=>{
    const [menu,setMenu] = useState("Music")
    return(
        <>
            <nav className="flex w-full  p-3  bg-gray-900 items-center justify-between border-none mx-auto shadow-lg container">
                <div className="flex container justify-start items-center   w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className=" flex font-medium p-16 py-2  font-kanit text-xl text-slate-100">
                            <li 
                                onClick={()=>setMenu("Music")} 
                                className={`px-5 py-3 hover:text-slate-500 rounded-2xl  ${menu === "Music" ? "bg-slate-800 text-gray-100" : " text-gray-400"}`}>
                                <Link href="/MusicalWorks/Musical">Music</Link>
                                
                            </li>
                            <li 
                                onClick={()=>setMenu("Album")} 
                                className={`px-5 py-3 hover:text-slate-500 rounded-2xl ${menu === "Album" ? "bg-slate-800 text-gray-100" : " text-gray-400"}`}>
                                <Link href="/MusicalWorks/Album">Album</Link>
                            </li>
                        </ul>
                </div>
            </nav>
            
        
        
        
        </>





    )



}
export default Navbar01