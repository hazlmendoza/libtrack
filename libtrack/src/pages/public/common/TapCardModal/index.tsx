import arrowDown from '../../../../assets/public/arrow-down.png';

function TapCard() {
  return (
    <footer className="w-full">
        <div className="bg-white flex flex-col items-center justify-center rounded-t-full py-2 md:py-4 lg:py-8">
          <p className="text-base font-semibold md:text-4xl lg:text-6xl lg:mb-6">
            TAP YOUR <span className="font-bold">LIBRARY CARD</span> HERE
          </p>
          <img src={arrowDown} alt="Arrow Down" className="w-10 md:w-20 lg:w-32" />
        </div>
      </footer>
  )
}

export default TapCard