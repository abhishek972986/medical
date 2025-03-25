import React from 'react';
import Navbar from './Navbar';
import emer1 from './images/_ (1).jpeg';

const Emergency = () => {
  return (
    <div className='w-full h-screen bg-white p-6 flex flex-col'>
      <Navbar />
      
      <div className='mt-10 w-full flex gap-6 h-[90%]'>
        <div className=' overflow-hidden w-full h-full  rounded-lg shadow-lg'>
          <img src={emer1} className='object-cover  w-full ' alt='Emergency Care' />
        </div>
        
        <div className=' flex flex-col w-full p-6 justify-center bg-gray-100 rounded-lg shadow-lg'>
          <div className='text-3xl text-center font-bold mb-4'>
            Extra <span className='home-head text-purple-600 text-5xl'>CARE</span><br />
            <span className='home-head text-purple-600 text-5xl'>EXTRA</span> charges
          </div>
          <p className='text-gray-700 text-lg text-center'>
            In times of emergency, every second counts. We provide immediate and 
            professional medical attention with state-of-the-art facilities and trained 
            professionals to ensure you receive the best care possible.
          </p>
          <ul className='mt-4 text-gray-700 text-lg list-disc pl-6'>
            <li>24/7 Emergency Response Team</li>
            <li>Advanced Life Support Systems</li>
            <li>Immediate Trauma & Critical Care</li>
            <li>Dedicated ICU & Operation Theaters</li>
            <li>Emergency Ambulance Services</li>
          </ul>
          <div className='flex justify-center mt-6'>
            <button className='bg-purple-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-all'>
              Get Emergency Help
            </button>
          </div>
          <div className='text-center text-gray-600 mt-4'>
            <p>For immediate assistance, call our emergency hotline: <span className='font-bold text-purple-600'>+123 456 7890</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
