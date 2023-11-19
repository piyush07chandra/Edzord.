import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './EdzorbLaw.css'

const LatestVideo = () => {
    const images=[
        {url:'/src/images/edzorbimage/simplified-nptesss.png',h1:"High Yeld QBank with Visual Learning"},
        {url:'/src/images/edzorbimage/rapid-revision-.png',h1:"Simplified Notes"},
        {url:'/src/images/edzorbimage/Qbank.png',h1:"EPIC Mains Test Series"},
        {url:'/src/images/edzorbimage/podcast-red-icon.png',h1:"Personolized Mentorship"},
        {url:'/src/images/edzorbimage/meptap.png',h1:"Mains QBank"},
        {url:'/src/images/edzorbimage/mentorship-1.png',h1:"Bare Act Revolution"},
        {url:'/src/images/edzorbimage/mains-test-.png',h1:"Marks Enhancement Programe"},
        {url:'/src/images/edzorbimage/mains-factory.png',h1:"Judgement Writing Powerpack Course"},
        {url:'/src/images/edzorbimage/local-laws.png',h1:"Auto Upgrade Facility"},
        {url:'/src/images/edzorbimage/judgement-writing.png',h1:"Interactive Visual Learning"},
        {url:'/src/images/edzorbimage/interview-new.png',h1:" Interview Guidance"},
        {url:'/src/images/edzorbimage/interactive-new-icon.png',h1:"virtual Edzorbs "},
        {url:'/src/images/edzorbimage/flowcharts-red.png',h1:"Case Law Notes"},   
        {url:'/src/images/edzorbimage/fastrack-crashh-.png',h1:"Rapid Revision Notes"},
        {url:'/src/images/edzorbimage/ESS.png',h1:"Local Law Notes"},
        
    ]
  return (
    <>
     <div className="leaf-container">
  <h1 className="flex ">
    <img  src="/src/images/headerImages/fin-leaf-left.png"/>
    <b className="Law-difference text-6xl font-semibold -ml-24 -mr-24">What Makes Edzorb Law Unique</b>
    <img src="/src/images/headerImages/fin-leaf-right.png"/>
  </h1>
</div> 

<div className='desktop-slider mb-12 ml-20 -mt-14'>
<Slider 
        slidesToShow={4}
         dots={true}
      infinite={true}
      slidesToScroll={3}
      autoplay={true}
      autoplaySpeed={2000}
        >
         {images.map((image,index)=>(
        <div className="" key={index}>
             <div className='order bg-white w-60 h-96 ml-5'>
             <img className=" h-52 w-52 pt-9 pb-5 ml-4  " src={image.url} />
        <h1 className='text-xl text-center mt-9 font-bold'>{image.h1}</h1>
             </div>
        
        </div>
      ))}
       
        </Slider>
</div>

<div className='mobile-slider mb-12 ml-20 -mt-14'>
<Slider 
        slidesToShow={1}
         dots={true}
      infinite={true}
      slidesToScroll={3}
      autoplay={true}
      autoplaySpeed={2000}
        >
         {images.map((image,index)=>(
        <div className="" key={index}>
             <div className='order bg-white w-60 h-96 ml-5'>
             <img className=" h-52 w-52 pt-9 pb-5 ml-4  " src={image.url} />
        <h1 className='text-xl text-center mt-9 font-bold'>{image.h1}</h1>
             </div>
        
        </div>
      ))}
       
        </Slider>
</div>
    </>
  )
}

export default LatestVideo
