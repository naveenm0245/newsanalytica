import React from 'react'
import { mainscategories, prelimscategories } from '../constant'
import Navlink from './Navlink'
// import {usePathname} from 'next/navigation'

function Navlinks() {
    // const pathname = usePathname();

  return (
    <nav
    className='grid grid-cols-4 md:grid-cols-11 text-xs md:text-sm gap-4 pb-10 max-w-6xl mx-auto border-t border-b'>
       {prelimscategories.map((subject)=> (
        <Navlink key={subject} subject={subject} highsub={'prelims'}/>
       ))}
       {mainscategories.map((subject)=> (
        <Navlink key={subject} subject={subject} highsub={'mains'}/>
       ))}
    </nav>
  )
}

export default Navlinks
