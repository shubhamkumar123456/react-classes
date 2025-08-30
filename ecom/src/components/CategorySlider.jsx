import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';


const CategorySlider = (props) => {
    console.log(props)
    console.log(props.data)
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",position:"absolute",right:0 }}
      onClick={onClick}
    />
  );
}
    
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",position:"absolute",left:0,zIndex:55 }}
      onClick={onClick}
    />
  );
}
 const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    cssEase: "linear",
    className: "center",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
    

  };
    return (
    <div className='h-[300px] '>
         <Slider  className='relative' {...settings}>
      {
        props.data.map((ele, i)=>{
            return <Link to='/view' state={ele} className='h-[250px] flex justify-center'>
                <img style={{height:"200px"}} className='mx-auto' src={ele.thumbnail} alt="" />
                <h1 className='text-center font-semibold'>{ele.title}</h1>
            </Link>
            
        })
      }
    </Slider>
    </div>
  )
}

export default CategorySlider
