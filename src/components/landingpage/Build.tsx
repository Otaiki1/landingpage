const Build = () => {
  return (
    <div className="pt-20">
      <p className="text-center text-6xl font-bold ">How We Buid</p>
      <div className="bg-[url('/assets/images/Background2.png')] bg-cover bg-center h-screen w-full relative ">
        <div>
          <img
            src="/assets/images/TextBg.png"
            alt="textbg"
            className="w-150 ml-85 pt-30"
          />
          <ul className="absolute top-43 left-93 text-3xl text-center space-y-10">
            <li>On-Chain and Player-First </li>
            <li>All major assets secured via blockchain</li>
            <li>Fair leaderboards with verifiable results</li>
            <li>Gas-efficient gameplay</li>
            <li> Player rewards through tokens and NFTs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Build;
