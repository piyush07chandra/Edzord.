import './Crousel.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const CrouselA = () => {
  const images=[
    {url:"/images/crouselAimage/Question-Bank-ewd.jpg"},
    {url:"/images/crouselAimage/landscape-scroll-dekstop.jpg"},
    {url:"/images/crouselAimage/landscape-scroll-kickout-2.jpg"}
  ]
  return (
    <>
    <div className='crouselA '>

      <div className="first-div">
      <Slider 
        slidesToShow={1}
        dots={true}
        arrows={false}
      infinite={true}
      autoplay={true}
      autoplaySpeed={2000}
        >
         {images.map((image,index)=>(
        <div className="" key={index}>
             
        <img className="mcrouselImages" src={image.url} />
  
        </div>
      ))}
       
        </Slider>

      </div>


      <div className='second-div'>
        <h1 className='text-3xl font-semibold'>Prelims QBank with Explanations in Visual Learning Format</h1>
        <ul className='md:none text-lg'>
          <li className='mt-3'>.    High Yield Prelims Questions with Mains Explanations</li>
          <li className='mt-3'>.    Visual Learning Format, Stories, Animations</li>
          <li className='mt-3'>.    Precise, Qualitative & Effective with Proven Track Record Across</li>
          <li className='ml-3'> Multiple Prelims Exams of Different States</li> 
          <li className='mt-3'>.    Extensive Subject Wise Coverage of Questions</li>
          <li className='mt-3'>.    Goldmine for Your Success in Judiciary Exams</li>
        </ul>
        <button className=' btnn text-bold text-xl text-white flex'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chevron-down mt-1 mr-2" viewBox="0 0 16 16">
  <path  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg>Download Free<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cloud-download mt-1 ml-2" viewBox="0 0 16 16">
  <path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
  <path d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/>
</svg></button>
      </div>
    </div>



    <div className='for-mobile'>

<div className="first-div">
<Slider 
  slidesToShow={1}
  arrows={false}
infinite={true}
autoplay={true}
autoplaySpeed={2000}
  >
   {images.map((image,index)=>(
  <div className="" key={index}>
       
  <img className="mcrouselImages " src={image.url} />

  </div>
))}
 
  </Slider>

</div>


<div className='second-div'>
  <h1 className='text-3xl font-semibold'>Prelims QBank with Explanations in Visual Learning Format</h1>
  <button className=' btnn text-bold text-xl text-white flex'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chevron-down mt-1 mr-2" viewBox="0 0 16 16">
<path  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg>Download Free<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cloud-download mt-1 ml-2" viewBox="0 0 16 16">
<path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
<path d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/>
</svg></button>
</div>
</div>
    </>
  )
}

export default CrouselA
