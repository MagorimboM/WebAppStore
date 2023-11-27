import Link from 'next/link'
import React from 'react'




export default function Home() {



   return (<div className='flex h-screen w-screen'>


      <div className='absolute backdrop-blur-sm justify-center flex rounded-xl h-1/4 w-1/4 border-amber-400 border-2 z-[0] bottom-20 left-20'>       
         <h1 className=' flex absolute text-shrink text-white font-sans font-bold text-2xl sm:text-xl md:text-4xl top-10'>New Arrivals</h1>
         <Link href='/store' className='absolute bottom-10'><button className='btn bg-lime-500 hover:bg-lime-300 border-lime-500 hover:shadow-xl hover:shadow-lime-300/50 hover:border-lime-300 text-white font-bold py-2 px-4 rounded-lg text-white'>Shop Now</button></Link> 
      </div>

   </div>)
}
