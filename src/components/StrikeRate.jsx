import './StrikeRate.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const StrikeRate = () => {
    const images=[
    {url:'/images/strikeRate/trophy-new-ong-1.png',strike:"93% Strike rate",state:"chandiga Js 2023"},    
    {url:'/images/strikeRate/trophy-new-ong-1.png',strike:"92% Strike rate",state:"West Bengal Js 2023"},    
    {url:'/images/strikeRate/trophy-new-ong-1.png',strike:"96% Strike rate",state:"Uttrakhand Js 2023"},    
    {url:'/images/strikeRate/trophy-new-ong-1.png',strike:"95% Strike rate",state:"Punjab Js 2023"},    
    {url:'/images/strikeRate/trophy-new-ong-1.png',strike:"94% Strike rate",state:"Up Js 2023"},    
    {url:'/images/strikeRate/trophy-new-ong-1.png',strike:"96% Strike rate",state:"HP Js 2023"},     
    ]
  return (
    <>
     <div className="leaf-container">
  <h1 className="flex ">
    <img  src="/images/headerImages/fin-leaf-left.png"/>
    <b className="Law-difference text-6xl font-semibold -ml-24 -mr-24">Strike Rate</b>
    <img src="/images/headerImages/fin-leaf-right.png"/>
  </h1>
</div> 

<div className='desktop-slider mb-12 ml-20 '>
<Slider 
        slidesToShow={3}
         dots={true}
      infinite={true}
      slidesToScroll={3}
        >
         {images.map((image,index)=>(
        <div className="" key={index}>
             <div className='kaju bg-white '>
             <img className=" h-40 w-40 pt-9  ml-24  " src={image.url} />
        <h1 className='aadi text-2xl text-center mt-9 font-bold ' >{image.strike}</h1>
        <h1 className='text-xl text-white text-center  bg-black rounded-md mt-3 font-bold'>{image.state}</h1>
        
        
             </div>
        
        </div>
      ))}
       
        </Slider>
</div>
<div className='mobile-slider mb-12 ml-9 '>
<Slider 
        slidesToShow={1}
         dots={true}
      infinite={true}
      slidesToScroll={3}
        >
         {images.map((image,index)=>(
        <div className="" key={index}>
             <div className='kaju bg-white  '>
             <img className=" h-40 w-40 pt-9  ml-24  " src={image.url} />
        <h1 className='aadi text-2xl text-center mt-9 font-bold ' >{image.strike}</h1>
        <h1 className='text-xl text-white text-center  bg-black rounded-md mt-3 font-bold'>{image.state}</h1>
        
        
             </div>
        
        </div>
      ))}
       
        </Slider>
</div>
    </>
  )
}

export default StrikeRate;
