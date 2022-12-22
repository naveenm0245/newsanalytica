'use client'
import Link from 'next/link'
import React from 'react'

type Props = {
    subject : String;
    highsub : String; 
};

function Navlink({subject, highsub}: Props){
  return (
    <Link href={`/news/${highsub}/${subject}`}
    className=' hover:underline decoration-red-500 text-center decoration-2 active:underline underline-offset-8 rounded-full p-4 cursor-pointed hover:font-bold capitalize hover:scale-110 transition-transform duration-200 ease-out'
    >
    {subject}
    </Link>
  )
}

export default Navlink