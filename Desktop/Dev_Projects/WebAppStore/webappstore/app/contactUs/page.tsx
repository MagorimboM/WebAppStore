import React from 'react'
import dynamic from 'next/dynamic'

const ContactUsComponent = dynamic(() => import('../components/ContactUsForm'), { ssr: false })

const contactUs = () => {

    const contactus = 'Got a technical issue? Want to send feedback about a beta feature? Need details about my web app? Let me know.'

   


    return (
        <div className="backdrop-blur flex h-screen w-screen items-center justify-center">
            <div className=" py-8 lg:py-16 px-4 sm:h-2/3 sm:w-screen h-screen w-screen border-2 border-amber-400 rounded-xl mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 text-white">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">{contactus}</p>
                <ContactUsComponent/>
            </div>
        </div>
    )
}

export default contactUs