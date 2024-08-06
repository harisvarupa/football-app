"use-client";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import LeagueItem from "./components/league-item";
import Navbar from "./components/navbar";

export default function MainContent() {
  const [randomPlayer, setRandomPlayer] = useState("");
  let [showImage, setShowImage] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);
  const [playerSelected, setPlayerSelected] = useState(false);
  const [plPlayer, setPlPlayer] = useState(
    "/images/leagues/premier-league.png"
  );

  var playerId = Math.floor(Math.random() * 5 + 1);

  const getRandomPlayer = () => {
    setShowImage(false);
    axios
      .get(`http://localhost:5176/api/player/${playerId}`)
      .then((res) => {
        setRandomPlayer(res.data);
        setGameStarted(true);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPlPlayer = (league) => {
    if (league == true) {
      setPlPlayer(`/images/players/${randomPlayer.imagePath}`);
      setPlayerSelected(true);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col h-auto w-screen-xl items-center justify-center">
        <div className="flex flex-col w-[90%] py-4 items-center justify-center">
          {showImage ? (
            <Image
              src={`/images/player_outline.png`}
              width={220}
              height={250}
              alt="player outline"
              className="mb-10"
            />
          ) : (
            <Image
              src={`/images/players/${randomPlayer.imagePath}`}
              width={220}
              height={220}
              alt="player image"
              className="mb-10"
            />
          )}
          {!gameStarted ? (
            <button
              onClick={getRandomPlayer}
              className="bg-pink-800 hover:bg-pink-700 text-white font-bold py-2 px-4 border-b-4 border-pink-900 hover:border-pink-800 rounded"
            >
              Start Game
            </button>
          ) : (
            <button
              onClick={getRandomPlayer}
              className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-600 rounded"
            >
              Next Player →
            </button>
          )}
        </div>
        <div className="flex w-[90%] h-full items-center justify-center">
          <div className="grid grid-cols-5 grid-rows-3 gap-4 h-[100%] w-[60%]">
            <LeagueItem
              onClick={() => {
                getPlPlayer(randomPlayer.premierLeague);
              }}
              imagePath={plPlayer}
              altText="premier league logo"
              width={playerSelected ? "90" : "200"}
              bg={
                playerSelected
                  ? "bg-lime-500 border-lime-700 bg-opacity-25"
                  : "bg-pink-800 border-pink-900 bg-opacity-15"
              }
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
            <LeagueItem
              imagePath="/images/leagues/champions-league.png"
              altText="premier league logo"
              width="110"
            />
            <LeagueItem
              imagePath="/images/clubs/ac-milan.png"
              altText="la liga logo"
              width="100"
            />
            <LeagueItem
              imagePath="/images/clubs/real-madrid.png"
              altText="seria a logo"
              width="120"
            />
            <LeagueItem
              imagePath="/images/clubs/manchester-united.png"
              altText="bundesliga logo"
              width="90"
            />
            <LeagueItem
              imagePath="/images/nations/brazil.png"
              altText="league1 logo"
              width="100"
            />
          </div>
        </div>
      </div>
    </>
  );
}
