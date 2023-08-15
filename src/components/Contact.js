import React from 'react'

export const Contact = () => {
  return (
    <div>
            <div className="flex flex-col justify-center items-center text-white pb-10">
                <div className="text-[40px] font-bold">Contact Me</div>
                <div className="text-lg">Get in touch</div>
            </div>
            <div className='flex w-[900px] justify-center text-black gap-10'>
                <div className='text-white w-[300px] h-[550px]'>
                    <div className='text-2xl font-semibold'>Call Me</div>
                    <ul>
                        <li>+91 95995 08607</li>
                    </ul>
                    <div className='text-2xl font-semibold mt-6'>Email</div>
                    <ul>
                        <li>bishtnitin003@gmail.com</li>
                    </ul>
                    <div className='text-2xl font-semibold mt-6'>Location</div>
                    <ul>INDIA, New Delhi</ul>
                </div>
                <div className="w-[500px] h-[550px]">
                    <form>
                        <div className='flex'>
                            <input placeholder='Name' className='m-4 p-4 w-[215px]'></input>
                            <input placeholder='Email' className='m-4 p-4 w-[215px]'></input>
                        </div>
                        <div>
                            <input placeholder='Project' className='m-4 p-4 w-[465px]'></input>
                        </div>
                        <div>
                            <textarea placeholder='Message' className='m-4 p-4 w-[465px] h-[250px]'></textarea>
                        </div>
                        <div className="bg-blue-700 rounded-lg w-[160px] m-4 p-4 text-[20px] font-normal hover:cursor-pointer">
                        Send Message
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )

  }