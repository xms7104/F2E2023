'use client';
import React from "react";
import Header from "../header";
import Footer from "../footer";
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/pagination';


const politicalList = [
    {id:0, date:'12/26', title:'參與台北寵物論壇，爭取貓咪友善環境', content:'炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。', imageUri:'/image/political1.jpeg'},
    {id:1, date:'12/24', title:'掃街模式開啟！帶著你的貓耳，來和我一起走！', content:'街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。', imageUri:'/image/political2.jpeg'},
    {id:2, date:'12/20', title:'收容所模特兒大比拼！', content:'今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！', imageUri:'/image/political3.jpeg'},
]

function timelineContent(){
    return politicalList.map((item, index) => {
        return(
        <TimelineItem key={item} className="px-2 py-2">
            <TimelineSeparator className="mr-2">
                <TimelineDot className="bg-orange-950" />
                <TimelineConnector className="bg-orange-950" />
            </TimelineSeparator>
            <TimelineContent>
                <div className="flex justify-center items-center text-black">
                    <Image alt='politicalImage' src={item.imageUri} width={100} height={40} />
                    <div className="ml-4">
                        <p className="text-base">{item.date}</p>
                        <p className="text-base">{item.title}</p>
                        <p className="text-sm text-justify">{item.content}</p>
                    </div>
                </div>
            </TimelineContent>
        </TimelineItem>
        )
    })
}

function politicalCard(){
  return politicalList.map((item,index) => {
    return(
      <SwiperSlide key={item.id}>
        <Card className="mx-auto my-0" style={{ width: '20rem', backgroundColor:'transparent', marginBottom:'16px', height:'32rem' }}>
        <Card.Img variant="top" src={item.imageUri} style={{width:'250px', margin:'0 auto', marginTop:'20px'}} />
        <Card.Body>
          <Card.Title className="text-base">
              {item.date}
            <p className="text-base mb-0">
              {item.title}
            </p>
          </Card.Title>
          <Card.Text className="text-sm text-justify">
            {item.content}
          </Card.Text>
        </Card.Body>
      </Card>
    </SwiperSlide>
    )
  })
}

function News() {
  return (
    <main className="bg-[#EFE4DE] h-full font-mono">
      <Header category='news' />
      <div className="mb-8">
        <div className="flex justify-center items-center my-4 px-2 h-[60px]">
          <p className="text-3xl text-orange-950 flex justify-center items-center font-semibold">最新活動</p>
        </div>
        <div className="lg:w-1/2 md:w-[90%] sm:hidden md:block lg:block flex justify-center items-center my-0 mx-auto pb-5">
          <Timeline
          sx={{
              [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
              },
          }}
          >
          {timelineContent()}
          </Timeline>
        </div>
        <div className="lg:hidden md:hidden sm:block">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {politicalCard()}
          </Swiper>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default News;