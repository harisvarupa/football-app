"use-client";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import LeagueItem from "./components/league-item";

export default function MainContent() {
  const [player, setRandomPlayer] = useState("");
  let [showImage, setShowImage] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const getRandomPlayer = () => {
    setShowImage(false);
    setIsActive(true);
    var playerId = Math.floor(Math.random() * 5 + 1);
    axios
      .get(`http://localhost:5176/api/player/${playerId}`)
      .then((res) => {
        console.log(isActive);
        console.log(res.data);
        setRandomPlayer(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center">
      <div className="flex flex-col w-[90%] h-auto mb-10 items-center justify-center">
        {showImage ? (
          <Image
            src={`/images/player_outline.png`}
            width={307}
            height={307}
            alt="player outline"
            className="mb-10"
          />
        ) : (
          <Image
            src={`/images/players/${player.imagePath}`}
            width={220}
            height={220}
            alt="player outline"
            className="mb-10"
          />
        )}
        <button
          onClick={getRandomPlayer}
          class="bg-pink-800 hover:bg-pink-700 text-white font-bold py-2 px-4 border-b-4 border-pink-900 hover:border-pink-800 rounded"
        >
          Start Game
        </button>
      </div>
      <div className="flex flex-row w-[90%] h-auto">
        <div className="grid grid-cols-5 w-full gap-8 px-48">
          <LeagueItem
            imagePath="/images/leagues/premier-league.png"
            altText="premier league logo"
            width="200"
          />
          <LeagueItem
            imagePath="/images/leagues/la-liga.png"
            altText="la liga logo"
            width="95"
          />
          <LeagueItem
            imagePath="/images/leagues/seria-a.png"
            altText="seria a logo"
            width="130"
          />
          <LeagueItem
            imagePath="/images/leagues/bundesliga.png"
            altText="bundesliga logo"
            width="170"
          />
          <LeagueItem
            imagePath="/images/leagues/league1.png"
            altText="league1 logo"
            width="180"
          />
        </div>
      </div>
    </div>
  );
}
