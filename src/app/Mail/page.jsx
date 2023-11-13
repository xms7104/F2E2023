'use client';
import React from "react";
import Header from "../header";
import Footer from "../footer";
import Image from 'next/image';

function Mail() {
  return (
    <main className="bg-[#EFE4DE] h-full font-mono">
      <Header category='mail' />
      <div className="mb-[64px]">
        <div className="grid justify-center items-center my-4 px-2 h-[120px] mb-4">
          <p className="text-3xl text-orange-950 flex justify-center items-center font-semibold">服務信箱</p>
          <p className="text-base text-orange-950 flex justify-center items-center text-center">
          親愛的鄉親，每位市民的意見是我們社區前進的原動力。
          <br />
          分享您的想法，一同為我們的未來打造更美好！
          </p>
        </div>
        <div className="px-4 py-4 border-2 border-solid border-orange-950 md:w-[60%] lg:w-[50%] xl:w-[40%] mx-auto my-0 rounded-[10px] sm:w-[80%]">
          <div className="text-orange-950 my-2">
            <p className="mb-2">您的姓名：</p>
            <input type="text" className="w-full px-2 py-2 mb-2 rounded-md" />
          </div>
          <div className="text-orange-950 my-2">
            <p className="mb-2">您的電話：</p>
            <input type="text" className="w-full px-2 py-2 mb-2 rounded-md" />
          </div>
          <div className="text-orange-950 my-2">
            <p className="mb-2">您的電子郵件：</p>
            <input type="email" className="w-full px-2 py-2 mb-2 rounded-md" />
          </div>
          <div className="text-orange-950 my-2">
            <p className="mb-2">您的建言：</p>
            <textarea type="text" className="w-full h-[200px] px-2 py-2 mb-2 resize-none rounded-md" />
          </div>
          <div className="flex justify-center items-center">
            <button className="text-orange-950 border-orange-950 font-semibold bg-[#FFE4E1] border-[1px] border-solid rounded-[20px] px-1 py-1 w-[100px] hover:text-[#FFE4E1] hover:bg-orange-950">
              送出
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Mail;