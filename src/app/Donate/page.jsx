'use client';
import React, { useState } from "react";
import Header from "../header";
import Image from 'next/image';

function Donate() {
    const [dollar, setDollar] = useState(0);
    const donateList = [
        {id:0, title:'喵星人之友', dollarText:'捐款新台幣600元', subtitle:'已有 9957 人贊助', dollar: 600},
        {id:1, title:'喵星大使', dollarText:'捐款新台幣6000元', subtitle:'已有 2000 人贊助', dollar: 6000},
        {id:2, title:'喵星傳奇', dollarText:'捐款新台幣60,000元', subtitle:'已有 999 人贊助', dollar: 60000},
    ];

    function donateOption(){
        return donateList.map((item) => {
            return(
                <div key={item.id+'_'+item.title} className="flex justify-between items-center w-[550px] h-[50px] px-4 py-4 border-[1px] border-orange-950 rounded-md mb-4" onClick={() => {setDollar(item.dollar)}}>
                    <p className="w-[40%] flex justify-start items-center">
                        {item.title}
                    </p>
                    <div className="flex justify-between items-center w-[60%]">
                        <p className="w-[55%] flex justify-start items-center">
                            {item.dollarText}
                        </p>
                        <p className="w-[45%] flex justify-start items-center">
                            {item.subtitle}
                        </p>
                    </div>
                </div>
            )
        })
    }

  return (
    <main className="bg-[#EFE4DE] h-full font-mono">
      <Header category='donate' />
      <div className="flex justify-center items-center my-4 px-2 h-[60px]">
        <p className="text-3xl text-orange-950 flex justify-center items-center font-semibold">小額捐款</p>
      </div>
      <div className="h-screen">
        <div className="text-black flex items-center w-[90%] mx-auto my-0 pt-8">
            <div className="w-[50%] grid justify-end items-center">
                {donateOption()}
                <div className="grid justify-between items-center w-[550px] h-[100px] px-4 py-4 border-[1px] border-orange-950 rounded-md mb-4">
                <p className="mb-2">自訂贊助金額</p>
                <div className="flex justify-start items-center bg-white border-[1px] border-solid border-orange-950 rounded-md px-2 py-2 mb-2">
                    <p>NT$</p>
                    <input type="text" className="bg-transparent ml-2 focus:border-transparent focus:outline-none" value={dollar} onChange={(e) => {setDollar(e.target.value)}}  />
                </div>
                </div>
            </div>
            <div className="w-[5%]"></div>
            <div className="w-[45%] grid justify-start self-start">
                <Image alt='DonateImage' src='/image/donate.png' width={300} height={40} />
                <div className="flex justify-center items-end">
                    <button className="w-[200px] h-[35px] border-2 border-solid border-orange-950 rounded-[20px] bg-[#FFE4E1] text-black font-semibold hover:bg-orange-950 hover:text-[#FFE4E1]">前往捐款</button>
                </div>
            </div>
        </div>
        <div className="text-orange-950 grid justify-center content-center h-[200px]">
            <p className="flex justify-center items-center">
                目前小額贊助總金額
            </p>
            <p className="flex justify-center items-center text-2xl font-bold">
                $987,655,873
            </p>
        </div>
        <div className="text-orange-950">
            <p className="flex justify-center items-center text-2xl font-bold">
                您的小筆捐款，是每隻毛孩未來的大大動力！
            </p>
        </div>
      </div>
    </main>
  )
}

export default Donate;