import './Testimonials.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Testimonials = () => {
const images=[
    {url:'/images/timonials/Asset-18-150x150.png',para:'Edzorb Law is an outstanding app with a beautifully designed UI. The efforts put into creating such a user-friendly',name:'Tanuj'},
    {url:'/images/timonials/avatar-neww-150x150.png',para:'Well planned courses helped me boost my preparation, I feel so grateful to Edzorb to help me learn in ',name:'Samridhi Chauhan'},
    {url:'/images/timonials/icons2-avatars-38-150x150.png',para:'Good One, But most of the time answer key are not reliable. And the Interface is not chronological.',name:'Sambhavi Verma'},
    {url:'/images/timonials/icons2-avatars-43-150x150.png',para:'Good One, But most of the time answer key are not reliable. And the Interface is not chronological.',name:'Neha Rajani'},
    {url:'/images/timonials/icons2-avatars-45-150x150.png',para:'Good One, But most of the time answer key are not reliable. And the Interface is not chronological.',name:'Alisha Anand'},
    {url:'/images/timonials/icons2-avatars-46-150x150.png',para:'Good One, But most of the time answer key are not reliable. And the Interface is not chronological.',name:'Shreyansh Tripathi'},
]

  return (
    <>


<div className="leaf-container">
  <h1 className="flex ">
    <img  src="/images/headerImages/fin-leaf-left.png"/>
    <b className="Law-difference text-4xl font-semibold -ml-24 -mr-24">Testimonials</b>
    <img src="/images/headerImages/fin-leaf-right.png"/>
  </h1>
</div>


{/* desktop */}
<div className='desktop-slider mb-12 -mt-20 '>
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
             <div className=' card ml-9 rounded-xl'>
             <img className="icons rounded-full" src={image.url} />
             <img className=' star h-8 w-20 ' src='/images/timonials/download.png'/>
             <p className='text-center font-medium text-gray-500 mb-5 mt-4'>{image.para}<span className='underline text-blue-600 '>Read More</span></p>
             <h1 className='text-center font-medium text-gray-600 mb-4'>{image.name}</h1>
             <audio  controls className='ml-2 pb-3 px-5'>
             <source/>
             </audio>
             </div>
        
        </div>
      ))}
        </Slider>
</div>

{/* tablet */}
<div className='tablet-slider mb-12 mt-4   '>
<Slider 
       slidesToShow={2}
       arrows={false}
      infinite={true}
      slidesToScroll={2}
      autoplay={true}
      autoplaySpeed={2000}
        >
         {images.map((image,index)=>(
        <div className="" key={index}>
             <div className=' card  rounded-xl'>
             <img className="icons rounded-full" src={image.url} />
             <img className=' star h-8 w-20 ' src='/images/timonials/download.png'/>
             <p className='text-center font-medium text-gray-500 mb-5 mt-4'>{image.para}<span className='underline text-blue-600 '>Read More</span></p>
             <h1 className='text-center font-medium text-gray-600 mb-4'>{image.name}</h1>
             <audio  controls className='pl-0 pb-3 px-12'>
             <source/>
             </audio>
             </div>
        
        </div>
      ))}
       
        </Slider>
</div>
 
 {/* mobile */}
<div className='mobile-slider mb-1 mt-3  '>
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
             <div className=' card ml-9 rounded-xl'>
             <img className="icons rounded-full" src={image.url} />
             <img className=' star h-8 w-20 ' src='/images/timonials/download.png'/>
             <p className='text-center font-medium text-gray-500 mb-5 mt-4'>{image.para}<span className='underline text-blue-600 '>Read More</span></p>
             <h1 className='text-center font-medium text-gray-600 mb-4'>{image.name}</h1>
             <audio  controls className=' pb-3 px-8  ml-0'>
             <source/>
             </audio>
             </div>
        
        </div>
      ))}
       
        </Slider>
</div>



    </>
  )
}

export default Testimonials