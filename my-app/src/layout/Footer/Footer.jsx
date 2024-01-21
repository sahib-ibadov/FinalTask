import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <h2>Subscribe to newsletter</h2>
        <div style={{marginTop:"30px"}}>
            <input className='inp' type="text"  placeholder='Email'/>
            <button style={{width:"100px", backgroundColor:"orange", color:"black",height:"40px"}}>Subscribe</button>
        </div>
        <div style={{border:'1px solid gray',height:"1px"}}></div>
        <div style={{marginTop:"30px"}} className='footer__div1'>
            <div className='footer__div1__first'>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <img src="https://preview.colorlib.com/theme/course/images/logo.png.webp " alt="" />
                <h2>COURSE</h2>
                </div>
                <p>In aliquam, augue a gravida rutrum,</p>
                <p>ante nisl fermentum nulla, vitae</p>
                <p>tempor nisl ligula vel nunc. Proin quis</p>
                <p>mi malesuada, finibus tortor</p>
                <p>fermentum, tempor lacus.</p>
            </div>
            <div className='footer__div1__second'>
                <h4>Menu</h4>
                <p>Home</p>
                <p>About Us</p>
                <p>Courses</p>
                <p>News</p>
                <p>Contacts</p>
            </div>
            <div className='footer__div1__second'>
                <h4>Menu</h4>
                <p>Home</p>
                <p>About Us</p>
                <p>Courses</p>
                <p>News</p>
                <p>Contacts</p>
            </div>
            <div className='footer__div1__second'>
                <h4>Menu</h4>
                <p>Home</p>
                <p>About Us</p>
                <p>Courses</p>
                <p>News</p>
                <p>Contacts</p>
            </div>
            <div className='footer__div1__second'>
                <h4>Menu</h4>
                <p>Home</p>
                <p>About Us</p>
                <p>Courses</p>
                <p>News</p>
                <p>Contacts</p>
            </div>

            
        </div>
        <p style={{color:"white",marginTop:"30px"}}>Copyright ©2024 All rights reserved | This template is made with <i class="fa-solid fa-heart"></i>  by Colorlib</p>
    </div>
  )
}

export default Footer