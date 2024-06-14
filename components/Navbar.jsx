"use client";
import Link from "next/link";
import React ,{ useState } from "react"
import Image from "next/image";
import Logo from "../public/images/trinity.jpg"
const Navbar = () =>{
  const [menu, setMenu] = useState("Home")

    return(
        <>
            <nav className="flex w-full p-3 bg-black items-center justify-between border-none mx-auto shadow-sm container">
                <div className="py-4  justify-center items-center ">
                    <Link href="/" onClick={()=>setMenu("Home")} className={menu === "Home" ? "active": ""}>
                        <Image
                            src={Logo}
                            alt = "logo"
                            width="auto"
                            height="45"
                            priority
                        />
                    </Link>
                </div>
                <div className="justify-between items-center   w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className=" flex font-medium   py-2 text-slate-100">
                    <li 
                            onClick={()=>setMenu("Artist")} 
                            className={`px-5 py-3 hover:text-slate-500 rounded-lg ${menu === "Artist" ? "text-gray-500" : " text-gray-100"}`}>
                            <Link href="/Artist">Artist</Link>
                        </li>
                        <li 
                            onClick={()=>setMenu("MusicalWorks")} 
                            className={`px-5 py-3 hover:text-slate-500 rounded-lg ${menu === "MusicalWorks" ? "text-gray-500" : " text-gray-100"}`}>
                            <Link href="/MusicalWorks">Music</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Navbar;