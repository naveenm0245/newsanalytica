import React from 'react'
import { collection, doc, setDoc, getDoc, query, getFirestore, getDocs, orderBy, limit, QueryDocumentSnapshot, DocumentData } from "firebase/firestore"; 
import db from '../Firebase/Firebase'

function page() {
    const time = new Date();
  return (
    <div>
      <h1 className='flex-1 bg-red'>Naveen Meena</h1>
      <h2 className='text-red-400'>Time is {time.toString()}</h2>
      <h2 className='text-slate-600'>Naveen Meena</h2>
      <h3 className='text-green-800 text-4xl'> How are you visiter ??</h3>
    </div>
  )
}

export default page
