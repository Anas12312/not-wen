import React from 'react'

export default function Navbar( {
    scrollToMainRef,
    scrollToTokenRef
} ) {
    return (
        <div className='nav-bar z-10 '>
            <div className='ml-10 w-20'><img src="../../logo.png" alt="" /></div>
            <div className='h-full flex justify-center items-center'>
            <div onClick={()=>{
                    window.open('https://t.me/NOTWenCoin', '_blank')
                }} className='rounded-full mr-4 group relative hover:bg-gray-200 flex justify-center items-center p-3 cursor-pointer'>
                    <img className='w-5 h-5' src="../../telegram.png" alt="" />
                    <span className="sidebar-tooltip group-hover:scale-100 tracking-widest">
                        Telegram
                    </span>
                </div>
                <div onClick={()=>{
                    window.open('https://twitter.com/notwencoin', '_blank')
                }} className='rounded-full group relative mr-4 hover:bg-gray-200 flex justify-center items-center p-3 cursor-pointer'>
                    <img className='w-5 h-5' src="../../x.png" alt="" />
                    <span className="sidebar-tooltip group-hover:scale-100 tracking-widest">
                        x.com
                    </span>
                </div>
                <div onClick={()=>{
                    window.open('https://birdeye.so/token/FnDEPJyuoJZiTrjChALAa4NCz3xJbo2d7UCjsAGbznwd?chain=solana', '_blank')
                }} className='rounded-full mr-4 group relative hover:bg-gray-200 flex justify-center items-center p-3 cursor-pointer'>
                    <img className='w-5 h-5' src="../../birdeye.png" alt="" />
                    <span className="sidebar-tooltip group-hover:scale-100 tracking-widest">
                        Birdeye
                    </span>
                </div>
                
                <div></div>
                <div onClick={scrollToMainRef} className='nav-bar-item trans'>About</div>
                <div onClick={scrollToTokenRef} className='nav-bar-item trans'>Tokenomics</div>
                <div onClick={()=>{
                    window.open('', '_blank')
                }} className='nav-bar-buy-now trans mr-10'>BUY $NOTWEN</div>
            </div>
        </div>
    )
}
