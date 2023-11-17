'use client';
import React, {useState} from 'react';
import Link from "next/link";
import Image from 'next/image';
import CloseButton from 'react-bootstrap/CloseButton';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header({category}) {
    const [mobileMune, setMobileMenu] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const title = [
        {id:0, title:'最新活動', uri:'/News', category:'news'}, 
        {id:1, title:'政治議題', uri:'/Political', category:'political'}, 
        {id:2, title:'小額捐款', uri:'/Donate', category:'donate'}, 
        {id:2, title:'服務信箱', uri:'/Mail', category:'mail'}
    ];

    function titleList(){
        return title.map((item) => {
            let imgPath = category === item.category || isHovered === item.category ? '/image/focusIcon.png' : '/image/titleIcon.png';
            return(
                <Link key={item.id} href={item.uri} className='no-underline text-orange-950'>
                    <div className='flex justify-center items-center'
                     onMouseEnter={() => setIsHovered(item.category)}
                     onMouseLeave={() => setIsHovered(null)}
                    >
                        <Image alt='titleIcon' src={imgPath} width={40} height={40} />
                        <p className='font-serif px-2 py-2 cursor-pointer mb-0'>
                            {item.title}
                        </p>
                    </div>
                </Link>
            )
        })
    }
    
    const backgroundImage = category === 'home' ? 'url("/image/headerBackground2.png")' : 'none';
    const backgroundColor = category === 'home' ? 'transparent' : '#EFE4DE';

    return (
        <div className='flex justify-around items-center w-full py-4 px-4 md:relative sm:relative'>
            <div className='lg:hidden md:absolute md:top-[35%] md:left-[5%] sm:absolute sm:top-[35%] sm:left-[5%]'>
                <button className='text-xl' onClick={() => {setMobileMenu(true);}}>
                    ☰
                </button>
            </div>
            {mobileMune ? (
                <div className='z-10 font-serif text-black fixed bg-[#EFE4DE] top-0 left-0 bottom-0 w-[300px] h-screen block border-t-[1px] border-b-[1px] border-r-[1px] border-solid border-orange-950'>
                <div className='flex justify-center items-center relative h-[80px] w-full'>
                    <p className='flex justify-center items-center mb-0'>喵立翰 MIAO LI - HAN</p>
                    <CloseButton className='absolute top-[32%] right-[3%]' onClick={() => {setMobileMenu(false);}} />
                </div>
                <div className='grid justify-center items-center font-serif text-black h-[250px]'>
                    {titleList()}
                </div>
                </div>
            ) : null}
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
            <div className='lg:flex md:hidden sm:hidden justify-center items-center font-serif text-black'>
                {titleList()}
            </div>
        </div>
    )
  }
  
  export default Header;