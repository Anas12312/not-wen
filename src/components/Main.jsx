import React from 'react'

export default function Main({ref}) {
    return (
        <div ref={ref} className='bg-white w-full relative flex flex-col h-full justify-center items-center'>
            <div id='notwen' className='w-full flex justify-center items-center'>
                <img className='w-[45%]' src="../../logo.png" alt="" />
            </div>
            <div className='font-bold tracking-widest text-xl mt-10'>THIS COIN IS NOT WEN</div>
            <div className='font-bold text-sm mt-7'>CA: FnDEPJyuoJZiTrjChALAa4NCz3xJbo2d7UCjsAGbznwd</div>
        </div>
    )
}
