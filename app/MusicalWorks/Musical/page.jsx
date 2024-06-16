"use client";
import Image from "next/image"
import trinity11 from "../../../public/images/trinity11.png"
import Navbar01 from "../../../components/Navbar01"
import Link from "next/link"
import React,{ useState } from "react"
const Music =()=>{
    const [song,setSong] = useState()
    return(
        <>
            <div className="flex  items-center justify-center mt-4">
                <div className=" font-staatliches">
                    <p className="text-5xl text-center text-slate-100">Musical</p>
                </div>
            </div>
            <div className="flex items-center justify-center pt-10">
                <div className="shadow-lg w-4/5 h-full bg-gray-900">
                        <Navbar01/>
                    <div className="text-white font-kanit text-4xl">
                        <p className="pt-10 px-16">
                            เพลง วง "TRINITY"
                        </p>
                    </div>    
                    <div className="py-10 px-16">
                            <div className="flex container items-start justify-start">
                                <div className="shadow-xl  border border-lg rounded-lg border-slate-400 w-full h-96 bg-gray-800">
                                    <Image
                                        src={trinity11}
                                        alt="trinity11"
                                        width="auto"
                                        height="auto"
                                        className="rounded-t-lg shadow-xl"
                                    />
                                    <div className="px-5">
                                        <div className=" w-full border-b border-gray-500">
                                            <div className="font-sm text-white font-kanit pt-4">
                                                <p className="">ฟังเพลง</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-5">
                                        <div className=" w-full border border-gray-500">
                                            <div className="font-sm text-white font-kanit pt-4">
                                                <p className="">ฟังเพลง</p>
                                            </div>
                                        </div>
                                    </div>

                                   
                                    
                                </div> 
                            
                                <div className="px-10">
                                    <div className="items-center justify-between ">
                                        <div className="shadow-lg border border-lg rounded-lg border-slate-400 w-11/12 h-14 bg-gray-800 items-center justify-between">
                                            <ul className=" flex font-sm   font-kanit">
                                                <li 
                                                    onClick={()=>setSong("HiddenTrack")}
                                                    className={`rounded-lg w-80 h-14 py-1 ${song === "HiddenTrack" ? "hover:bg-gray-600 " : "hover:bg-gray-600 " }`}>
                                                    <Link href="https://youtu.be/AbEjhYLarSc?si=luYgQKCQArOAK13k">
                                                        <div className="px-5 ">
                                                            <p className="text-slate-100 font-sm ">Hidden Track</p>
                                                            <p className="text-slate-300 text-sm font-xs">THE 1ST MINI ALBUM: “THE ELEMENTS”</p>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="items-center justify-between py-5">
                                        <div className="shadow-lg border border-lg rounded-lg border-slate-400 w-11/12 h-14 bg-gray-800 items-center justify-between">
                                            <ul className=" flex font-sm   font-kanit">
                                                <li 
                                                    onClick={()=>setSong("Haters Got Nothing")}
                                                    className={`rounded-lg w-80 h-14 py-1 ${song === "Haters Got Nothing" ? "hover:bg-gray-600 " : "hover:bg-gray-600 " }`}>
                                                    <Link href="https://youtu.be/Cgt74TruI2c?si=jf6MpojGRqoMcnpE">
                                                        <div className="px-5 ">
                                                            <p className="text-slate-100 font-sm ">Haters Got Nothing</p>
                                                            <p className="text-slate-300 text-sm font-xs">THE 1ST MINI ALBUM: “THE ELEMENTS”</p>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="items-center justify-between">
                                        <div className="shadow-lg border border-lg rounded-lg border-slate-400 w-11/12 h-14 bg-gray-800 items-center justify-between ">
                                            <ul className=" flex font-sm   font-kanit">
                                                <li 
                                                    onClick={()=>setSong("IOU")}
                                                    className={`rounded-lg w-80 h-14 py-1 ${song === "IOU" ? "hover:bg-gray-600 " : "hover:bg-gray-600 " }`}>
                                                    <Link href="https://www.youtube.com/watch?v=kx5wGTKOzXw">
                                                        <div className="px-5 ">
                                                            <p className="text-slate-100 font-sm ">IOU</p>
                                                            <p className="text-slate-300 text-sm font-xs">THE 1ST MINI ALBUM: “THE ELEMENTS”</p>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="items-center justify-between py-5">
                                        <div className="shadow-lg border border-lg rounded-lg border-slate-400 w-11/12 h-14 bg-gray-800 items-start justify-start ">
                                            <ul className=" flex font-sm   font-kanit">
                                                <li 
                                                    onClick={()=>setSong("Jazzy")}
                                                    className={`rounded-lg w-80 h-14 py-1 ${song === "Jazzy" ? "hover:bg-gray-600 " : "hover:bg-gray-600 " }`}>
                                                    <Link href="https://www.youtube.com/watch?v=9pwSUrwHDNE">
                                                        <div className="px-5 ">
                                                            <p className="text-slate-100 font-sm ">Jazzy</p>
                                                            <p className="text-slate-300 text-sm font-xs">THE 1ST MINI ALBUM: “THE ELEMENTS”</p>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="items-center justify-between">
                                        <div className="shadow-lg border border-lg rounded-lg border-slate-400 w-11/12 h-14 bg-gray-800 items-start justify-start ">
                                            <ul className=" flex font-sm   font-kanit">
                                                <li 
                                                    onClick={()=>setSong("5:59")}
                                                    className={`rounded-lg w-80 h-14 py-1 ${song === "5:59" ? "hover:bg-gray-600 " : "hover:bg-gray-600 " }`}>
                                                    <Link href="https://www.youtube.com/watch?v=TSSqZi23vr8">
                                                        <div className="px-5 ">
                                                            <p className="text-slate-100 font-sm ">5:59</p>
                                                            <p className="text-slate-300 text-sm font-xs">5:59 (Five-Fifty Nine)</p>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div>
                                    <div className="items-center justify-between">
                                        <div className="shadow-lg border border-lg rounded-lg border-slate-400 w-11/12 h-14 bg-gray-800 items-start justify-start ">
                                            <ul className=" flex font-sm   font-kanit">
                                                <li 
                                                    onClick={()=>setSong("LIFE AIN'T OVER")}
                                                    className={`rounded-lg w-80 h-14 py-1 ${song === "LIFE AIN'T OVER" ? "hover:bg-gray-600 " : "hover:bg-gray-600 " }`}>
                                                    <Link href="https://www.youtube.com/watch?v=WvmkmycnqFU">
                                                        <div className="px-5 ">
                                                            <p className="text-slate-100 font-sm ">LIFE AIN'T OVER</p>
                                                            <p className="text-slate-300 text-sm font-xs">EP.01 BREATH</p>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="items-center justify-between py-5">
                                        <div className="shadow-lg border border-lg rounded-lg border-slate-400 w-11/12 h-14 bg-gray-800 items-start justify-start ">
                                            <ul className=" flex font-sm   font-kanit">
                                                <li 
                                                    onClick={()=>setSong("NOBODY")}
                                                    className={`rounded-lg w-80 h-14 py-1 ${song === "NOBODY" ? "hover:bg-gray-600 " : "hover:bg-gray-600 " }`}>
                                                    <Link href="https://www.youtube.com/watch?v=htPOu3YHRwo">
                                                        <div className="px-5 ">
                                                            <p className="text-slate-100 font-sm ">NOBODY</p>
                                                            <p className="text-slate-300 text-sm font-xs">EP.01 BREATH</p>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="items-center justify-between">
                                        <div className="shadow-lg border border-lg rounded-lg border-slate-400 w-11/12 h-14 bg-gray-800 items-start justify-start ">
                                            <ul className=" flex font-sm   font-kanit">
                                                <li 
                                                    onClick={()=>setSong("I DON'T MISS YOU")}
                                                    className={`rounded-lg w-80 h-14 py-1 ${song === "I DON'T MISS YOU" ? "hover:bg-gray-600 " : "hover:bg-gray-600 " }`}>
                                                    <Link href="https://www.youtube.com/watch?v=XefouQi7rnQ">
                                                        <div className="px-5 ">
                                                            <p className="text-slate-100 font-sm ">I DON'T MISS YOU</p>
                                                            <p className="text-slate-300 text-sm font-xs">EP.01 BREATH</p>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="items-center justify-between py-5">
                                        <div className="shadow-lg border border-lg rounded-lg border-slate-400 w-11/12 h-14 bg-gray-800 items-start justify-start ">
                                            <ul className=" flex font-sm   font-kanit">
                                                <li 
                                                    onClick={()=>setSong("Oh! Oh!")}
                                                    className={`rounded-lg w-80 h-14 py-1 ${song === "Oh! Oh!" ? "hover:bg-gray-600 " : "hover:bg-gray-600 " }`}>
                                                    <Link href="https://www.youtube.com/watch?v=WNjhVAwzyWU">
                                                        <div className="px-5 ">
                                                            <p className="text-slate-100 font-sm ">Oh! Oh!</p>
                                                            <p className="text-slate-300 text-sm font-xs">EP.01 BREATH</p>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="items-center justify-between">
                                        <div className="shadow-lg border border-lg rounded-lg border-slate-400 w-11/12 h-14 bg-gray-800 items-start justify-start ">
                                            <ul className=" flex font-sm   font-kanit">
                                                <li 
                                                    onClick={()=>setSong("YESTERDAY TODAY TOMORROW")}
                                                    className={`rounded-lg w-80 h-14 py-1 ${song === "YESTERDAY TODAY TOMORROW" ? "hover:bg-gray-600 " : "hover:bg-gray-600 " }`}>
                                                    <Link href="https://www.youtube.com/watch?v=bpe9zQ5zDDc">
                                                        <div className="px-5 ">
                                                            <p className="text-slate-100 font-sm ">YESTERDAY TODAY TOMORROW</p>
                                                            <p className="text-slate-300 text-sm font-xs">YESTERDAY TODAY TOMORROW</p>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>

                                <div className="px-10">
                                    <div className="items-center justify-between">
                                        <div className="shadow-lg border border-lg rounded-lg border-slate-400 w-11/12 h-14 bg-gray-800 items-start justify-start ">
                                            <ul className=" flex font-sm   font-kanit">
                                                <li 
                                                    onClick={()=>setSong("Champagne Poppin")}
                                                    className={`rounded-lg w-80 h-14 py-1 ${song === "Champagne Poppin" ? "hover:bg-gray-600 " : "hover:bg-gray-600 " }`}>
                                                    <Link href="https://www.youtube.com/watch?v=LXWOkTodBZI">
                                                        <div className="px-5 ">
                                                            <p className="text-slate-100 font-sm ">Champagne Poppin</p>
                                                            <p className="text-slate-300 text-sm font-xs">EP.02 DESIRE</p>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="items-center justify-between py-5">
                                        <div className="shadow-lg border border-lg rounded-lg border-slate-400 w-11/12 h-14 bg-gray-800 items-start justify-start ">
                                            <ul className=" flex font-sm   font-kanit">
                                                <li 
                                                    onClick={()=>setSong("ขอไม่ยินดี")}
                                                    className={`rounded-lg w-80 h-14 py-1 ${song === "ขอไม่ยินดี" ? "hover:bg-gray-600 " : "hover:bg-gray-600 " }`}>
                                                    <Link href="https://www.youtube.com/watch?v=8eR5uLpw4K8">
                                                        <div className="px-5 ">
                                                            <p className="text-slate-100 font-sm ">ขอไม่ยินดี</p>
                                                            <p className="text-slate-300 text-sm font-xs">EP.02 DESIRE</p>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="items-center justify-between">
                                        <div className="shadow-lg border border-lg rounded-lg border-slate-400 w-11/12 h-14 bg-gray-800 items-start justify-start ">
                                            <ul className=" flex font-sm   font-kanit">
                                                <li 
                                                    onClick={()=>setSong("100 Days")}
                                                    className={`rounded-lg w-80 h-14 py-1 ${song === "100 Days" ? "hover:bg-gray-600 " : "hover:bg-gray-600 " }`}>
                                                    <Link href="https://www.youtube.com/watch?v=oM88o3-sb70">
                                                        <div className="px-5 ">
                                                            <p className="text-slate-100 font-sm ">100 Days</p>
                                                            <p className="text-slate-300 text-sm font-xs">EP.02 DESIRE</p>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="items-center justify-between py-5">
                                        <div className="shadow-lg border border-lg rounded-lg border-slate-400 w-11/12 h-14 bg-gray-800 items-start justify-start ">
                                            <ul className=" flex font-sm   font-kanit">
                                                <li 
                                                    onClick={()=>setSong("Thank You All")}
                                                    className={`rounded-lg w-80 h-14 py-1 ${song === "Thank You All" ? "hover:bg-gray-600 " : "hover:bg-gray-600 " }`}>
                                                    <Link href="https://www.youtube.com/watch?v=wFWXtFzxzqU">
                                                        <div className="px-5 ">
                                                            <p className="text-slate-100 font-sm ">Thank You All</p>
                                                            <p className="text-slate-300 text-sm font-xs">EP.02 DESIRE</p>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="items-center justify-between">
                                        <div className="shadow-lg border border-lg rounded-lg border-slate-400 w-11/12 h-14 bg-gray-800 items-start justify-start ">
                                            <ul className=" flex font-sm   font-kanit">
                                                <li 
                                                    onClick={()=>setSong("My Princess")}
                                                    className={`rounded-lg w-80 h-14 py-1 ${song === "My Princess" ? "hover:bg-gray-600 " : "hover:bg-gray-600 " }`}>
                                                    <Link href="https://www.youtube.com/watch?v=OfcLw6QBBs8">
                                                        <div className="px-5 ">
                                                            <p className="text-slate-100 font-sm ">My Princess</p>
                                                            <p className="text-slate-300 text-sm font-xs">My Princess</p>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            
                        </div>

                            






                            
                </div>
                    


                
            </div>
            
        </>



    )





}
export default Music