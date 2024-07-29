"use-client";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import LeagueItem from "./components/league-item";
import LeagueTable from "./components/league-table";

export default function MainContent() {
  const [player, setRandomPlayer] = useState("");
  let [showImage, setShowImage] = useState(true);
  const [isActive, setIsActive] = useState(false);

  let activePlayer;
  let activePlayerImagePath;

  const getRandomPlayer = () => {
    setShowImage(false);
    setIsActive(true);
    var playerId = Math.floor(Math.random() * 5 + 1);
    axios
      .get(`http://localhost:5176/api/player/${playerId}`)
      .then((res) => {
        console.log(isActive);
        console.log(res.data);
        activePlayer = setRandomPlayer(res.data);
        activePlayerImagePath = player.imagePath;
        console.log(activePlayerImagePath);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center">
      <div className="flex flex-col w-[90%] py-4 items-center justify-center">
        {showImage ? (
          <Image
            src={`/images/player_outline.png`}
            width={200}
            height={250}
            alt="player outline"
            className="mb-10"
          />
        ) : (
          <Image
            src={`/images/players/${player.imagePath}`}
            width={220}
            height={220}
            alt="player image"
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
      <div className="flex w-[90%] h-full items-center justify-center">
        <LeagueTable />
      </div>
    </div>
  );
}
