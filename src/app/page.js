"use client";

import Image from 'next/image'
import { useState } from 'react'



export default function Home() {
const [count,setCount] = useState(10)
const [name,setName] = useState('Mahi')

  return (
    <div className=' p-10'>
    <h2>{count}</h2>
    <h2>{name}</h2>
    <button className=' px-2 text-white bg-black mr-2' onClick={()=>setCount(count+1)}>increment</button>
    <button className=' px-2 text-white bg-black mr-2' onClick={()=>setCount(count-1)}>decrement</button>
    <button className=' px-2 text-white bg-black mr-2' onClick={()=>setName(`${name} hasibul`)}>Click me</button>
    </div>
  )
}
