import React from 'react'
import { RiAmazonLine, RiHeartFill, RiAddFill, RiShoppingBag2Fill } from "@remixicon/react";

const center = (props) => {
  return (
    // <>
    //     <div className='py-3 px-3 flex flex-col gap-4'>
    //     <h1 className='text-[22px] font-bold text-neutral-950'>{props.head}</h1>
    //     <p className='text-[12px] font-medium text-neutral-700'>{props.content}</p>
    //     <div className='flex border py-2 px-3 pr-10 rounded-[5px] border-neutral-400 gap-4 items-center max-w-fit mb-6'>
    //         <RiAmazonLine
    //   className="text-neutral-700 h-10 w-10" // add custom class name
    // />
    //         <p className='text-neutral-700 text-[14px] font-bold'>availabe on amazon</p>
    //     </div>
    //   </div>
    // </>

     <div className="flex flex-col gap-3 px-3 py-4 sm:gap-4">

      <h1 className="wrap-break-words text-[20px] font-bold text-neutral-950 sm:text-[22px]">
        {props.head}
      </h1>

      <p className="wrap-break-words text-[12px] font-medium leading-relaxed text-neutral-700 sm:text-[13px]">
        {props.content}
      </p>

      <div className="mb-2 flex max-w-full items-center gap-3 self-start rounded-[5px] border border-neutral-400 px-3 py-2 sm:mb-4 sm:gap-4">

        <RiAmazonLine className="h-8 w-8 shrink-0 text-neutral-700 sm:h-10 sm:w-10" />

        <p className="text-[12px] font-bold text-neutral-700 sm:text-[14px]">
          Available on Amazon
        </p>

      </div>
    </div>
  )
}

export default center
