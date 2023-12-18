import './Callback.css'

const Callback = () => {
  return (
    <div className='calback pl-28 flex pb-7'>
     
      <div >
      <h1 className='text-white font-semibold  text-5xl pt-8 pb-20'>Why Edzorb Law?</h1>
        <div>
          <div className='text-lg text-white'>
            <p className='mb-4'>Edzorb’s mission: Equal access to top-notch study materials for <br/> aspiring judicial exam candidates, achieving top 10 ranks through <br/> our guidance and your dedication.</p>
            <p className='mb-4'>We want to make sure that every aspirant gets access to the best <br/> study material there is.</p>
            <p className='mb-4 '>Give learners access to the highest quality digital learning <br/> materials and resources.</p>
            <p className='pb-4 '>Edzorb Law’s Guidance + Your Dedication = A rank in Top 10!</p>
          </div>

          <div className=' mt-6 pb-6 pl-24'>
            <div className='four  flex text-white text-xl  font-semibold'>
               <div className=' mr-48'>
                 <img className='h-16 w-16' src='/images/callback/Asset-28.png'/>
                 <span className='text-3xl'>1,000+</span>
                 <h1 >Ranks</h1>
               </div> 

               <div className=''>
                 <img className='h-16 w-16' src='/images/callback/Asset-27-1.png'/>
                 <span className='text-3xl '>10,000+</span>
                 <h1>Students</h1>
               </div>    
            </div>

            <div className='four flex text-white text-xl font-semibold mt-8'>
               <div className='mr-40'>
                 <img className='h-16 w-16' src='/images/callback/users.png'/>
                 <span className='text-3xl'>100,000+</span>
                 <h1>Monthly Users</h1>
               </div> 

               <div>
                 <img className='h-16 w-16' src='/images/callback/Asset-26-1.png'/>
                 <span className='text-3xl'>7+</span>
                 <h1>Courses</h1>
               </div>    
            </div>
          </div>
        </div>
        </div>

        <div className='phone'>
        
           <div className='gac  flex   ml-20'>
              <h1 className=' text-2xl font-semibold'>Get a Callback</h1>
              <img className='h-10 w-10' src='/images/callback/icons8-call-100-4.png'/>
           </div>
          
           <input className='flex rounded-2xl bg-gray-200 mt-6 ml-14 pr-12 pb-3' placeholder='Your Name'/>
           <input className='flex rounded-2xl bg-gray-200 mt-7 ml-14 pr-12 pb-3' placeholder='Youe Email'/>
           <input className='flex rounded-2xl bg-gray-200 mt-7 ml-14 pr-12   pb-3' placeholder='Mobile No.'/>
           <input className='flex rounded-2xl bg-gray-200 pb-16 mt-7 ml-14 pr-12 ' placeholder='Your Message optional'/>
           <button className='submit rounded-2xl text-white ml-24 mt-10'>Submit</button>
           </div>
          
      
    </div>
  )
}

export default Callback
