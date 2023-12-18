import './Bnfm.css'

const Bnfm= () => {
  return (
    <div className=' bnfm flex mt-14'>

    <div className='md:ml-32 mt-8'>
        <img className='free-mentor rounded-3xl' src='images/free-mentorship-new-changess.jpg'/>
    </div>

    <div className=' md:mt-32 ml-24'>
        <h1 className='text-3xl'>Are You Ready to Begin Your Judiciary <br/> 
        Journey? Sign Up Now for Free<br/>
         Mentorship Session.</h1>
        <button className='book-now mt-10 mb-10'>Book Now Free Mentorship</button>
        <div className='flex'>
        <img className='h-12 w-42' src='/images/footerimages/avatars-new-a.png'/>
        <span className='text-lg mt-2 ml-2 text-emerald-900 font bold'>Joined by 10,000+ Students</span>
        </div>
       
    </div>
      
    </div>
  )
}

export default Bnfm;
