'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function SearchBox() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSearch = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!input) return; 
     
    router.push(`/search?term=${input}`);


  }


  return (
    <form className='max-w-6xl mx-auto flex justify-between items-center px-5 '
    onSubmit={handleSearch}>
      <input type='text' 
      placeholder='Search Articles...' 
      value={input}
      onChange={(text)=> setInput(text.target.value)}
      className='flex-1  w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none bg-transparent dark:text-red-500 '/>
      <button 
      type='submit'
      disabled={!input}
      className='text-red-600 font-bold disabled:text-gray-400 '
      >Search</button>
    </form>
  )
}

export default SearchBox