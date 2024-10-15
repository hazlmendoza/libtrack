import TapCard from "../common/TapCardModal";
import bgAsset from "../../../../src/assets/public/background-pup.png";
import puplogo from "../../../../src/assets/public/pup-logo.png";
import bookAsset from "../../../../src/assets/public/student-book.png";

function Student() {
  return (
    <>
      <div
        className={`font-defaultfont place-items-center grid-rows-[1fr_auto_1fr] grid grid-cols-1
         w-screen h-screen bg-red bg-fixed bg-cover bg-center`}
        style={{ backgroundImage: `url(${bgAsset})` }}
      >
        <div className="my-6 w-20 h-auto md:w-40 md:my-8 lg:w-80 lg:my-20">
          <img src={puplogo} alt="PUP Logo" className="w-full h-auto" />
        </div>

        <div className="flex-grow flex flex-col items-center justify-between">
          <div className="flex flex-col items-center text-white text-base font-bold md:text-3xl lg:text-6xl">
            <p>MABUHAY,</p>
            <p>ISKOLAR NG BAYAN!</p>
          </div>
          <img
            src={bookAsset}
            alt="Book"
            className="my-2 w-64 h-auto md:w-8/12 lg:w-9/12"
          />

          <div className="w-full flex flex-col items-center justify-center">
            <p className="text-sm text-white font-bold md:text-2xl lg:text-4xl">
              STUDENTS INSIDE:
            </p>
            <div className="bg-white rounded-full w-full  flex items-center justify-center text-lg font-bold md:text-4xl md:w-6/12 md:py:2 lg:text-7xl lg:w-8/12 lg:mt-6">
              <p>45</p>
            </div>
          </div>
        </div>
        <div className="flex flex-grow flex-col items-center justify-center text-white">
          <p className="text-xl font-bold md:text-3xl lg:text-6xl">
            December 4, 2024
          </p>
          <p className="text-5xl font-bold md:text-7xl lg:text-[150px]">
            10:53:06 PM
          </p>
        </div>
        <TapCard></TapCard>
      </div>
    </>
  );
}

export default Student;
