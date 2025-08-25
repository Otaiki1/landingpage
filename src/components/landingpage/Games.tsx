const Games = () => {
  return (
    <div>
      <p className="text-center text-6xl font-bold ">Our Games</p>
      <div className="bg-[url('/assets/images/Background.png')] bg-cover bg-center h-screen w-full ">
        <img
          src="/assets/images/Games.png"
          alt="Games-img"
          className="w-150 ml-90 pt-15"
        />
        <img
          src="/assets/images/Title.png"
          alt="title"
          className="ml-150 pt-8"
        />
        <div className="text-center">
          <ul className="list-disc list-inside pl-8 pt-2">
            <li>Daily puzzles, leaderboard competitions, NFT achievements.</li>
            <li>Play on web.</li>
            <li>250+ active players.</li>
          </ul>
          <div className="pt-5 ml-2">
            <button className="explore-btn px-14  ">Explore Games</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
