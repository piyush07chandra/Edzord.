import './Crousel.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const CrouselC = () => {
  const images=[
    {url:"/images/crouselCimage/notes.jpg"},
    {url:"/images/crouselCimage/Simple-Visual-Noes-720-04-1.jpg"},
    {url:"/images/crouselCimage/simple-visual-notes.jpg"},
    {url:"/images/crouselCimage/visual-notes.jpg"}
  ]
  return (
    <>
    <div className='crousel-all flex '>

<div className="first-div">
<Slider 
  slidesToShow={1}
  dots={true}
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
  <h1 className='text-3xl font-semibold'>Simplified Notes in Visual Learning Format</h1>
  <ul className='text-lg'>
    <li className='mt-3'>.    Extensive Coverage of CrPC, CPC, IEA, Constitution etc.</li>
    <li className='mt-3'>.    Coverage of Minor Subjects – SOGA, TPA, Admin Law</li>
    <li className='mt-3'>.    Notes Inclusive of Case Laws & Recent Legal Updates</li> 
    <li className='mt-3'>.    Exhaustive & Complete Section to Section Coverage</li>
  </ul>
  <button className='text-bold text-xl text-white flex'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chevron-down mt-1 mr-2" viewBox="0 0 16 16">
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

export default CrouselC
