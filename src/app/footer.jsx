import React from 'react';
import Link from "next/link";
import Image from 'next/image';

function Footer() {
    return (
       <div className='flex justify-around items-center py-2 bg-[#431407] text-[#EFE4DE] text-orange-950 border-t-[1px] border-t-solid border-t-orange-950'>
        <div>
            <p className='text-sm mb-0'>
                © 2023 喵立翰 版權所有。
            </p>
        </div>
        <div>
            <p className='text-sm py-1 mb-0'>
                地址：喵星區，毛茸茸大道88號，喵喵大樓3樓
            </p>
            <p className='text-sm py-1 mb-0'>
                電話：(02) 888-5678
            </p>
            <p className='text-sm py-1 mb-0'>
                電子郵件地址：meowoffice@linmeow.tw
            </p>
        </div>
       </div>
    )
  }
  
  export default Footer;