import arrowDown from '../../../../assets/public/arrow-down.png';

function TapCard() {
  return (
    <footer className="w-full">
        <div className="bg-white flex flex-col items-center justify-center rounded-t-full py-4">
          <p className="text-4xl font-semibold">
            TAP YOUR <span className="font-bold">LIBRARY CARD</span> HERE
          </p>
          <img src={arrowDown} alt="Arrow Down" className="w-16" />
        </div>
      </footer>
  )
}

export default TapCard