import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>At Philatelix, we’re passionate about connecting collectors with the beauty, history, and artistry of stamps.
                <p> Our journey began with a simple vision: to create a platform where stamp enthusiasts of all levels can discover and acquire stamps that tell stories from around the world.</p>

<p>Since our inception, we’ve dedicated ourselves to curating a diverse collection of authentic stamps—spanning rare finds, limited editions, and timeless classics.</p>
<p>Whether you’re starting your first collection or seeking to expand an existing one, our carefully sourced selection has something for everyone.</p>

</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>At Philatelix, our mission is to celebrate the timeless art of stamp collecting by offering a trusted platform that inspires collectors. We strive to provide a seamless experience that combines quality, authenticity, and a love for discovery</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Curated Selection:</b>
            <p className=' text-gray-600'>Our team works tirelessly to source a wide variety of stamps, from rare gems to everyday classics, catering to all collectors.

</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className=' text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className=' text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
