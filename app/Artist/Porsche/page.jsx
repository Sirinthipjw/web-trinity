import Image from "next/image"
import porsche01 from "../../../public/images/porsche01.png"
import porsche04 from "../../../public/images/porsche04.jpg"
import porsche06 from "../../../public/images/porsche06.jpg"
const Porsche = () =>{
    return(
        <>
        <div className="flex  items-center justify-center mt-4">
          <div className=" font-staatliches">
            <p className="text-5xl text-center text-slate-100">Porsche</p>
            <p className="text-4xl text-center text-slate-100">Sivakorn Adulsuttikul</p>
          </div>
        </div>
        <div className="flex  pt-10 items-center justify-center ">
            <div className=" shadow-lg w-4/5 h-full bg-gray-900">
                <div className="flex  container items-start justify-start   ">
                    <Image
                        src={porsche01}
                        alt="porsche01"
                        width="auto"
                        height="700"
                    />
                    <div className="flex items-end justify-end font-kanit text-justify text-white text-xl max-h-screen">
                        <p className="px-16 pt-60">
                            Sivakorn Adulsuttikul (Thai: ศิวกร อดุลสุทธิกุล, born 7 May 1998); also known by his nickname Porsche (Thai: ปอร์เช่),
                            is a Thai singer, actor and model. He was a former member of the trio VRP Kamikaze and Thai boy group Nine by Nine.
                            He is the grand champion of the Thai singing competition The Mask Thai Literature. 
                            He is currently a member of the trio TRINITY
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center ">
            <div className="shadow-lg w-4/5 h-full bg-gray-900">
                <div className="flex flex-row items-start justify-start font-kanit text-white">
                    <p className=" pt-56 px-16 text-2xl break-words">Early life and education
                        <p className=" pt-10 text-xl text-justify">
                            Sivakorn was born on 7 May 1998 in Chonburi Province, Thailand. His mother is Jirachutinunt Adulsuttikul and he has a younger brother named Nathanai Adulsuttikul. 
                            Sivakorn started dancing when he was around 7–8 years old when his mother enrolled him in a dance school.
                            His dance teacher then recommended him to audition for the record label Kamikaze. He finished high school on Ramkhamhaeng Advent International School, 
                            and graduated from the Thammasat University,
                            Faculty of Liberal Arts with the degree of Bachelor of Arts in International Studies ASEAN-CHINA (IAC) international programme.
                        </p> 
                    </p>
                    <Image
                        src={porsche04}
                        alt="porsche04"
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
                        src={porsche06}
                        alt="porsche06"
                        width="auto"
                        height="700"

                    />
                    <div className="flex items-end justify-end font-kanit text-justify text-white ">
                        <p  className="pt-14 px-16 text-2xl break-words"> Career
                            <p className="pt-5 text-xl break-words">
                                Sivakorn began his singing career in 2014 under Kamikaze with its boy group, V.R.P. Their debut single, "Shout" was released in 2014.
                                His first film role came from the horror film Ghost Coins (2014). 
                                He also appeared with other Kamikaze artists in the mini series 21 Days (2017). 
                                Sivakorn stayed with the label until its closure in 2017.
                            </p>  
                            <p className="pt-5 text-xl break-words">
                                He auditioned for the record label 4NOLOGUE in 2018 and debuted as a member of the Thai boy group Nine by Nine, 
                                a one-year special project by 4nologue and production company Nadao Bangkok. The group has released five singles from 2018 to 2019 and a mini-album entitled "En-Route".
                                He served as the lead rapper and dancer of the group.
                                As part of the project, he starred in the TV series In Family We Trust (2018) as Kuaitiao and Great Men Academy (2019) as Good.
                            </p>

                            <p className="pt-5 text-xl break-words ">
                                He appeared with Jackrin Kungwankiatichai as the Holvichai-Kavee duo in the 2019 TV singing competition show The Mask Thai Literature.
                                The duo were hailed as the season's champions when they received the highest number of votes from the audience and viewers' text votes during the championship round.
                                They became the youngest and first duo to win in the show.
                            </p>
                            <p className="pt-5 text-xl break-words">
                                In September 2019, Sivakorn debuted in another boy group formed by 4nologue namely as TRINITY where he continues to pursue his musical career.
                                At present, the group has released five singles, one featured single, and a mini-album. They also held three showcase stages across the country.
                            </p>  
                        </p>
                    </div>
                </div>
            </div>
        </div>
        


        
        

        
        
        
        
        
        
        </>






    )



}
export default Porsche