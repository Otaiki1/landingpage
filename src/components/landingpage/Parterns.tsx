const Parterns = () => {
  return (
    <div className="py-30 pl-15">
      <div className=" flex border-b border-[#F5F5F533] mr-30 ">
        <h1 className="text-4xl font-bold pr-17.75 pt-7 pb-15  ">
          Partner with us
        </h1>
        <p className=" font-semibold border-l border-[#F5F5F533] pt-7 pl-15 pb-5 ">
          For potential sponsors, blockchain networks, and collaborators:
          <ul className="list-disc pl-8 pt-2">
            <li>Open to chain partnerships.</li>
            <li>Seeking sponsors for tournaments.</li>
            <li>SDK integration opportunities.</li>
          </ul>
        </p>
      </div>
      <div className="flex">
        <div className="pt-10">
          <button className="explore-btn px-14  ">Partner with us</button>
        </div>

        <div className="ml-25 pl-15 border-l border-[#F5F5F533]">
          <p className="text-2xl font-bold pt-8">Highlights</p>
          <div className="pt-5 flex gap-10">
            <div className="border rounded-2xl relative">
              <img
                src="/assets/images/Sec3.png"
                alt="cardimg"
                className="w-50 h-60 z-0 rounded-2xl "
              />
              <p className="bg-[#000000E5] absolute top-51 py-2 w-full text-center text-sm z-40 ">
                +3 games in development
              </p>
            </div>
            <div className="border rounded-2xl relative">
              <img
                src="/assets/images/Sec2.png"
                alt="cardimg"
                className="w-50 h-60 z-0 rounded-2xl "
              />
              <p className="bg-[#000000E5] absolute top-51 py-2 w-full text-center text-sm z-40 ">
                +250 active tweetle players
              </p>
            </div>
            <div className="border rounded-2xl relative">
              <img
                src="/assets/images/Sec1.png"
                alt="cardimg"
                className="w-50 h-60 z-0 rounded-2xl "
              />
              <p className="bg-[#000000E5] absolute top-51 py-2 w-full text-center text-sm z-40 ">
                expanding to multi-chain
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parterns;
