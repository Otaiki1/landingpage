const About = () => {
  return (
    <div className="py-30 pl-15">
      <div className=" flex border-b border-[#F5F5F533] mr-30 ">
        <h1 className="text-4xl font-bold pr-15 pt-7 pb-15  ">
          Building worlds <br /> that Inspire
        </h1>
        <p className=" font-semibold border-l border-[#F5F5F533] pt-7 pl-15 ">
          We&apos;re Cracked Studio a game studio, building immersive, onchain
          games that break the <br /> mold. Our first title, Tweetle, is a
          Web-based, onchain word game where your guesses are <br /> forever a
          reimagined Wordle powered by blockchain logic. And that&apos;s just
          the beginning. <br /> More cracked experiences are in the pipeline.{" "}
          <br /> Whether you&apos;re here to play, build, or glitch the system
        </p>
      </div>
      <div className="flex">
        <div className="pt-10">
          <button className="explore-btn px-14  ">Explore Games</button>
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

export default About;
