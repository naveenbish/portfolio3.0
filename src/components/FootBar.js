import { faDiscord, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function FootBar() {
    return(
        <div>
            <div className="flex w-[900px] text-white justify-between">
                <div className="flex flex-col flex-wrap">
                    <div className="text-3xl font-bold leading-10">ErrorOp</div>
                    <div>FullStack Web Developer [ MERN STACK ] </div>
                </div>
                <div className="flex gap-6">
                    <div className="text-2xl hover:cursor-pointer hover:text-green-600 transition duration-500 ease-in-out"><a href="https://github.com/naveenbish" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a></div>
                    <div className="text-2xl hover:cursor-pointer hover:text-blue-700 transition duration-500 ease-in-out"><a href="https://www.linkedin.com/in/naveen-bisht-775410221" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></div>
                    <div className="text-2xl hover:cursor-pointer hover:text-pink-600 transition duration-500 ease-in-out"><a href="https://instagram.com/errorop003?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram}/></a></div>
                    <div className="text-2xl hover:cursor-pointer hover:text-purple-800 transition duration-500 ease-in-out"><a href="https://discordapp.com/users/597355853674184726" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDiscord}/></a></div>
                </div>
            </div>
            <div className="flex justify-center items-center pt-10 opacity-50">© ErrorOp. All right reserved</div>
        </div>
    );
}

export default FootBar;