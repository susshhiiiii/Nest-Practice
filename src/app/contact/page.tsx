import React from "react";
import Image from 'next/image';
import contactImg from '../../../public/contact.png'

async function ContactPage() {
  return (
    <div>
      <h1 className='text-center my-10 text-4xl font-bold'>Let's Keep in Touch</h1>
      <div className="flex flex-col md:flex-row gap-20">
        <div className="md:basis-1/2 relative">        
        <Image className="fill " src={contactImg} alt={"Contact Image"}></Image>
        </div>
        <div className="md:basis-1/2">
        <form action="" className="flex flex-col h-full">
          <input type="text" className='border-2 mb-3 p-2' placeholder="name" />
          <input type="text" name="" className="border-2 mb-3 p-2" placeholder="email" id="" />
          <textarea name="" placeholder="message"  className='border-2 my-auto flex-1 p-2' id=""></textarea>
          <button className="bg-green-600 mt-4 p-2 text-white w-24 rounded shrink">Send</button>
        </form>
        </div>
      </div>
    </div>
  )
  
}

export default ContactPage;
