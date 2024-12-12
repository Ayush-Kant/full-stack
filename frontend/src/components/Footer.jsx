import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            <p>"Discover the Art and Legacy of Stamp Collecting"</p>
            
         <p> At Philatelix, we bring you authentic stamps from around the globe, curated for collectors of all levels. From rare finds to timeless classics, every piece tells a story.</p>
        <p>"Shop with Confidence, Collect with Passion."</p>
          </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>PHILATELIX</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91-932-456-7890</li>
                <li>contact@philatelix.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ Philatelix.com - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
