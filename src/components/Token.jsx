import React from 'react'

export default function Token({ref}) {
    return (
        <div ref={ref} className='w-full relative h-[30rem] flex justify-center text-white items-center bg-gradient-to-r from-black from-20% to-80% to-[#24242a]'>
            <div className='w-[80%] flex justify-center items-center'>
                <div className='flex flex-col items-start w-[50%]'>
                    <div className='text-3xl'>TOKENOMICS</div>
                    <div className='text-gray-300'>A total supply of 1 billion tokens</div>
                    <div className='text-2xl mt-16'>LIQUIDITY POOL <span className='font-sans font-light text-gray-300'>80%</span></div>
                    <div className='text-2xl'>DEV & MARKETING  & BURNING MECHANISM <span className='font-sans font-light text-gray-300'>20%</span></div>
                    <div className='nav-bar-buy-now trans ml-0 mt-16'>BUY $NOTWEN</div>
                </div>
                <img className='w-[30%]' src="../../cat.PNG" alt="" />
            </div>
        </div>
    )
}
