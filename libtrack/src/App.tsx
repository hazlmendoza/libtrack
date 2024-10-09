import bgAsset from "./assets/public/background-pup.png";
import puplogo from "./assets/public/pup-logo.png";
import bookAsset from "./assets/public/student-book.png";
import Button from "./Components/Button";
import TapCard from "./pages/public/common/TapCardModal";


function App() {
  return (
    <div
      className="flex flex-col justify-center items-center h-screen bg-red bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${bgAsset})` }}
    >
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="py-4"></div>
        <div className="flex flex-col items-center justify-center">
          <img src={puplogo} alt="PUP Logo" className="w-40 h-auto py-6" />
          <p className="text-white text-2xl font-bold">MABUHAY,</p>
          <p className="text-white text-2xl font-bold">ISKOLAR NG BAYAN!</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={bookAsset} alt="Book" className="w-56 h-auto" />
        </div>
        <div className="mb-4 flex flex-col items-center justify-center">
          <p className="text-white text-xl font-bold">STUDENTS INSIDE:</p>
          <div className="bg-white rounded-full mt-3 w-32 py-1.5 flex items-center justify-center">
            <p className="text-3xl font-bold">45</p>
          </div>
        </div>
        <div className="mb-9 flex flex-col items-center justify-center text-white">
          <p className="text-2xl font-bold">December 4, 2024</p>
          <p className="text-6xl font-bold">10:53:06 PM</p>
        </div>
      </div>
      <Button variant="default" onClick={() => alert("Default Button Clicked")}>Default Button</Button>
      <Button variant="outline" onClick={() => alert("Default Button Clicked")}>Default Button</Button>
      <Button variant="destructive" onClick={() => alert("Default Button Clicked")}>Default Button</Button>
      <TapCard></TapCard>
    </div>
  );
}

export default App;