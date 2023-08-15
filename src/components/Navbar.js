import React from 'react';

function NavBar() {
    return(
        <div className='bg-sky-950 h-20 flex justify-center fixed w-full z-10 top-0 ring-2'>
            <div className='flex w-[900px] justify-between text-white items-center'>
                <div className='font-bold hover:cursor-pointer'>Naveen Bisht</div>
                <div className='flex gap-8 font-semibold'>
                    <div className='hover:cursor-pointer'>Home</div>
                    <div className='hover:cursor-pointer'>About</div>
                    <div className='hover:cursor-pointer'>Skills</div>
                    <div className='hover:cursor-pointer'>Contact me</div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;