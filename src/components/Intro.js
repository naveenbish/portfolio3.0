import React from "react";
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaArrowDown } from "react-icons/fa6";
import { BiMouse } from "react-icons/bi";
import { PiArrowFatLinesRightBold } from "react-icons/pi";

function Intro() {
    return(
        <div className='flex w-[900px] text-white justify-between'>
            <div className="flex flex-col gap-6 justify-center text-xl">
                <div className="hover:cursor-pointer"><FontAwesomeIcon icon={faLinkedin} /></div>
                <div className="hover:cursor-pointer"><FontAwesomeIcon icon={faInstagram} /></div>
                <div className="hover:cursor-pointer"><FontAwesomeIcon icon={faGithub} /></div>
            </div>
            <div className="flex flex-col w-[300px] flex-wrap gap-6 justify-center text-2xl">
                <div className="text-[40px] leading-normal font-bold">Hola, I am Naveen Bisht.</div>
                <div className="text-[24px] font-medium">FullStack Web-Developer...</div>
                <div className="text-[18px]">" One Year ++ of Experience in Devops, Learning MERN Stack & Tech Geek.... "</div>
                <div className="rounded-lg bg-blue-800 w-[150px] p-3 text-[18px] font-normal hover:cursor-pointer inline-flex items-center gap-2">Contact Me <PiArrowFatLinesRightBold className="text-2xl"/></div>
                <div className="flex items-center gap-2 mt-10">
                    <div><BiMouse/></div>
                    <div className="text-[15px] font-medium">Scroll down </div>
                    <div className="text-[15px]"><FaArrowDown/></div>
                </div>
            </div>
            <div>
                <img src="https://source.unsplash.com/random/400x400?geek&hacker" alt="Img here" width="400" height="400" style={{borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'}}/>
            </div>
        </div>
    );
}

export default Intro;