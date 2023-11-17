'use client';
import React, { useState } from "react";
import Header from "../header";
import Footer from "../footer";
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Mail() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [errorMessage, setErrorMessage] = useState([]);

  var taiwanPhoneRegex = /^(\+?886\-?|0)(9\d{8})$/;
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  function postCheck(){
    let error = []
    console.log(name, phone, taiwanPhoneRegex.test(phone), email, emailRegex.test(email), content)
    if(name === ''){ error.push('請輸入您的姓名'); }

    if(phone === ''){ 
      error.push('請輸入您的電話'); 
    }else if(phone !== '' && !taiwanPhoneRegex.test(phone)){
      error.push('請檢查您的手機格式'); 
    }

    if(email === ''){ 
      error.push('請輸入您的 email'); 
    }else if(email !== '' && !emailRegex.test(email)){
      error.push('請檢查您的 email 格式'); 
    }

    if(content === ''){
      error.push('請輸入您的建言'); 
    }

    console.log(error)
    let uniqueArray = [...new Set(error)];
    setErrorMessage(uniqueArray);
    setShow(true);
  }


  function postLayout(){
    if(errorMessage.length  === 0){
      return(
        <Modal show={show} onHide={() =>{ setShow(false); }}>
        <Modal.Body>
          <div className="grid justify-center items-center">
              <div className="flex justify-center items-center">
                <p className="mb-0 text-lg">謝謝您的建議！</p>
              </div>
              <div className="flex justify-center items-center">
                <Image alt='DonateSuccess' src={'/image/mailSuccess.png'} width={120} height={40} />
              </div>
             
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" 
          onClick={() =>{
              setName('');
              setPhone('');
              setEmail('');
              setContent('');
              setShow(false);
          }}>
            關閉
          </Button>
        </Modal.Footer>
      </Modal>
      )
    }else{
      function error(){
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
      return(
        <Modal show={show} onHide={() =>{ setShow(false); }}>
        <Modal.Body>
          <div className="grid justify-center items-center">
              {error()}
              <div className="grid justify-center items-center">
                <Image alt='DonateSuccess' src={'/image/mailError.png'} width={110} height={40} />
              </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" 
          onClick={() =>{ 
              setShow(false);
          }}>
            關閉
          </Button>
        </Modal.Footer>
      </Modal>
      )
    }
  }

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
            <input type="text" className="w-full px-2 py-2 mb-2 rounded-md" value={name} onChange={(e) => {setName(e.target.value);}} />
          </div>
          <div className="text-orange-950 my-2">
            <p className="mb-2">您的電話：</p>
            <input type="text" className="w-full px-2 py-2 mb-2 rounded-md" value={phone} onChange={(e) => {setPhone(e.target.value);}} />
          </div>
          <div className="text-orange-950 my-2">
            <p className="mb-2">您的電子郵件：</p>
            <input type="email" className="w-full px-2 py-2 mb-2 rounded-md" value={email} onChange={(e) => {setEmail(e.target.value);}} />
          </div>
          <div className="text-orange-950 my-2">
            <p className="mb-2">您的建言：</p>
            <textarea type="text" className="w-full h-[200px] px-2 py-2 mb-2 resize-none rounded-md" value={content} onChange={(e) => {setContent(e.target.value);}} />
          </div>
          <div className="flex justify-center items-center">
            <button className="text-orange-950 border-orange-950 font-semibold bg-[#FFE4E1] border-[1px] border-solid rounded-[20px] px-1 py-1 w-[100px] hover:text-[#FFE4E1] hover:bg-orange-950"
            onClick={() => { postCheck(); }}>
              送出
            </button>
          </div>
        </div>
      </div>
        {postLayout()}
      <Footer />
    </main>
  )
}

export default Mail;