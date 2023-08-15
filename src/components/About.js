import React from "react";
import { BiDownload } from "react-icons/bi";

function About(){
    return(
        <div>
            <div className="flex flex-col justify-center items-center text-white pb-10">
                <div className="text-[40px] font-bold">About Me</div>
                <div className="text-lg">My Introduction</div>
            </div>
            <div className='flex w-[900px] text-white justify-center gap-20'>
                <div>
                    <img src="https://source.unsplash.com/random/300x370?super&geek" alt="placeholder" width="300" height="370" className="rounded-lg"/>
                </div>
                <div className="flex flex-col flex-wrap gap-12">
                    <div className="w-[300px]">
                        " I am working as a Cloud Support Engineer in Techme24x7 Consultency. I have developed my skills in Cloud AWS, Linux and SQL Database. I am learning MERN Stack + Devops Tools. "
                    </div>
                    <div className="flex gap-8 text-center">
                        <div>01+ <br/> Years <br/> Experience </div>
                        <div>03+ <br/> Completed <br/> project </div>
                        <div>05+ <br/> Client <br/> Worked </div>
                    </div>
                    <div className="bg-blue-700 rounded-lg w-[170px] p-4 text-[16px] font-normal hover:cursor-pointer inline-flex items-center gap-2">
                        Download CV <BiDownload className="text-2xl" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;