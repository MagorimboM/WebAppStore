
import React from "react"
import dynamic from "next/dynamic"

const ClientComponent = dynamic(() => import('../components/Shelf'), { ssr: false })

const store = async () => {

    return (

        <div id='products_div' className='flex h-screen w-screen items-center justify-center backdrop-blur-lg'>

            <ClientComponent/>

        </div >
    )
}

export default store