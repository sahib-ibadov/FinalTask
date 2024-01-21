import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';

const Header = () => {
  return (
    <>
    <div className='header'>
        <ul className='ul'>
            <img src="https://preview.colorlib.com/theme/course/images/logo.png.webp " alt="    " />
            <li>
                <Link style={{textDecoration:"none", color:"black"}} to="">Home</Link>
            </li>
            <li>
                <Link style={{textDecoration:"none", color:"black"}} to="Wishlist">Wishlist</Link>
            </li>
            <li>
                <Link style={{textDecoration:"none", color:"black"}} to="Basket">Basket</Link>
            </li>
            <li>
                <Link style={{textDecoration:"none", color:"black"}} to="Add">Add</Link>
            </li>
        </ul>
    </div>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src="https://c4.wallpaperflare.com/wallpaper/902/620/958/3d-abstract-3d-wallpaper-preview.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://wallpapers.com/images/featured/black-3d-bqeujlzpj3p2e505.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
    
  )
}

export default Header