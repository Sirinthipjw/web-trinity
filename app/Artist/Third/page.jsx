import Image from "next/image"
import third03 from "../../../public/images/third03.png"
import third04 from "../../../public/images/third04.png"
import third05 from "../../../public/images/third05.png"
const Third = () =>{
    return(
        <>
        <div className="flex  items-center justify-center mt-4">
          <div className=" font-staatliches">
            <p className="text-5xl text-center text-slate-100">Third</p>
            <p className="text-4xl text-center text-slate-100">Lapat Ngamchaweng</p>
          </div>
        </div>
        <div className="flex  pt-10 items-center justify-center ">
            <div className=" shadow-lg w-4/5 h-full bg-gray-900">
                <div className="flex  container items-start justify-start   ">
                    <Image
                        src={third03}
                        alt="third03"
                        width="auto"
                        height="700"
                    />
                    <div className="flex items-end justify-end font-kanit text-justify text-white text-xl max-h-screen">
                        <p className="px-16 pt-60">
                            Lapat Ngamchaweng (Thai: ลภัส งามเชวง, born 24 November 1998); 
                            popularly known by the nickname Third (Thai: เติร์ด) is a Thai singer, actor, brand endorser and model.
                            He was a former artist under Kamikaze and a former member of Nine by Nine.
                            He is currently a member of the Thai boy group TRINITY.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center ">
            <div className="shadow-lg w-4/5 h-full bg-gray-900 max-h-screen">
                <div className="flex flex-row items-start justify-start font-kanit text-white">
                    <p className=" pt-56 px-16 text-2xl break-words">Early life and education
                        <p className=" pt-10 text-xl text-justify">
                            Lapat was born on 24 November 1998 in Bangkok, Thailand. His mother is Ketsara Limpananon. He is the youngest of three siblings,
                            having two older sisters named Larisa Ngamchaweng (Lyly) and Larisara Ngamchaweng (Biba). 
                            He attended New Sathorn International School and graduated from the Faculty of Communication Arts at Chulalongkorn University in 2020.
                        </p> 
                    </p>
                    <Image
                        src={third04}
                        alt="third04"
                        width="auto"
                        height="600"
                        className="flex container items-end justify-end pt-16"
                    />  
                </div>
            </div>
        </div>  
        
        <div className="flex items-center justify-center ">
            <div className=" shadow-lg w-4/5 h-full bg-gray-900 ">
                <div className="flex  container items-start justify-start py-16">
                    <Image
                        src={third05}
                        alt="third05"
                        width="auto"
                        height="700"
                        className="pt-16"
                    />
                    <div className="flex items-end justify-end font-kanit text-justify text-white ">
                        <p  className="pt-14 px-16 text-2xl break-words"> Career
                            <p className="pt-5 text-xl break-words">
                                Lapat became interested in acting at an early age. He first appeared in a 2012 Thai remake of Romeo and Juliet, playing the child lead actor.
                                But he chose to pursue his singing career as he signed under the record label Kamikaze in 2013.
                            </p>  
                            <p className="pt-5 text-xl break-words">
                                He released his debut single "Reminder" as Third Kamikaze on 27 August 2014. The music video has earned 341 million views on YouTube as of October 2022, 
                                making it the most-watched video of the label on the platform to date, and the 29th most viewed YouTube video in Thailand.
                                Due to its success, it is deemed as a modern T-pop hit. He frequently collaborated with other Kamikaze artists for singles such as "Following" and "Hidden Love".
                            </p>

                            <p className="pt-5 text-xl break-words ">
                                Lapat signed under 4NOLOGUE in 2018 where he became a member of the group Nine by Nine. As part of the project, 
                                he starred in two TV series entitled In Family We Trust (2018), 
                                playing the role of "Tao" and in Great Men Academy (2019) as "Nuclear".
                            </p>
                            <p className="pt-5 text-xl break-words">
                                After the project, he debuted as one of the members of TRINITY in 2019 along with former Nine by Nine co-members Teeradon Supapunpinyo,
                                Sivakorn Adulsuttikul, and Jackrin Kungwankiatichai.
                                He also appeared in the ninth season of The Mask Singer Thailand as Firework Mask.
                            </p>  
                            <p className="pt-5 text-xl break-words">
                                On 15 December 2023, He published a statement in which he announced that he chose not to renew his expired contract with his agency 4NOLOGUE. 
                                Thus ending his long career with the agency. 
                                He also announced that he will continue to work as a TRINITY member under the consideration between the company and himself as an individual artist as deemed appropriate.
                            </p>  
                            
                        </p>
                    </div>
                </div>
            </div>
        </div>
        


        
        

        
        
        
        
        
        
        </>






    )



}
export default Third