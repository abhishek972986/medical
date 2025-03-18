import React from 'react'
import Navbar from './Navbar'
import { FaArrowRightLong } from "react-icons/fa6";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import homepage from './images/homepage.jpg'
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import Sky from './images/_.jpeg'
import doc from './images/dr.jpeg'
import nurse from './images/nurse.jpeg'
const Home = () => {
  return (
    <div className=' w-full h-screen bg-white p-6 '>
        <Navbar/>
      <div className=' grid grid-cols-2 w-full  gap-2 mt-5 h-[90%]'>
      <div
  className=" rounded-2xl w-full h-full flex flex-col justify-center items-center gap-8 bg-cover bg-center bg-no-repeat inset-shadow-blue-300"
  style={{ backgroundImage: `url(${Sky})`  ,opacity:0.9}}
>
        <div className='text-8xl mt-11 home-head flex flex-col gap-5 font-bold'>
<div className='home-head'>Empowering </div>
<div className='home-head'>Welness with</div>
<div className='home-head'>Advance Care</div>
</div>


<div className=''>Connect with top specialists , explore personalized care , and experience a <br/> healthier life -- all with few clicks </div>
<div className='flex items-center gap-5  '><button className='text-xl text-bold p-2 border-2 rounded-4xl px-4'>Explore Services</button>   <button className="group font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xl py-2 px-3 rounded-4xl flex gap-4 justify-between items-center transition-all duration-300">
      Sign Up
      <span className="flex justify-center items-center bg-white p-2 rounded-full rotate-[-30deg] transition-all duration-300 group-hover:rotate-0">
        <FaArrowRightLong className="text-xl font-extrabold text-black" />
      </span>
    </button></div>
<div>
<AvatarGroup total={24}>
<Avatar alt="Remy Sharp" src={doc} className="hover:scale-[1.05] transition-transform" />
      <Avatar alt="Travis Howard" src={nurse} className="hover:scale-[1.1] transition-transform" />
      <Avatar alt="Agnes Walker" src={doc} className="hover:scale-[1.1] transition-transform" />
      <Avatar alt="Trevor Henderson" src={nurse} className="hover:scale-[1.1] transition-transform" />
    </AvatarGroup>
    <span className='flex flex-row-reverse items-center justify-center gap-4 rotate-1 mt-2 '><FaArrowRightLong className='text-xl font-extrabold rotate-3  text-black hover:translate-x-2 transition-all ease-in'/>50+K patients trust us</span>
    
</div>
</div>
<div className="relative w-full h-full overflow-hidden rounded-2xl ">
  <img
    src={homepage}
    className="w-full h-full object-cover rounded-2xl"
    alt="Homepage"
  />

  <div className='absolute bottom-10 right-10 '>
  <Box sx={{ '& > :not(style)': { m: 1 } }}>
     
      <Fab color="secondary" aria-label="edit">
       <MarkChatUnreadIcon/>
      </Fab>
    
    </Box>
  </div>
  <div className='absolute top-[50%] left-[60%]'><button className="px-6 py-3 text-black font-bold border-2 border-white outline-none text-lg rounded-2xl backdrop-blur-md bg-white/20 hover:bg-white/30 transition-all ease-in ">
      Better care
    </button></div>

    <div className='absolute top-[20%] left-[30%]'><button className="px-6 py-3 text-black font-bold border-2 border-white outline-none text-lg rounded-2xl backdrop-blur-md bg-white/20 hover:bg-white/30 transition-all ease-in ">
   Your health our priority
    </button></div>


    <div className='absolute bottom-[20%] left-[20%]'><button className="px-6 py-3 text-black font-bold border-2 border-white outline-none text-lg rounded-2xl backdrop-blur-md bg-white/20 hover:bg-white/30 transition-all ease-in ">
   Better health
    </button></div>
  
</div>



      </div>
    
    </div>
  )
}

export default Home
