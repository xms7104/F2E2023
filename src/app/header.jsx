import React from 'react';
import Link from "next/link";
import Image from 'next/image';

function Header({category}) {
    const title = [
        {id:0, title:'最新活動', uri:'/News', category:'news'}, 
        {id:1, title:'政治議題', uri:'/Political', category:'political'}, 
        {id:2, title:'小額捐款', uri:'/Donate', category:'donate'}, 
        {id:2, title:'服務信箱', uri:'/Mail', category:'mail'}
    ];

    function titleList(){
        return title.map((item, index) => {
            let imgPath = category === item.category ? '/image/focusIcon.png' : '/image/titleIcon.png';
            return(
                <Link key={item.id} href={item.uri} className='no-underline text-orange-950'>
                    <div className='flex justify-center items-center'>
                        <Image alt='titleIcon' src={imgPath} width={40} height={40} />
                        <p className='font-serif px-2 py-2 cursor-pointer mb-0'>
                            {item.title}
                        </p>
                    </div>
                </Link>
            )
        })
    }
    
    const backgroundImage = category === 'home' ? 'url("/image/headerBackground1.png")' : 'none';
    const backgroundColor = category === 'home' ? 'transparent' : '#EFE4DE';

    return (
        <div className='flex justify-around items-center w-full py-4 px-4'
        style={{ 
            backgroundImage, 
            backgroundColor,
            backgroundSize: 'cover', 
            backgroundPosition: 'center' }}
        >
            <Link href='/' className='no-underline text-orange-950'>
                <div className='flex justify-center items-center font-serif text-black px-2 py-2'>
                    {
                        category !== 'home' ? (
                            <Image alt='headerIcon' src={'/image/headerIcon.png'} width={40} height={40} />
                        ) : null
                    }
                    <p className='flex justify-center items-center mr-2 mb-0'>喵立翰</p>
                    <p className='flex justify-center items-center mb-0'>MIAO LI - HAN</p>
                </div>
            </Link>
            <div className='flex justify-center items-center font-serif text-black'>
                {titleList()}
            </div>
        </div>
    )
  }
  
  export default Header;