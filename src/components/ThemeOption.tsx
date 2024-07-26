'use client'
import React from 'react'
import coastal from "@/assets/coastal.png";
import modern from "@/assets/modern.png";
import professional from "@/assets/professional.png";
import tribal from "@/assets/tribal.png";
import tropical from "@/assets/tropical.png";
import vintage from "@/assets/vintage.png";
import Image from 'next/image';

function ThemeOption() {

    const themes = [
        { value: "coastal", imgUrl: coastal },
        { value: "modern", imgUrl: modern },
        { value: "professional", imgUrl: professional },
        { value: "tribal", imgUrl: tribal },
        { value: "tropical", imgUrl: tropical },
        { value: "vintage", imgUrl: vintage },
    ]


  return (
    <div className='grid grid-cols-3 gap-5'>
          {
              themes.map((theme, index) => {
                  return (
                      <div onClick={handleClick} key={index} className='cursor-pointer transition-all flex flex-col items-center gap-2 group'>
                          <Image src={theme.imgUrl} alt='theme'  className='rounded-lg group-hover:opacity-80'/>
                          <p className='font-semibold text-white'>{theme.value}</p>
                      </div>
                  )
          })
          }
    </div>
  )
}

export default ThemeOption