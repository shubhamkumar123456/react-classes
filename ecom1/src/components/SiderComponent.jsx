import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SiderComponent = (props) => {
    console.log(props.arr)

     const settings = {
    className: "center",
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear"
  };

  return (
    <div className='w-[95%] mx-auto'>
    
      <Slider {...settings}>
        {
            props.arr.map((ele,i)=>{
                return <div className='flex justify-center items-center'>
                    <img className='mx-auto' src={ele.thumbnail} alt="" />
                    <h2 className='text-center'><b >{ele.title}</b></h2>
                </div>
            })
        }
      </Slider>
    </div>
  )
}

export default SiderComponent
