import './GetStarted.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const GetStarted = () => {
    const images=[
    {
        url:'/src/images/GetStarted/Asset-10.png',
        premium:"Premium+",
        month:"8 Month",
    },
    {
        url:'/src/images/GetStarted/Asset-11.png',
        premium:"Premium+",
        month:"11 Month",
    },
    {
        url:'/src/images/GetStarted/Asset-14.png',
        premium:"Premium+",
        month:"15 Month",
    },
    {
        url:'/src/images/GetStarted/Asset-15.png',
        premium:"Premium+",
        month:"5 Month",
    },
    {
        url:'/src/images/GetStarted/Asset-149.png',
        premium:"Elite Plan",
        month:"Crash Course",
    },
    {
        url:'/src/images/GetStarted/Asset-148.png',
        premium:"Fastrack Prelims",
        month:"crash course",
    },
    {
        url:'/src/images/GetStarted/Asset-150.png',
        premium:"Marks Enhansement Programe",
        month:"",
    },
    {
        url:'/src/images/GetStarted/Asset-151.png',
        premium:"Judgenment Writing",
        month:"",
    },
    {
        url:'/src/images/GetStarted/Asset-152.png',
        premium:"Renewal Premium+",
        month:"",
    },
       
      
        
    ]
  return (
    <>
     <div className="leaf-container">
  <h1 className="flex ">
    <img  src="/src/images/headerImages/fin-leaf-left.png"/>
    <b className="Law-difference text-6xl font-semibold -ml-24 -mr-24">Get Started Today</b>
    <img src="/src/images/headerImages/fin-leaf-right.png"/>
  </h1>
</div> 

<div className='desktop-slider mb-12 ml-20 -mt-14'>
<Slider 
        slidesToShow={3}
         dots={true}
      infinite={true}
      slidesToScroll={3}
        >
         {images.map((image,index)=>(
        <div className="" key={index}>
             <div className='main bg-whiteml-5'>
             <img className=" h-36 w-36 pt-9 pb-5 ml-24  " src={image.url} />
        <h1 className='text-2xl text-center mt-9 font-bold'>{image.premium}</h1>
        <h1 className='text-xl text-white text-center m-20 bg-black rounded-md mt-3 font-bold'>{image.month}</h1>
        <ul className='text-xl font-semibold text-center'>
            <li>Dedicated 90 days Shedule</li>
            <li>Prelims & main Target</li>
            <li>Easy writing and judgement</li>
            <li>symplified notes</li>
            <li>check all features</li>
        </ul>
        <button className='bg-black text-white p-2 rounded-lg ml-32'>Buy Now</button>
        <div className='flex ml-32'>
            <img className='h-12 w-12 bg-white rounded-md' src='/src/images/GetStarted/icons2-whatsaapp-e1687690015465.png'/>
            <img className='h-12 w-12 bg-white rounded-md' src='/src/images/GetStarted/icons2-call.png'/>
        </div>
             </div>
        
        </div>
      ))}
       
        </Slider>
</div>

<div className='mobile-slider mb-12 ml-14 -mt-14'>
<Slider 
        slidesToShow={1}
      infinite={true}
      slidesToScroll={1}
        >
         {images.map((image,index)=>(
        <div className="" key={index}>
             <div className='main bg-whiteml-5'>
             <img className=" h-36 w-36 pt-9 pb-5 ml-24  " src={image.url} />
        <h1 className='text-2xl text-center mt-9 font-bold'>{image.premium}</h1>
        <h1 className='text-xl text-white text-center m-20 bg-black rounded-md mt-3 font-bold'>{image.month}</h1>
        <ul className='text-xl font-semibold text-center'>
            <li>Dedicated 90 days Shedule</li>
            <li>Prelims & main Target</li>
            <li>Easy writing and judgement</li>
            <li>symplified notes</li>
            <li>check all features</li>
        </ul>
        <button className='bg-black text-white p-2 rounded-lg ml-32'>Buy Now</button>
        <div className='flex ml-32'>
            <img className='h-12 w-12 bg-white rounded-md' src='/src/images/GetStarted/icons2-whatsaapp-e1687690015465.png'/>
            <img className='h-12 w-12 bg-white rounded-md' src='/src/images/GetStarted/icons2-call.png'/>
        </div>
             </div>
        
        </div>
      ))}
       
        </Slider>
</div>
    </>
  )
}

export default GetStarted
