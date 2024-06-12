"use client";
import Link from "next/link";
import { useState } from "react"
import Image from "next/image";
import Logo from "../components/trinity.jpg"
const Navbar = () =>{
    const [menu, setMenu] = useState("Home")

    return(
        <>
            <nav className="flex w-lg p-3 bg-black items-center justify-between border-none mx-auto shadow-sm">
                <div className="py-4 px-56 justify-center items-center">
                    <Link href="/" onClick={()=>setMenu("Home")} className={menu === "Home" ? "active": ""}>
                    <Image
                    src={Logo}
                    alt = "logo"
                    width="auto"
                    height="45"
                    property
                    />
                    </Link>
                </div>
                <div className="justify-between items-center   w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className=" flex font-medium  px-56 py-4">
                        <li onClick={()=>setMenu("Artist")} className={menu === "Artist" ? "text-gray-500" : " text-gray-100"}>
                           <button className="px-5 py-3 hover:text-slate-500  rounded-lg ">
                            <Link href="/Aritist" className="inline-block">
                                Artist
                           </Link>
                           </button>
                        </li>

                        <li onClick={()=>setMenu("MusicWorks")} className={menu === "MusicWorks" ? "text-gray-500" : " text-gray-100"}>
                            <button className="px-5 py-3 hover:text-slate-500 rounded-lg ">
                                <Link href="/MusicalWorks">
                                    Music
                                </Link>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Navbar