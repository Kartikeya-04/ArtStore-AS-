import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import './Paint.css';
import Slider from 'react-slick';
import leo1 from './leo1.jpg';
import leo2 from './leo2.png';
import leo3 from './leo3.png';
import leo4 from './leo4.png';
import leo5 from './leo51.png';
import raza1 from './raza1.png';
import raza2 from './raza2.png';
import raza3 from './raza3.png';
import raza4 from './raza4.png';
import raza5 from './raza5.png';
import { useInView } from 'react-intersection-observer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Painting() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const settings2 = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const firstScroll = useRef(null);
  const secondScroll = useRef(null);

  const { inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const scrolled = (scrollRef) => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="alls h-auto w-screen">
      <div className="Title flex justify-center items-center font-bold text-green-900">
        <h1>
          <strong>Paintings of few Famous Artists</strong>
        </h1>
      </div>
      <div className="contain grid grid-cols-2 grid-rows-1 gap-7 m-2 w-screen">
        <div
          className="art1 rounded-lg bg-slate-400 text-white p-7 cursor-pointer"
          onClick={() => scrolled(firstScroll)}
        >
          <strong>LEONARDO DI VINCI</strong>
        </div>
        <div
          className="art2 rounded-lg bg-slate-400 text-white p-7 mr-6 cursor-pointer"
          onClick={() => scrolled(secondScroll)}
        >
          <strong>S. H RAZA</strong>
        </div>
      </div>
      <div className="Paintings">
        <div className="firstpaint mt-7 mb-6" ref={firstScroll}>
          <Slider {...settings}>
            <div>
              <img
                className={`${inView} ? scale : ''`}
                src={leo4}
                height="200px"
                width="300px"
              />
            </div>
            <div>
              <img
                className={`${inView} ? scale : ''`}
                src={leo1}
                height="200px"
                width="300px"
                alt="first1"
              />
            </div>
            <div>
              <img
                className={`${inView} ? scale : ''`}
                src={leo2}
                height="500px"
                width="300px"
                alt="sec1"
              />
            </div>
            <div>
              <img
                className={`${inView} ? scale : ''`}
                src={leo3}
                height="700px"
                width="300px"
                alt="third1"
              />
            </div>
            <div className="fivepaint">
              <img
                className={`${inView} ? scale : ''`}
                src={leo5}
                height="1400px"
                width="325px"
                alt="four1"
              />
            </div>
          </Slider>
        </div>
        <div className="secondpainting mb-[-4] mt-2" ref={secondScroll}>
          <Slider {...settings2}>
            <div>
              <img
                className={`${inView} ? scale : ''`}
                src={raza1}
                height="1000px"
                width="300px"
              />
            </div>
            <div>
              <img
                className={`${inView} ? scale : ''`}
                src={raza2}
                height="200px"
                width="300px"
                alt="first1"
              />
            </div>
            <div>
              <img
                className={`${inView} ? scale : ''`}
                src={raza3}
                height="500px"
                width="300px"
                alt="sec1"
              />
            </div>
            <div>
              <img
                className={`${inView} ? scale : ''`}
                src={raza4}
                height="700px"
                width="300px"
                alt="third1"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
// }
export default Painting;
