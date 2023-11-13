import React from 'react';
import Link from "next/link";
import Image from 'next/image';

function Footer() {
    return (
       <div className='sm:grid md:flex lg:flex xl:flex justify-around items-center py-2 bg-[#431407] text-[#EFE4DE] border-t-[1px] border-t-solid border-t-orange-950'>
        <div>
            <p className='text-sm mb-0 flex justify-centet items-center'>
                © 2023 喵立翰 版權所有。
            </p>
        </div>
        <div>
            <p className='text-sm mb-0 sm:py-0 md:py-1 flex justify-centet items-center'>
                地址：喵星區，毛茸茸大道88號，喵喵大樓3樓
            </p>
            <p className='text-sm mb-0 sm:py-0 md:py-1 flex justify-centet items-center'>
                電話：(02) 888-5678
            </p>
            <p className='text-sm mb-0 sm:py-0 md:py-1 flex justify-centet items-center'>
                電子郵件地址：meowoffice@linmeow.tw
            </p>
        </div>
       </div>
    )
  }
  
  export default Footer;