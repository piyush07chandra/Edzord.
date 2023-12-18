import './LatestVideo.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const LatestVideo = () => {
    const images=[
        {url:'/images/Latestimages/msg981541423-15002.jpg'},
        {url:'/images/Latestimages/msg981541423-15003.jpg'},
        {url:'/images/Latestimages/msg981541423-15940.jpg'},
        {url:'/images/Latestimages/msg981541423-15004.jpg'},
        {url:'/images/Latestimages/msg981541423-15005.jpg'},
        {url:'/images/Latestimages/msg981541423-15006.jpg'},
        {url:'/images/Latestimages/msg981541423-15938.jpg'},
        {url:'/images/Latestimages/msg981541423-15007.jpg'},
        {url:'/images/Latestimages/msg981541423-15008.jpg'},
        {url:'/images/Latestimages/msg981541423-15009.jpg'},
        {url:'/images/Latestimages/msg981541423-15010.jpg'},
        {url:'/images/Latestimages/msg981541423-15937.jpg'},
        {url:'/images/Latestimages/msg981541423-15938 (1).jpg'},   
        {url:'/images/Latestimages/msg981541423-15939.jpg'},
        {url:'/images/Latestimages/msg981541423-15940 (1).jpg'},
        
    ]
  return (
    <>
     <div className="leaf-container">
  <h1 className="flex ">
    <img  src="/images/headerImages/fin-leaf-left.png"/>
    <b className="Law-difference text-6xl font-semibold -ml-24 -mr-24">Latest Videos</b>
    <img src="/images/headerImages/fin-leaf-right.png"/>
  </h1>
</div> 

<div className='desktop-slider mb-12 ml-20 -mt-14'>
<Slider 
        slidesToShow={3}
         dots={true}
         arrows={false}
      infinite={true}
      slidesToScroll={3}
      autoplay={true}
      autoplaySpeed={2000}
        >
         {images.map((image,index)=>(
        <div className="" key={index}>
             
        <img className="rounded-3xl h-80 w-96" src={image.url} />
  
        </div>
      ))}
       
        </Slider>
</div>

<div className='mobile-slider mb-12 ml-4 '>
<Slider 
        slidesToShow={1}
        arrows={false}
      infinite={true}
      slidesToScroll={1}
      autoplay={true}
      autoplaySpeed={2000}
        >
         {images.map((image,index)=>(
        <div className="" key={index}>
             
        <img className="rounded-3xl h-80 w-96" src={image.url} />
  
        </div>
      ))}
       
        </Slider>
</div>
    </>
  )
}

export default LatestVideo
