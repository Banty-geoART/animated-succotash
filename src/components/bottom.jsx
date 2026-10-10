import React from 'react'
import { RiAmazonLine, RiHeartFill, RiAddFill, RiShoppingBag2Fill } from "@remixicon/react";

const bottom = (props) => {
  return (
//   <>
//        <div className='px-3 py-6 flex gap-5 items-center'>
//         <p className='text-2xl font-bold'>₹ {props.price}</p>
//         <button className='bg-linear-to-r from-green-500 from-50% to-yellow-500 flex gap-3 px-10 py-4 items-center rounded-lg active:scale-95 cursor-pointer'>
//           <div className='flex'>
//             <RiAddFill className='text-[3px]'/>
//             <RiShoppingBag2Fill className='text-[10px]'/>
//           </div>
//           <h1 className='text-[18px] font-bold'>Buy Now</h1>
//         </button>
//       </div>
//     </>

 <div className="flex flex-wrap items-center justify-between gap-3 px-3 py-4 sm:py-6">

      <p className="text-xl font-bold text-neutral-950 sm:text-2xl">
        ₹ {props.price}
      </p>

      <button className="flex items-center justify-center gap-2 rounded-lg bg-linear-to-r from-green-500 from-50% to-yellow-500 px-4 py-3 transition-transform active:scale-95 sm:gap-3 sm:px-6 sm:py-4">

        <div className="flex items-center">
          <RiAddFill className="h-3 w-3" />
          <RiShoppingBag2Fill className="h-4 w-4" />
        </div>

        <span className="text-[15px] font-bold sm:text-[18px]">
          Buy Now
        </span>

      </button>

    </div>
  )
}

export default bottom
