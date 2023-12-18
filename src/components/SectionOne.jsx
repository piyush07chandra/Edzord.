import './Navbar.css'
import './StrikeRate.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SectionOne = () => {
  const images=[
    {url:'/images/Akanksha.jpeg'},    
    {url:'/images/Aparna.jpeg'},    
    {url:'/images/Satyabhama.jpeg'},        
    ]
  return (
    <>
        <div className="body-section">
  <div className=" text-white ml-36 pt-14 ">
  <h1 className="text-6xl font-semibold mt-3">Turn Your Judiciary Dream Into Reality</h1>
  <h1 className="text-2xl font-semibold mt-1 mb-5">Revolutionize Your Prelims + Mains + Interview<br/>
Preparation in an Integrated Manner.</h1>
<p className="MDJSA text-2xl bg-white text-black font-semibold mb-8 rounded-lg py-1 ">#1 Most Downloaded Judicial Services App</p>
<span className="flex mb-16">
  <a href="#"><img className="h-10 w-22" src="/images/headerImages/Asset-9.png"/></a>
  <a href="#"><img className="h-10 w-22 ml-7" src="/images/headerImages/Asset-8.png"/></a>
</span>
  </div>
  
  <div className='secdiv'>
    <img className='heroimg' src='/images/headerImages/hero-sec2-orangee.png'/>
  </div>

</div>


<div className="para  text-xl text-white  bg-black py-1 flex">
<h1>Why</h1>
  <h1 className="para underline pl-1">Edzorb Law App is </h1><img className=" w-5  items-center" src="/images/headerImages/2764.svg"/>
  <h1> by Over 10,000+ Users.</h1><img className="h-5 mt-1" src="/images/headerImages/new-star2.png"/>
  <h1 className=" underline">Read Reviews</h1>
</div>


{/* desktop */}
<div className='desktop-slider mb-12 mt-4  '>
<Slider 
        slidesToShow={3}
         dots={true}
         arrows={false}
      infinite={true}
      slidesToScroll={3}
        >
         {images.map((image,index)=>(
        <div className="" key={index}>
             <div className='  bg-white ml-9'>
             <img className=" rounded-3xl " src={image.url} />
             </div>
        
        </div>
      ))}
       
        </Slider>
</div>

{/* tablet */}
<div className='tablet-slider mb-12 mt-4  '>
<Slider 
        slidesToShow={2}
         dots={true}
         arrows={false}
      infinite={true}
      slidesToScroll={2}
      autoplay={true}
      autoplaySpeed={1000}
        >
         {images.map((image,index)=>(
        <div className="" key={index}>
             <div className=' bg-white ml-1'>
             <img className="rounded-3xl w-80" src={image.url} />
       
        
        
             </div>
        
        </div>
      ))}
       
        </Slider>
</div>
 
 {/* mobile */}
<div className='mobile-slider mb-12 mt-4 ml-2 '>
<Slider 
        slidesToShow={1}
         arrows={false}
      infinite={true}
      slidesToScroll={1}
      autoplay={true}
      autoplaySpeed={1000}
        >
         {images.map((image,index)=>(
        <div className="" key={index}>
             <div className=' bg-white ml-1 '>
             <img className=" rounded-3xl w-96 " src={image.url} />
             </div>
        
        </div>
      ))}
       
        </Slider>
</div>


<div className="leaf-container">
  <h1 className="flex ">
    <img  src="/images/headerImages/fin-leaf-left.png"/>
    <b className="Law-difference text-6xl font-semibold -ml-24 -mr-24">The Edzorb Law Difference</b>
    <img src="/images/headerImages/fin-leaf-right.png"/>
  </h1>
</div> 

    </>
  )
}

export default SectionOne