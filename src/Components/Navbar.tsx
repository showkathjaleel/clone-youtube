import React from 'react';
import {AiOutlineSearch,AiOutlineClose} from "react-icons/ai";
import {TiMicrophone} from "react-icons/ti";
import {BsYoutube,BsCameraVideo,BsBell} from "react-icons/bs";
import {IoAppsSharp} from "react-icons/io5";
import {GiHamburgerMenu} from "react-icons/gi"
import { Link } from 'react-router-dom';
function Navbar() {
  return(
   <div className='flex justify-between items-center px-14 bg-[#212121] opacity-95 sticky top-0 -z-50'>
       <div className='flex gap-8 items-center text-2-xl'></div>
   
    <div>
     <GiHamburgerMenu/>
    </div>

    <Link to="/">
      <div className="flex gap-1 items-center justify-center">
     < BsYoutube className='text-3xl text-red-600'/>     
     <span className='text-3xl font-medium'>Youtube</span>      
     </div>  
    </Link>
   <div className="flex items-center justify-center gap-5">
    <form action="">
      <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0">
        <div className="flex gap-4 items-center pr-5 ">
          <div>
          <AiOutlineSearch className='text-xl'/>
          </div>
          <input type="text" className='w-96 bg-zinc-900 focus:outline-none border-none' />
         < AiOutlineClose  className='text-xl cursor-pointer'/>
        </div>
<button className='h-10 w-16 flex items-center justify-center bg-zinc-800'>
<AiOutlineSearch className='text-xl'/>
</button>
      </div>
    </form>

    <div className="text-xl p-3 bg-zinc-900 rounded-full">
    <TiMicrophone/>
    </div>
   </div>

   <div className='flex gap-5 items-center text-xl'>
   <BsCameraVideo/>
   <IoAppsSharp/>
   <div className='relative'>
  < BsBell/>
  <span className='absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1'>

  </span>
   </div>
   <img
          src="https://yt3.ggpht.com/wgnEbc2Ec2JYkeyzUbiHzDlAFObI2Btwo2YRCEF1aCMBiRc5E_zWy8-URBQS3EMQ1yzzaGFR=s88-c-k-c0x00ffffff-no-rj-mo"
          className="w-9 h-9 rounded-full"
          alt="logo"
        />

   </div>

    </div>
  );
}

export default Navbar;