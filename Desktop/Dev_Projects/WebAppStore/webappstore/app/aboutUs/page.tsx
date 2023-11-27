import React from 'react'
import Image from 'next/image'
import people from '@/public/peopleInOffice.jpg'

const aboutUs = () => {
    return (<div>

        <section className="flex items-center backdrop-blur-lg xl:h-screen font-poppins ">
            <div className="rounded-xl border-4 border-amber-400 sm:h-2/3 sm:justify-center sm:items-center sm:flex-1 h-screen max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                <div className="flex flex-wrap ">
                    <div className="w-full border-white border-2 rounded-3xl mb-10 lg:w-1/2 lg:mb-0">
                        <Image src={people} alt=""
                            className="relative z-40 object-cover w-full h-96 rounded-3xl"/>
                    </div>
                    <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                        <h2 className="mb-4 text-4xl font-semibold text-white">
                            About Us
                        </h2>
                        <p className="mb-10 text-white leading-7">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                        </p>
                        <a href="/"
                            className=" btn px-4 py-3 text-white transition-all transform border border-lime-500 rounded-3xl bg-lime-500 hover:bg-lime-300 hover:shadow-xl hover:shadow-lime-300/50 hover:border-lime-300">
                            Back Home
                        </a>
                    </div>
                </div>
            </div>
        </section>

    </div>)
}

export default aboutUs