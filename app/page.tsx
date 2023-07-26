"use client"

import Image from 'next/image'
import hero from '@/public/images/drawers.jpg'
import avatar from '@/public/images/avatar-michelle.jpg'

import { useState } from 'react'

export default function Home() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <main className='bg-light_grayish_blue h-full min-h-screen
    grid place-content-center text-[0.875rem] p-[1rem] font-normal
    overflow-x-hidden'>
      <article className='bg-white rounded-lg
        grid desktop:grid-cols-2 max-w-[780px] relative'>
        <Image className='desktop:h-full w-auto rounded-t-lg 
          desktop:rounded-l-lg desktop:rounded-t-none'
          src={hero} alt="Image of a drawer with decorations on top"/>
        <section className='grid p-9 pb-5 gap-4'>
          <h1 className='font-heavy text-lg text-very_dark_grayish_blue'>
            Shift the overall look and feel by adding these wonderful touches to 
            furniture in your home
          </h1>
          <p className='text-desaturated_dark_blue mb-2'>
            Ever been in a room and felt like something was missing? Perhaps it felt
            slightly bare and uninviting. I&quot;ve got some simple tips to help you make any
            room feel complete.
          </p>
          <div className='flex justify-between items-center relative'>
            <div className='flex gap-4'>
              <div className='overflow-hidden rounded-full'>
                <Image src={avatar} alt="Image of Michelle Appleton" width={40}/>
              </div>
              <div>
                <p className='font-heavy text-very_dark_grayish_blue'>
                  Michelle Appleton
                </p>
                <p className='text-desaturated_dark_blue'>
                  28 Jun 2020
                </p>
              </div>
            </div>
            <button className={`bg-light_grayish_blue rounded-full w-[30px] h-[30px] 
              bg-share_icon bg-no-repeat bg-center z-10`} onClick={() => setShowTooltip(!showTooltip)}>
            </button>
          </div>
        </section>
        <div className={`flex absolute items-center left-0 bottom-0 
              bg-very_dark_grayish_blue w-full px-9 py-7
              gap-6 ${showTooltip ? '' : 'hidden'} desktop:w-auto rounded-b-lg
              desktop:rounded-lg desktop:py-3 desktop:px-3
              desktop:left-full desktop:-translate-x-[80%] desktop:-translate-y-16
              desktop:gap-3`}>
              <h2 className='text-white tracking-[0.275rem]'>
                SHARE
              </h2>
              <div className='flex items-center gap-4 desktop:gap-2'>
                <button className={`w-[20px] h-[20px] desktop:w-[15px] desktop:h-[15px]
                bg-fb_icon bg-no-repeat bg-center bg-cover`}></button>
                <button className={`w-[20px] h-[20px] desktop:w-[15px] desktop:h-[15px]
                bg-twitter_icon bg-no-repeat bg-center bg-cover`}></button>
                <button className={`w-[20px] h-[20px] desktop:w-[15px] desktop:h-[15px]
                bg-pinterest_icon bg-no-repeat bg-center bg-cover`}></button>
              </div>
            </div>
      </article>
    </main>
  )
}
