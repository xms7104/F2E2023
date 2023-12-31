'use client';
import React from "react";
import Header from "../header";
import Footer from "../footer";
import Image from 'next/image';
import Card from 'react-bootstrap/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/pagination';

function Political() {
    const issueData = [
        {id:1, 
        title:'為毛孩子謀福利！推動寵物醫療保障方案', 
        text:[
            {subTitle:'設立寵物醫療基金：', content:'每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用。'},
            {subTitle:'提供醫療補助：', content:'每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力。'},
            {subTitle:'合作動物醫院：', content:'目前已有和超過 200 家動物醫院進行初步的合作討論。'},
        ], 
        image:'/image/issue1.png'},
        {id:2, 
        title:'打造休閒天堂！推廣寵物休閒與娛樂場所', 
        text:[
            {subTitle:'建立寵物公園：', content:'每年撥款新台幣 5 億元，用於在各大都市建立專屬的寵物公園。根據初步規劃，預計在第一年內，將在全國範圍內建立至少 10 座寵物公園。'},
            {subTitle:'推廣寵物友善商家：', content:'鼓勵商家提供寵物友善的環境，並為參與的商家提供稅收優惠。預計在政策實施後的首年，將有超過 500 家商家加入此計畫。'},
            {subTitle:'舉辦寵物活動和工作坊：', content:'與各大寵物社團和組織合作，每年舉辦至少 5 場大型的寵物活動，包括寵物才藝比賽、飼養知識工作坊等。'},
        ], 
        image:'/image/issue2.png'},
        {id:3, 
        title:'推廣寵物飼養教育，讓愛更加專業', 
        text:[
            {subTitle:'建立寵物飼養教育中心：', content:'每年撥款新台幣 3 億元，用於在全國各地建立專業的寵物飼養教育中心。預計在第一年內，在全國至少 5 大城市設立教育中心。'},
            {subTitle:'推廣寵物飼養課程：', content:'與學校、社區組織和寵物社團合作，推出一系列免費的寵物飼養課程。預計每年將有超過 10,000 名市民受益。'},
            {subTitle:'製作教育資料：', content:'出版寵物飼養手冊、影片和線上課程，讓所有有意飼養寵物的家庭都能輕鬆取得正確的知識。'},
        ], 
        image:'/image/issue3.png'}
    ];

    function issueList(){
        return issueData.map((item, index) => {
            function issueContent(){
                return item.text.map((itemText, indexText) => {
                    return(
                        <li key={itemText.subTitle} className="mb-4">
                            <p className="flex justify-start items-center">
                                {indexText+1}. {' '}
                                {itemText.subTitle}
                            </p>
                            <p className="text-sm">
                                {itemText.content}
                            </p>
                        </li>
                    )
                })
            }
            return(
                <div key={item.title} className="w-full mx-auto my-0 bg-[#EFE4DE] mb-4">
                    <div className="block">
                        <div className="text-center">
                            <p className="font-semibold text-lg xl:h-auto lg:h-[30px]">{item.title}</p>
                        </div>
                        <div className="flex justify-center items-start">
                            <ul className="relative w-[70%] block my-auto mx-0 text-justify bg-[#FFE4E1] px-4 py-4 border-[1px] border-solid border-orange-950 rounded-[10px]">
                                <div className="absolute right-[-30px] top-[-60px]">
                                    <Image alt='political1' src={item.image} width={120} height={40} />
                                </div>
                                {issueContent()}
                            </ul>
                        </div>
                    </div>
                </div>
            )
        })
    }

    function issueCard(){
        return issueData.map((item, index) => {
            function issueText(){
                return item.text.map((itemText, indexText) => {
                    return(
                        <li key={itemText.subTitle} className="my-4">
                            <p className="flex justify-start items-center mb-0">
                                {indexText+1}. {' '}
                                {itemText.subTitle}
                            </p>
                            <p className="text-sm text-justify mb-0">
                                {itemText.content}
                            </p>
                        </li>
                    )
                })
            }
            return(
                <SwiperSlide key={item.id}>
                    <Card 
                    className="mx-auto my-0" 
                    style={{ width: '22rem', height:'43rem', backgroundColor:'#EFE4DE', borderRadius:'10px', borderCcolor: 'rgb(67 20 7)', border: '1px', borderStyle:'solid' }}>
                    <Card.Img variant="top" src={item.image} style={{width:'70%', margin:'0 auto'}} />
                    <Card.Body>
                    <Card.Title className="mb-0">{item.title}</Card.Title>
                    {issueText()}
                    </Card.Body>
                </Card>
                </SwiperSlide>
            )
        })
    }
  return (
    <main className="bg-[#EFE4DE] h-full font-mono">
      <Header category='political' />
      <div className="flex justify-center items-center my-4 px-2 h-[60px]">
        <p className="text-3xl text-orange-950 flex justify-center items-center font-semibold">政治議題</p>
      </div>
      <div className="lg:block md:block sm:hidden justify-center items-start text-black pb-5">
        {issueList()}
      </div>
      <div className="lg:hidden md:hidden sm:block sm:mb-8">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {issueCard()}
          </Swiper>
        </div>
      <Footer />
    </main>
  )
}

export default Political;