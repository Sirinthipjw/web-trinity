import Image from "next/image"
import jackie05 from "../../../public/images/jackie05.png"
import jackie03 from "../../../public/images/jackie03.png"
import jackie04 from "../../../public/images/jackie04.png"
const Jackie = () =>{
    return(
        <>
        <div className="flex  items-center justify-center mt-4">
          <div className=" font-staatliches">
            <p className="text-5xl text-center text-slate-100">Jackie</p>
            <p className="text-4xl text-center text-slate-100">Jackrin Kungwankiatichai</p>
          </div>
        </div>
        <div className="flex  pt-10 items-center justify-center ">
            <div className=" shadow-lg w-4/5 h-full bg-gray-900">
                <div className="flex  container items-start justify-start   ">
                    <Image
                        src={jackie05}
                        alt="jackie05"
                        width="auto"
                        height="700"
                    />
                    <div className="flex items-end justify-end font-kanit text-justify text-white text-xl max-h-screen">
                        <p className="px-16 pt-60">
                        Jackrin Kungwankiatichai (Thai: จักริน กังวานเกียรติชัย, born 29 March 2001); also known by his nickname Jackie, (Thai: แจ๊คกี้) is a Thai singer, actor, brand endorser and model.
                        He was a member of the Thai boy group Nine by Nine, and is currently a member of TRINITY. He is the grand champion of the Thai singing competition The Mask Thai Literature.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center ">
            <div className="shadow-lg w-4/5 h-full bg-gray-900 max-h-screen">
                <div className="flex flex-row items-start justify-start font-kanit text-white">
                    <p className=" pt-56 px-16 text-2xl break-words">Early life and education
                        <p className=" pt-5 text-xl text-justify">
                        Jackrin was born on 29 March 2001. His father is Kamol Kungwankiatichai, and he has a younger sister named Chawunluk Kungwankiatichai, who is currently a trainee under 4NOLOGUE.
                        He attended school at Bangkok Christian College and is currently studying Acting and Film Directing at the College of Social Communication Innovation, Srinakharinwirot University.
                        </p> 
                    </p>
                    <Image
                        src={jackie03}
                        alt="jackie03"
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
                        src={jackie04}
                        alt="jackie04"
                        width="auto"
                        height="700"
                        className="pt-16"
                    />
                    <div className="flex items-end justify-end font-kanit text-justify text-white ">
                        <p  className="pt-14 px-16 text-2xl break-words"> Career
                            <p className="pt-5 text-xl break-words">
                                Jackrin began his music career in 2015 with the band Yellow Mustard. One of the band members is then-future Nine by Nine co-member Paris Intarakomalyasut. 
                                In 2017, Paris referred Jackrin to 4nologue CEO Anuwat Wichiennarat to audition for the label.
                            </p>  
                            <p className="pt-5 text-xl break-words">
                                Jackrin signed with the label in 2018. From then to 2019, he became a member of the idol group Nine by Nine, a special one-year project by 4nologue in association with Nadao Bangkok. 
                                The group overall has released five songs and one mini-album, and embarked on a series of concert tours across Thailand.
                            </p>

                            <p className="pt-5 text-xl break-words ">
                                As part of the project, Jackrin starred in two television series. 
                                His acting debut came with the 2018 TV series In Family We Trust where he received positive feedback for his performance as Thanat Suriyapairoj (Toei) and earned him acting nominations. 
                                He also performed a main role in the 2019 TV series Great Men Academy as Menn.
                            </p>
                            <p className="pt-5 text-xl break-words">
                                After the project ended in March 2019, 4nologue announced that it has formed a new boy group among the members of Nine by Nine. Jackrin, along with Teeradon Supapunpinyo,
                                Sivakorn Adulsuttikul, and Lapat Ngamchaweng, debuted as TRINITY in September 2019. Jackrin is the main vocals of the group.
                            </p>  
                            <p className="pt-5 text-xl break-words">
                                Jackrin was then paired with Sivakorn to appear as a duo in the 2019 TV singing competition show The Mask Thai Literature as Holvichai-Kavee where they received overall positive acclaim from the judges and its viewers.
                                They were hailed as the season's champions by garnering the highest votes from the audience and viewers' text votes during the final round.
                                They became the youngest and first and only duo to win in the show.
                            </p>  
                            
                        </p>
                    </div>
                </div>
            </div>
        </div>
        


        
        

        
        
        
        
        
        
        </>






    )



}
export default Jackie