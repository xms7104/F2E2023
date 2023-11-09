'use client';
import Header from "./header";

function Home() {
  return (
    <main className="bg-[#EFE4DE] lg:h-screen md:h-full">
      <Header category='home' />

      <div className="font-momo text-[#447FB3] font-bold lg:text-3xl dm:text-lg"
      style={{ 
        backgroundImage: `url('/image/headerBackground1.png')`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center' }}
      >
        <p className="flex justify-center items-center px-2 md:pb-2 md:pb-0 md:h-[100px] md:h-[50px]">
          台灣的未來，喵先鋪路！
        </p>
        <p className="flex justify-center items-center px-2 py-2 mb-0 md:pb-0 h-[50px]">
          為喵星人，護台灣！
        </p>
      </div>

      <div className="w-full h-64" 
      style={{ 
        backgroundImage: `url('/image/banner.png')`, 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center' }}
      >
      </div>

      <div className="w-full xl:h-[300px] lg:h-[350px] md:pb-8 lg:flex md:grid lg:justify-between md:justify-center lg:items-center md:items-start lg:items-center text-black px-4 py-2 bg-[#EFE4DE] md:mt-8">
        <div className="lg:w-1/2 md:w-full grid justify-center items-center text-black font-serif">
          <p className="text-3xl font-semibold flex justify-center items-center px-2 py-2">喵立翰</p>
          <p className="text-base px-2 py-2 flex justify-center items-center">MIAO LI - HAN</p>
          <p className="text-base px-1 py-1 flex justify-center items-center">立法委員候選人</p>
        </div>
        <div className="lg:w-1/2 md:w-[80%] md:mx-auto md:my-0 text-base">
          <p className="lg:block md:hidden">主張</p>
          <hr className="lg:w-[50%] md:w-[80%] border-1 border-solid border-black mt-4 mb-4" />
          <p className="lg:w-[80%] md:w-[90%] text-justify">
            我堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。
          </p>
          <br />
          <p className="lg:w-[80%] md:w-[90%] text-justify">
            因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
          </p>
        </div>
      </div>
    </main>
  )
}

export default Home;