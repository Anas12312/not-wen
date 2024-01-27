import React from 'react'

export default function Navbar( {
    scrollToMainRef,
    scrollToTokenRef
} ) {
    return (
        <div className='nav-bar z-10 '>
            <div className='ml-10 w-20'><img src="../../public/logo.png" alt="" /></div>
            <div className='h-full flex justify-center items-center'>
                <div onClick={()=>{
                    window.open('https://twitter.com/SolanaToke96918', '_blank')
                }} className='rounded-full group relative mr-4 hover:bg-gray-200 flex justify-center items-center p-3 cursor-pointer'>
                    <img className='w-5 h-5' src="../../public/x.png" alt="" />
                    <span className="sidebar-tooltip group-hover:scale-100 tracking-widest">
                        x.com
                    </span>
                </div>
                <div className='rounded-full mr-4 group relative hover:bg-gray-200 flex justify-center items-center p-3 cursor-pointer'>
                    <img className='w-5 h-5' src="../../public/birdeye.png" alt="" />
                    <span className="sidebar-tooltip group-hover:scale-100 tracking-widest">
                        Birdeye
                    </span>
                </div>
                <div></div>
                <div onClick={scrollToMainRef} className='nav-bar-item trans'>About</div>
                <div onClick={scrollToTokenRef} className='nav-bar-item trans'>Tokenomics</div>
                <div className='nav-bar-buy-now trans mr-10'>BUY $NOTWEN</div>
            </div>
        </div>
    )
}
