import Header from "./header";

function Home() {
  return (
    <main className="bg-[#EFE4DE] h-screen">
      <Header />
      <div className="font-momo text-[#447FB3] font-semibold text-2xl"
      style={{ 
        backgroundImage: `url('/image/headerBackground.png')`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' }}
      >
          <p className="flex justify-center items-center">
            台灣的未來，喵先鋪路！
          </p>
          <p className="flex justify-center items-center">
            為喵星人，護台灣！
          </p>
        </div>
      <div className="w-full h-64" 
      style={{ 
        backgroundImage: `url('/image/banner.jpg')`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' }}
      >
      </div>
    </main>
  )
}

export default Home;