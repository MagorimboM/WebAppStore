"use client"
import React from 'react'
import supabase from '../config/supabaseClient';
import Link from 'next/link'




const ContactUs = () => {

    const sendInfo = async (event: any) => {

        event.preventDefault();
        


        const formdata = new FormData(event.target);

        const email = formdata.get('email');
        const subject = formdata.get('subject');
        const message = formdata.get('message');

        const results = await supabase.from('contactUs').insert({
            email: email,
            subject: subject,
            message: message
        })

        const { data, error } = results

        if (error) {
            console.log('there is an error', error)
        }
        if (data) {
            console.log('there is no error at all! ', data)

            event.target.reset()
        }

    }




  return (
      <form onSubmit={sendInfo} className="space-y-8">
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" name='email' id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@emailprovider.com" required />
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" name='subject' id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know whats on your mind" required />
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Your message</label>
              <textarea id="message" name='message' className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <Link href='/msgSent'><button type="submit" className=" btn px-4 py-3 text-white transition-all transform border border-lime-500 rounded-3xl bg-lime-500 hover:bg-lime-300 hover:shadow-xl hover:shadow-lime-300/50 hover:border-lime-300">Send message</button></Link>
      </form>
  )
}

export default ContactUs