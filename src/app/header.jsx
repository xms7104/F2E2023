import React from 'react';

function Header() {
    const title = ['最新活動', '政治議題', '小額捐款', '民意信箱'];

    function titleList(){
        return title.map((item, index) => {
            return(
                <p key={item+'_'+index} className='font-serif px-2 py-2'>
                    {item}
                </p>
            )
        })
    }

    return (
        <div className='flex justify-around items-center w-full'
        style={{ 
            backgroundImage: `url('/image/headerBackground.png')`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' }}
        >
            <div className='grid justify-center items-center font-serif text-black px-2 py-2'>
                <p className='flex justify-center items-center'>喵立翰</p>
                <p>MIAO LI - HAN</p>
            </div>
            <div className='flex justify-center items-center font-serif text-black'>
                {titleList()}
            </div>
        </div>
    )
  }
  
  export default Header;