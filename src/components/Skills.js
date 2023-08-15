import React from 'react'

const Skills = () => {
  return (
    <div className='text-white py-10'>
        <div className='mb-10'>
            <div className='text-4xl font-bold text-center'>Skills</div>
            <div className='text-center'>My Technical Level</div>
        </div>
        <div class="flex flex-col flex-wrap max-h-[800px] w-[700px]">
            <div class="m-5 max-h-[400px] w-[300px] rounded-md bg-gradient-to-r from-violet-700 via-blue-700 to-indigo-500 p-2">
                <div class="mb-3 p-3 text-center text-5xl font-bold">Cloud</div>
                    <div>
                        <ul class="flex flex-col flex-wrap gap-5">
                            <li class="text-2xl font-semibold">AWS</li>
                        </ul>
                    </div>
            </div>
            <div class="m-5 max-h-[400px] w-[300px] rounded-md bg-gradient-to-r from-violet-700 via-blue-700 to-indigo-500 p-2">
                <div class="mb-3 p-3 text-center text-5xl font-bold">Database</div>
                    <div>
                        <ul class="flex flex-col flex-wrap gap-5">
                            <li class="text-2xl font-semibold">Mysql</li>
                            <li class="text-2xl font-semibold">Mongo</li>
                        </ul>
                    </div>
            </div>
            <div class="m-5 max-h-[400px] w-[300px] rounded-md bg-gradient-to-r from-violet-700 via-blue-700 to-indigo-500 p-2">
                <div class="mb-3 p-3 text-center text-5xl font-bold">Web Tools</div>
                <div>
                    <ul class="flex flex-col flex-wrap gap-5">
                        <li class="text-2xl font-semibold">HTML</li>
                        <li class="text-2xl font-semibold">CSS</li>
                        <li class="text-2xl font-semibold">JS</li>
                    </ul>
                </div>
            </div>
            <div class="m-5 max-h-[400px] w-[300px] rounded-md bg-gradient-to-r from-violet-700 via-blue-700 to-indigo-500 p-2">
            <div class="mb-3 p-3 text-center text-5xl font-bold">MERN</div>
                <div>
                    <ul class="flex flex-col flex-wrap gap-5">
                      <li class="text-2xl font-semibold">MONGO</li>
                      <li class="text-2xl font-semibold">EXPRESS</li>
                      <li class="text-2xl font-semibold">REACT</li>
                      <li class="text-2xl font-semibold">NODE JS</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills;