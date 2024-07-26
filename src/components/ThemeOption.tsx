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
    <div>ThemeOption</div>
  )
}

export default ThemeOption