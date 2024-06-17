import Navbar01 from "@/components/Navbar01"
import Image from "next/image"
import Link from "next/link"
import trinity05 from "../../../public/images/trinity05.png"
import trinity06 from "../../../public/images/trinity06.png"
import trinity07 from "../../../public/images/trinity07.png"

const Album =()=>{
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
                            อัลบั้มเพลง วง "TRINITY"
                        </p>
                    </div> 
                    <div className="py-10 px-16 ">
                        <div className="flex container items-start justify-start space-x-10">
                            <Link href="https://youtu.be/Cgt74TruI2c?si=4No4bbm0vysPLBmG">
                                <div className="shadow-xl    rounded-lg  w-auto h-96 bg-gray-800 ">
                                    <Image
                                        src={trinity05}
                                        alt="trinity05"
                                        width="auto"
                                        height="315"
                                        className="rounded-t-lg shadow-xl"
                                    />
                                    <div className="px-5">
                                        <div className=" w-full border-b border-gray-500">
                                            <div className="font-thin text-white font-kanit pt-3 text-lg">
                                                <p>The 1st Mini Album "The Elements"</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link href="https://youtu.be/WvmkmycnqFU?si=3QVlFDlK4FU1VYaf">
                                <div className="shadow-xl    rounded-lg  w-auto h-96 bg-gray-800 ">
                                    <Image
                                        src={trinity07}
                                        alt="trinity07"
                                        width="auto"
                                        height="315"
                                        className="rounded-t-lg shadow-xl"
                                    />
                                    <div className="px-5">
                                        <div className=" w-full border-b border-gray-500">
                                            <div className="font-thin text-white font-kanit pt-3 text-lg">
                                                <p>
                                                    TRINITY 1ST FULL ALBUM   
                                                </p>
                                                <p className="text-sm">
                                                    EP.01 BREATH
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link href="https://www.youtube.com/watch?v=LXWOkTodBZI&list=OLAK5uy_lr_bHoCnaQhQkRnfPkOWcrKquagsnlrnw">
                                <div className="shadow-xl    rounded-lg  w-auto h-96 bg-gray-800 ">
                                    <Image
                                        src={trinity06}
                                        alt="trinity06"
                                        width="auto"
                                        height="315"
                                        className="rounded-t-lg shadow-xl"
                                    />
                                    <div className="px-5">
                                        <div className=" w-full border-b border-gray-500">
                                            <div className="font-thin text-white font-kanit pt-3 text-lg">
                                                <p>
                                                    TRINITY 1ST FULL ALBUM   
                                                </p>
                                                <p className="text-sm">
                                                    EP.02 DESIRE
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Album