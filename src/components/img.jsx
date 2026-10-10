import React from 'react'

const img = (props) => {
  return (
    // <>
    //    <div className='bg-neutral-100 h-70 w-88 rounded-[20px] flex snap-x snap-mandatory overflow-x-auto gap-2 scrollbar-thin'>
    //     <img src={props.url1} alt="" className='h-full w-full object-cover rounded-[20px] shrink-0 snap-start'/>
    //     <img src={props.url2} alt="" className='h-full w-full object-cover rounded-[20px]  shrink-0 snap-start'/>
    //     <img src={props.url3} alt="" className='h-full w-full object-cover rounded-[20px]  shrink-0 snap-start'/>
    //     <img src={props.url4} alt="" className='h-full w-full object-cover rounded-[20px]  shrink-0 snap-start'/>
       
    //   </div>
    // </>

     <div className="flex h-60 w-full snap-x snap-mandatory gap-2 overflow-x-auto overflow-y-hidden rounded-[20px] bg-neutral-100 sm:h-70">

      <img
        src={props.url1}
        alt=""
        className="h-full w-full flex-none snap-start rounded-[20px] object-cover"
      />

      <img
        src={props.url2}
        alt=""
        className="h-full w-full flex-none snap-start rounded-[20px] object-cover"
      />

      <img
        src={props.url3}
        alt=""
        className="h-full w-full flex-none snap-start rounded-[20px] object-cover"
      />

      <img
        src={props.url4}
        alt=""
        className="h-full w-full flex-none snap-start rounded-[20px] object-cover"
      />

    </div>
  )
}

export default img
