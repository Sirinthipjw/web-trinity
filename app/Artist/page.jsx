"use client";
import Image from "next/image";
import porsche from "../../public/porsche01.png"
import React ,{ useState ,useContext} from "react";
import { Link } from "react-router-dom";



const Artist =()=>{
  const [artist,setArtist] = useState("Porsche01")

    return(
      <>
        <div className="flex  items-center justify-center mt-4">
          <div className=" font-staatliches">
            <p className="text-5xl text-center text-slate-100">Artist</p>
          </div>

        </div>
        <div className="flex static items-center justify-center m-10 space-x-10 ">
          <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-1/5 h-96 ">
            <div className="flex flex-col justify-center items-center">
              <Image
              src={porsche}
              alt = "porsche"
              width="auto"
              height="250"
              priority
              
            />
            </div>
            <div className="pt-2 text-center font-staatliches text-slate-950">
               <p className=" text-2xl">Porsche</p>
               <p className="text-xl">Sivakorn Adulsuttikul</p>
            </div>
            <div className="flex flex-col justify-center items-center font-staatliches text-slate-100">
              <li onClick={()=>setArtist("Porsche01")} className={artist === "Porsche01" ? "active": ""}>
                <Link href="/Porsche01">
                  <button type="button" className="rounded bg-gradient-to-r from-yellow-500 to-orange-500 py-2 px-4 hover:bg-orange-400">
                    ข้อมูลเพิ่มเติม
                  </button>
                </Link>
              </li>
            </div>
              
            
            
           

          </div>
          <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 w-1/5 h-96 ">


          </div>

          <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 w-1/5 h-96  ">


          </div>
        </div>

       
        
      </>
    )
}
export default Artist;
{/* <span class="text-5xl bg-clip-text text-center text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
              Artist
            </span> */}