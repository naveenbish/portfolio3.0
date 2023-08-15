import React from 'react'

export const Qualification = () => {
  return (
    <div className='text-white'>
            <div className="flex flex-col justify-center items-center">
                <div className="text-[40px] font-bold">Qualification</div>
                <div className="text-lg">My personal Journey</div>
            </div>
            <div className='grid grid-rows-1 grid-cols-2 place-content-center'>
            <div className='p-14 text-center'>
                <div className='text-2xl font-semibold mb-5'>Education</div>
                <div>
                    <ul className='list-none font-semibold flex flex-col gap-5'>
                        <li>BCA - IGNOU</li>
                        <li>NIIT - Cannought Place</li>
                        <li>MERN - www.thecodehelp.com</li>
                        <li>DSA C++ - www.thecodehelp.com</li>
                    </ul>
                </div>
            </div>
            <div className='p-14 text-center'>
                <div className='text-2xl font-semibold mb-5'>Work</div>
                <div>
                    <ul className='list-none font-semibold flex flex-col gap-5'>
                        <li>Techme24x7 - AWS Cloud + Devops</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
  )
}
