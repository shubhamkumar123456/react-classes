import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const SiderComponent = (props) => {
    // console.log(props.arr)

     const settings = {
    className: "center",
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  return (
    <div className='w-[95%] mx-auto'>
    
      <Slider {...settings}>
        {
            props.arr.map((ele,i)=>{
                return <Link to={'/view'} state={ele} className='flex justify-center items-center'>
                    <img className='mx-auto' src={ele.thumbnail} alt="" />
                    <h2 className='text-center'><b >{ele.title}</b></h2>
                </Link>
            })
        }
      </Slider>
    </div>
  )
}

export default SiderComponent
