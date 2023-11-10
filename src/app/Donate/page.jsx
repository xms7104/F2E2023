'use client';
import React, { useState } from "react";
import Header from "../header";
import Footer from "../footer";
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

function Donate() {
    const [dollar, setDollar] = useState(0);
    const [donateName, setDonateName] = useState(null);
    const [show, setShow] = useState(false);
    const donateList = [
        {id:0, title:'喵星人之友', dollarText:'捐款新台幣600元', subtitle:'已有 9957 人贊助', dollar: 600},
        {id:1, title:'喵星大使', dollarText:'捐款新台幣6000元', subtitle:'已有 2000 人贊助', dollar: 6000},
        {id:2, title:'喵星傳奇', dollarText:'捐款新台幣60,000元', subtitle:'已有 999 人贊助', dollar: 60000},
    ];
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function donateOption(){
        return donateList.map((item) => {
            return(
                <div key={item.id+'_'+item.title} className="flex justify-between items-center xl:w-[32rem] md:w-[30rem] h-[50px] px-2 py-2 border-[1px] border-orange-950 rounded-md mb-4" onClick={() => {setDollar(item.dollar)}}>
                    <p className="xl:w-[40%] md:w-[35%] flex justify-start items-center mb-0">
                        {item.title}
                    </p>
                    <div className="flex justify-between items-center xl:w-[60%] md:w-[65%]">
                        <p className="xl:w-[55%] md:w-[50%] flex justify-start items-center mb-0">
                            {item.dollarText}
                        </p>
                        <p className="xl:w-[45%] md:w-[50%] flex justify-start items-center mb-0">
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
      <div className="xl:h-screen lg:h-full">
        <div className="text-black lg:flex md:block items-center w-[90%] mx-auto my-0 pt-8">
            <div className="xl:w-[65%] md:w-full grid justify-center items-center">
                {donateOption()}
                <div className="grid justify-between items-center h-[120px] px-4 py-4 border-[1px] border-orange-950 rounded-md mb-4">
                <p className="mb-2">自訂贊助金額</p>
                <div className="flex justify-start items-center bg-white border-[1px] border-solid border-orange-950 rounded-md px-2 py-2 mb-2">
                    <p className="mb-0">NT$</p>
                    <input type="text" className="bg-transparent ml-2 focus:border-transparent focus:outline-none" value={dollar} onChange={(e) => {setDollar(e.target.value)}}  />
                </div>
                </div>
            </div>
            <div className="w-[16px]"></div>
            <div className="grid lg:justify-start md:justify-center self-start">
                <Image alt='DonateImage' src='/image/donate.png' className="sm:hidden md:hidden lg:block" width={300} height={40} />
                <div className="flex justify-center items-end">
                    <button className="mb-0 w-[200px] h-[35px] border-2 border-solid border-orange-950 rounded-[20px] bg-[#FFE4E1] font-semibold hover:bg-orange-950 hover:text-[#FFE4E1]" onClick={handleShow}>
                        前往捐款
                    </button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header>
                        <Modal.Title>小額捐款</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="block">
                                <div className="flex justify-start items-center mb-4">
                                    <p className="mb-0 text-base">捐款人姓名：</p>
                                    <input type="text" className="border-[1px] border-solid border-orange-950 rounded-md px-2 py-2" onChange={(e) =>{ setDonateName(e.target.value); }} />
                                </div>
                                <div className="flex justify-start items-center mb-2">
                                    <p className="mb-0 text-base">捐款金額：{dollar}</p>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            取消捐款
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            確定捐款
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
        <div className="text-orange-950 grid justify-center content-center h-[150px]">
            <p className="flex justify-center items-center">
                目前小額贊助總金額
            </p>
            <p className="flex justify-center items-center text-2xl font-bold">
                $987,655,873
            </p>
        </div>
        <div className="text-orange-950">
            <p className="flex justify-center items-center text-2xl font-bold pb-4">
                您的小筆捐款，是每隻毛孩未來的大大動力！
            </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Donate;