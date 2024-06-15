"use client";
import Image from "next/image";
import porsche from "../../public/images/porsche02.png"
import third from "../../public/images/third02.png"
import jackie from "../../public/images/jackie02.png"
import React ,{ useState ,useContext} from "react";
import Link from "next/link";
import Carousel from "@/components/Carousel";

const Artist =()=>{
  const [artist,setArtist] = useState()
  const images = [
    { src: '/images/trinity01.png', alt: 'Image 1' },
    { src: '/images/trinity02.png', alt: 'Image 2' },
    { src: '/images/trinity03.png', alt: 'Image 3' },
    { src: '/images/trinity04.png', alt: 'Image 4' },
  ];
    return(
      <>
        <div className="flex  items-center justify-center mt-4">
          <div className=" font-staatliches">
            <p className="text-5xl text-center text-slate-100">Artist</p>
          </div>
        </div>

        <div className="items-center justify-center pt-5">
        <Carousel images={images} />
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
            <div className="flex flex-col justify-center items-center font-staatliches text-slate-100 ">
              <li onClick={()=>setArtist("Porsche")} className={artist === "Porsche" ? "active": ""}>
                <Link href="/Artist/Porsche">
                  <button className="rounded bg-gradient-to-r from-orange-500 to-yellow-500 py-2 px-4  ">
                    ข้อมูลเพิ่มเติม
                  </button>
                </Link>
              </li>
            </div>
              
          </div>
          <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-1/5 h-96 ">
            <div className="flex flex-col justify-center items-center">
                <Image
                  src={third}
                  alt = "third"
                  width="auto"
                  height="250"
                  priority 
                />
              </div>
              <div className="pt-2 text-center font-staatliches text-slate-950">
                <p className=" text-2xl">Third</p>
                <p className="text-xl">Lapat Ngamchaweng </p>
              </div>
              <div className="flex flex-col justify-center items-center font-staatliches text-slate-100">
                <li onClick={()=>setArtist("Third")} className={artist === "Third" ? "active": ""}>
                  <Link href="/Artist/Third">
                    <button className="rounded bg-gradient-to-r from-yellow-500 to-blue-500 py-2 px-4">
                      ข้อมูลเพิ่มเติม
                    </button>
                  </Link>
                </li>
              </div>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-1/5 h-96  ">
            <div className="flex flex-col justify-center items-center">
              <Image
                src={jackie}
                alt = "jackie"
                width="auto"
                height="250"
                priority
              
              />
            </div>
            <div className="pt-2 text-center font-staatliches text-slate-950">
               <p className=" text-2xl">Jackie</p>
               <p className="text-xl">Jackrin Kungwankiatichai </p>
            </div>
            <div className=" flex flex-col justify-center items-center font-staatliches text-slate-100">
              <li onClick={()=>setArtist("Jackie")} className={artist === "Jackie" ? "active": ""}>
                <Link href="/Artist/Jackie">
                  <button className="  rounded bg-gradient-to-r from-blue-500 to-red-500 py-2 px-4">
                    ข้อมูลเพิ่มเติม
                  </button>
                </Link>
              </li>
            </div>
          </div>
        </div>
      </>
    )
}
export default Artist;
