'use client';
import React, { useEffect, useState } from "react";
import Header from "../header";
import Footer from "../footer";
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Donate() {
    const [dollar, setDollar] = useState(0);
    const [donateName, setDonateName] = useState('');
    const [show, setShow] = useState(false);
    const [donateTitle, setDonateTitle] = useState(null);
    const [textChange, setTextChange] = useState('#431407');
    const [bgColorChange, setBgColorChange] = useState('#EFE4DE');
    const [post, setPost] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const donateList = [
        {id:0, title:'喵星人之友', dollarText:'捐款新台幣600元', subtitle:'已有 9957 人贊助', dollar: 600 },
        {id:1, title:'喵星大使', dollarText:'捐款新台幣6000元', subtitle:'已有 2000 人贊助', dollar: 6000 },
        {id:2, title:'喵星傳奇', dollarText:'捐款新台幣60,000元', subtitle:'已有 999 人贊助', dollar: 60000 },
    ];

    useEffect(() =>{
        if(dollar != 600 && dollar != 6000 && dollar != 60000 && dollar != 0 ){
            setTextChange('#EFE4DE');
            setBgColorChange('#431407');
        }else{
            setTextChange('#431407');
            setBgColorChange('#EFE4DE');
        }
    },[dollar])

    function donateOption(){
        return donateList.map((item) => {
            let text = dollar !== item.dollar ? '#431407' : '#EFE4DE';
            let bgColor = dollar !== item.dollar ? '#EFE4DE' : '#431407';
            return(
                <div 
                key={item.id+'_'+item.title} 
                className="cursor-pointer flex md:justify-between sm:justify-center items-center xl:w-[32rem] md:w-[30rem] md:h-[50px] sm:w-full sm:h-auto px-2 py-2 border-[1px] border-orange-950 rounded-md mb-4" 
                style={{backgroundColor:bgColor, color: text}}
                onClick={() => {
                    if(dollar === item.dollar){
                        setDonateTitle(null);
                        setDollar(0);
                    }else{
                        setDonateTitle(item.title);
                        setDollar(item.dollar);
                    }
                }}>
                    <div className="sm:flex md:hidden sm:w-[180px] justify-start md:items-center">
                        <Image src='/image/DonateIcon.png' alt="DonateIcon" width={100} height={40} />
                    </div>
                    <div className="md:flex md:justify-center md:items-center md:w-full">
                        <p className="xl:w-[40%] md:w-[35%] lg:auto flex justify-start items-center mb-0">
                            {item.title}
                        </p>
                        <div className="md:flex md:justify-between md:items-center sm:block xl:w-[60%] md:w-[65%]">
                            <p className="xl:w-[55%] md:w-[50%] flex justify-start items-center mb-0">
                                {item.dollarText}
                            </p>
                            <p className="xl:w-[45%] md:w-[50%] sm:w-[180px] flex justify-start items-center mb-0">
                                {item.subtitle}
                            </p>
                        </div>
                    </div>
                </div>
            )
        })
    }

    function postDonte(){
        if(donateName !== '' && dollar !==0 && dollar !==''){
            setPost('success');
        }else if(donateName === '' && dollar !==0){
            setPost('error');
            setErrorMessage(['請填寫捐款人名字']) ;
        }else if(donateName !== '' && dollar === 0){
            setPost('error');
            setErrorMessage(['捐款金款不能為 0']);
        }else{
            setPost('error');
            setErrorMessage(['請填寫捐款人名字', '捐款金款不能為 0']) ;
        }
    }

    function successDonate(){
        return(
            <>
                <Modal.Body>
                    <div className="grid justify-center items-center">
                        <div className="flex justify-center items-center">
                            <p className="mb-0 text-lg">捐款成功</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <p className="mb-0 text-lg">謝謝您的捐贈</p>
                        </div>
                        <Image alt='DonateSuccess' src={'/image/donateSuccess.png'} width={100} height={40} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" 
                    onClick={() =>{ 
                        setShow(false);
                        setPost(null);
                        setDonateName(''); 
                        setDollar(0); 
                    }}>
                        關閉
                    </Button>
                </Modal.Footer>
            </>
        )
    }

    function errorDonate(){
        if(errorMessage.length !== 0){
            return errorMessage.map((item, index) => {
                return(
                    <div key={item + '_' +index} className="flex mb-1 justify-start md:items-center">
                        <p className="flex justify-center items-center mb-0 mr-1 text-red-600">
                            <FontAwesomeIcon icon={faXmark} />
                        </p>
                        <p className="flex justify-center items-center text-sm text-red-600 mb-0">
                            {item}
                        </p>
                    </div>
                )
            })
        }
    }

  return (
    <main className="bg-[#EFE4DE] h-full font-mono">
      <Header category='donate' />
      <div className="flex justify-center items-center my-4 px-2 h-[60px]">
        <p className="text-3xl text-orange-950 flex justify-center items-center font-semibold">小額捐款</p>
      </div>
      <div className="xl:h-screen lg:h-full">
        <div className="lg:flex md:block items-center w-[90%] mx-auto my-0 lg:pt-8 sm:pt-0 md:pt-0">
            <div className="xl:w-[65%] md:w-full md:grid sm:flex sm:flex-wrap justify-center items-center">
                {donateOption()}
                <div 
                className="md:grid lg:grid xl:grid sm:flex justify-between items-center h-[120px] md:px-4 md:py-4 border-[1px] border-orange-950 rounded-md mb-4 sm:w-full sm:px-2 sm:py-2"
                style={{backgroundColor:donateTitle === 'other' ? bgColorChange : '#EFE4DE'}}
                >
                    <div className="sm:flex sm:justify-between sm:items-center sm:w-[80%] sm:mx-auto sm:my-0 md:w-full lg:w-full xl:w-full">
                        <div className="sm:flex md:hidden sm:w-[180px] justify-start md:items-center sm:w-[50%]">
                            <Image src='/image/DonateIcon.png' alt="DonateIcon" width={100} height={40} />
                        </div>
                        <div className="sm:block md:grid md:w-[28rem] md:justify-between md:items-center sm:w-[50%]">
                            <p className="mb-2" style={{ color: donateTitle === 'other' ? textChange : '#431407' }}>自訂贊助金額</p>
                            <div className="flex justify-start items-center bg-white border-[1px] border-solid border-orange-950 rounded-md px-2 py-2 mb-2">
                                <p className="mb-0">NT$</p>
                                <input type="number" className="bg-transparent ml-2 focus:border-transparent focus:outline-none" value={dollar} onChange={(e) => {setDollar(e.target.value); setDonateTitle('other');}}  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[16px]"></div>
            <div className="grid lg:justify-start md:justify-center self-start">
                <Image alt='DonateImage' src='/image/donate.png' className="sm:hidden md:hidden lg:block" width={300} height={40} />
                <div className="flex justify-center items-end">
                    <button className="mb-0 w-[200px] h-[35px] border-2 border-solid border-orange-950 rounded-[20px] bg-[#FFE4E1] font-semibold hover:bg-orange-950 hover:text-[#FFE4E1]" onClick={() =>{setShow(true);}}>
                        前往捐款
                    </button>
                    <Modal show={show} onHide={() =>{ setShow(false); }}>
                        <Modal.Header>
                        <Modal.Title>小額捐款</Modal.Title>
                        </Modal.Header>
                        {
                            post === 'success' ? 
                                successDonate()
                            :(
                                <>
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
                                    { post === 'error' ? 
                                    (
                                        <div>
                                            {errorDonate()}
                                        </div>
                                    ) : null}
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" 
                                    onClick={() =>{ 
                                        setShow(false);
                                        setPost(null);
                                        setDonateName(''); 
                                        setDollar(0); 
                                    }}>
                                        取消捐款
                                    </Button>
                                    <Button variant="primary" onClick={() => { postDonte(); }}>
                                        確定捐款
                                    </Button>
                                </Modal.Footer>
                                </>
                            )
                        }
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
            <p className="flex justify-center items-center text-2xl font-bold pb-4 sm:text-sm">
                您的小筆捐款，是每隻毛孩未來的大大動力！
            </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Donate;