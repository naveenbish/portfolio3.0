import React from "react";
import Intro from "./Intro";
import About from "./About";
import Skills from "./Skills";
import { Qualification } from "./Qualification";
import { Contact } from "./Contact";


function BodyStuff() {
    return(
        <div>
            <div className="w-screen h-screen flex justify-center items-center my-10">
                <Intro></Intro>
            </div>
            <div className="flex justify-center items-center my-10">
                <About></About>
            </div>
            <div className="flex justify-center items-center my-10">
                <Skills></Skills>
            </div>
            <div className="flex justify-center items-center my-10">
                <Qualification></Qualification>
            </div>
            <div className="flex justify-center items-center pb-10">
                <Contact></Contact>
            </div>
        </div>
    );
}

export default BodyStuff;