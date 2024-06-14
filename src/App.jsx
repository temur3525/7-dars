import './App.css';
import img from "./assets/images/1.svg"
import img1 from "./assets/images/2.svg"
import img2 from "./assets/images/3.svg"
import img3 from "./assets/images/4.svg"
import img4 from "./assets/images/5.svg"
import img5 from "./assets/images/6.svg"
import img6 from "./assets/images/7.svg"
import img7 from "./assets/images/8.svg"
import img8 from "./assets/images/9.svg"
import img9 from "./assets/images/10.svg"
import img10 from "./assets/images/11.svg"
import img11 from "./assets/images/12.svg"
import img12 from "./assets/images/13.svg"
import img13 from "./assets/images/14.svg"
import img14 from "./assets/images/15.svg"
import img15 from "./assets/images/16.svg"
import img16 from "./assets/images/16.jpeg"
import img17 from "./assets/images/17.jpeg"
import img18 from "./assets/images/18.jpeg"



import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './App.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="container">

      <img src={img} alt="" className="img" />
      <div className="bn">
        <p className="j1">Home</p>
        <p className="j2">About</p>
        <p className="j3">Pricing</p>
        <p className="j4">Open positions</p>
        <p className="j5">Blog</p>
        <p className="j6">Template</p>
      </div>
      <button className="btn">Buy now</button>
      <div className="box">
        <p className='l'>Molecule is a SaaS marketing <br /> template that's</p>
        <p className="l1">easy to modify</p>
        <p className="l2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse <br /> varius enim in eros elementum tristique. Duis cursus, mi quis viverra <br /> ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>

        <img src={img2} alt="" className="img2" />
        <img src={img3} alt="" className="img3" />
        <img src={img1} alt="" className="img1" />
        <form>
          <input type="email" placeholder='Enter your email' required maxLength={50} minLength={5} className='input' />
          <button className="btn1">Sing Up</button>
        </form>

      </div>

      <div className="box1">
        <p className="hg">Used by the leading SaaS companies of tomorrow.</p>
        <img src={img4} alt="" className="img4" />
        <img src={img5} alt="" className="img5" />
        <img src={img6} alt="" className="img6" />
        <img src={img7} alt="" className="img7" />
        <img src={img8} alt="" className="img8" />
        <img src={img9} alt="" className="img9" />


      </div>
      <img src={img10} alt="" className="img10" />
      <img src={img11} alt="" className='imgg11' />
      <p className="ja">See how easy it is to edit Molecule to <br /> your liking.</p>
      <p className="ja1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim <br /> in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor <br /> interdum nulla, ut commodo diam libero vitae erat.</p>
      <p className="ja2">Pages you'll use <br /> <br />
        Molecule doesn't come with 200+ <br /> page layout — it comes with the <br /> pages yo'll actually use.</p>
      <p className="ja3">Native image effects <br /> <br />
        Instead of having to add effects to <br /> images in an image editor, simply <br /> replace the existing images and all <br /> effects will appear.</p>
      <p className="ja4">Global typograph <br /> <br />
        Change the body font once and every <br /> single line of text on the page will <br /> change.</p>
      <p className="ja5">Global colors <br /> <br />
        Change the global color swatches <br /> and see your colors change <br /> everywhere.</p>

      <div className="po">
        <p className="kj">Teams all over the place have already <br /> used Molecule to get</p>
        <p className="kj2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse <br /> varius enim in eros elementum tristique. Duis cursus, mi quis viverra <br /> ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>

        <p className="kj3">87% <br /> <br />
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
        <p className="kj4">99% <br /> <br />
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
      </div>

      <img src={img12} alt="" className='img12' />
      <img src={img13} alt="" className='img13' />
      <img src={img14} alt="" className='img14' />
      <p className="lk">Meet the talented team behind <br /> the molecule SaaS template.</p>
      <p className="lk1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse <br /> varius enim in eros elementum tristique. Duis cursus, mi quis viverra <br /> ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>

      <div className="bm">
      <img src={img15} alt="" className='img15' />
<p className="ha">Think you've seen enough?</p>
<p className="ha1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros <br /> elementum tristique.</p>
<button className="btn2">Read more</button>
<button className="btn3">Buy molecule</button>
      </div>

      <button className="btn4">Features</button>
      <button className="btn5">Stats</button>
      <button className="btn6">Team</button>
      <button className="btn7">Meet the team</button>
      <button className="btn8">Process</button>
      <p className="kz">What steps are required to build a SaaS <br /> marketing site using the molecule <br /> template?</p>
      <button className="btn9">Get molecule</button>
<p className="mv">Get molecule <br /><br />
Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Suspendisse varius enim in eros elementum tristique.</p>
<p className="mv1">Edit fonts, colors, images & text <br /><br />
Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Suspendisse varius enim in eros elementum tristique.</p>
<p className="mv2">Publish! <br /><br />
Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Suspendisse varius enim in eros elementum tristique.</p>




<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><img src={img16} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img17} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img18} alt="" /></SwiperSlide>
    
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
<div className="bx">
  <div className="bx1">
    <p className="kas">Don't miss out!</p>
    <p className="kas1">Sign-up & we'll let you know as soon as we have something to show off. <br /> (Don't worry, we don't spam).</p>
    <form>
      <input type="email" placeholder='Enter your email' required className='inpu' minLength={5} maxLength={50}/>
    </form>
    <p className="mzx">By clicking Sign Up you're confirming that you agree with our</p>
    <p className="mzx1">Terms and Conditions</p>
    <button className="btn10">Sign Up</button>
  </div>
</div>


    </div>
  );
}

export default App;
