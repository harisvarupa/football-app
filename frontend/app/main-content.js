"use-client";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import LeagueItem from "./components/league-item";
import Navbar from "./components/navbar";
import ParticlesComponent from "./components/particles";

export default function MainContent() {
  const [randomPlayer, setRandomPlayer] = useState("");
  let [showImage, setShowImage] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);
  const [plPlayerSelected, setPlPlayerSelected] = useState(false);
  const [plPlayer, setPlPlayer] = useState(
    "/images/leagues/premier-league.png"
  );
  const [llPlayerSelected, setLlPlayerSelected] = useState(false);
  const [llPlayer, setLlPlayer] = useState("/images/leagues/la-liga.png");
  const [saPlayerSelected, setSaPlayerSelected] = useState(false);
  const [saPlayer, setSaPlayer] = useState("/images/leagues/seria-a.png");
  const [blPlayerSelected, setBlPlayerSelected] = useState(false);
  const [blPlayer, setBlPlayer] = useState("/images/leagues/bundesliga.png");
  const [l1PlayerSelected, setL1PlayerSelected] = useState(false);
  const [l1Player, setL1Player] = useState("/images/leagues/league1.png");

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
      setPlPlayerSelected(true);
    }
  };
  const getLlPlayer = (league) => {
    if (league == true) {
      setLlPlayer(`/images/players/${randomPlayer.imagePath}`);
      setLlPlayerSelected(true);
    }
  };
  const getSaPlayer = (league) => {
    if (league == true) {
      setSaPlayer(`/images/players/${randomPlayer.imagePath}`);
      setSaPlayerSelected(true);
    }
  };
  const getBlPlayer = (league) => {
    if (league == true) {
      setBlPlayer(`/images/players/${randomPlayer.imagePath}`);
      setBlPlayerSelected(true);
    }
  };
  const getL1Player = (league) => {
    if (league == true) {
      setL1Player(`/images/players/${randomPlayer.imagePath}`);
      setL1PlayerSelected(true);
    }
  };

  return (
    <>
      <Navbar />
      <ParticlesComponent id="particles" className="z-0" />
      <div className="flex flex-col h-auto w-screen-xl items-center justify-center z-10">
        <div className="flex flex-col w-[90%] py-4 items-center justify-center z-10">
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
              width={plPlayerSelected ? "90" : "200"}
              bg={
                plPlayerSelected
                  ? "bg-lime-500 border-lime-700 bg-opacity-25 hover:bg-lime-600"
                  : "bg-pink-800 border-pink-900 bg-opacity-15 hover:bg-pink-800"
              }
            />
            <LeagueItem
              onClick={() => {
                getLlPlayer(randomPlayer.laLiga);
              }}
              imagePath={llPlayer}
              altText="la liga logo"
              width="90"
              bg={
                llPlayerSelected
                  ? "bg-lime-500 border-lime-700 bg-opacity-25 hover:bg-lime-600"
                  : "bg-pink-800 border-pink-900 bg-opacity-15 hover:bg-pink-800"
              }
            />
            <LeagueItem
              onClick={() => {
                getSaPlayer(randomPlayer.serieA);
              }}
              imagePath={saPlayer}
              altText="seria a logo"
              width={saPlayerSelected ? "93" : "130"}
              bg={
                saPlayerSelected
                  ? "bg-lime-500 border-lime-700 bg-opacity-25 hover:bg-lime-600"
                  : "bg-pink-800 border-pink-900 bg-opacity-15 hover:bg-pink-800"
              }
            />
            <LeagueItem
              onClick={() => {
                getBlPlayer(randomPlayer.bundesliga);
              }}
              imagePath={blPlayer}
              altText="bundesliga logo"
              width={blPlayerSelected ? "93" : "170"}
              bg={
                blPlayerSelected
                  ? "bg-lime-500 border-lime-700 bg-opacity-25 hover:bg-lime-600"
                  : "bg-pink-800 border-pink-900 bg-opacity-15 hover:bg-pink-800"
              }
            />
            <LeagueItem
              onClick={() => {
                getL1Player(randomPlayer.ligue1);
              }}
              imagePath={l1Player}
              altText="league1 logo"
              width={l1PlayerSelected ? "93" : "180"}
              bg={
                l1PlayerSelected
                  ? "bg-lime-500 border-lime-700 bg-opacity-25 hover:bg-lime-600"
                  : "bg-pink-800 border-pink-900 bg-opacity-15 hover:bg-pink-800"
              }
            />
            <LeagueItem
              imagePath="/images/leagues/champions-league.png"
              altText="premier league logo"
              width="110"
              bg={
                llPlayerSelected
                  ? "bg-lime-500 border-lime-700 bg-opacity-25 hover:bg-lime-600"
                  : "bg-pink-800 border-pink-900 bg-opacity-15 hover:bg-pink-800"
              }
            />
            <LeagueItem
              imagePath="/images/clubs/ac-milan.png"
              altText="la liga logo"
              width="100"
              bg={
                llPlayerSelected
                  ? "bg-lime-500 border-lime-700 bg-opacity-25 hover:bg-lime-600"
                  : "bg-pink-800 border-pink-900 bg-opacity-15 hover:bg-pink-800"
              }
            />
            <LeagueItem
              imagePath="/images/clubs/real-madrid.png"
              altText="seria a logo"
              width="120"
              bg={
                llPlayerSelected
                  ? "bg-lime-500 border-lime-700 bg-opacity-25 hover:bg-lime-600"
                  : "bg-pink-800 border-pink-900 bg-opacity-15 hover:bg-pink-800"
              }
            />
            <LeagueItem
              imagePath="/images/clubs/manchester-united.png"
              altText="bundesliga logo"
              width="90"
              bg={
                llPlayerSelected
                  ? "bg-lime-500 border-lime-700 bg-opacity-25 hover:bg-lime-600"
                  : "bg-pink-800 border-pink-900 bg-opacity-15 hover:bg-pink-800"
              }
            />
            <LeagueItem
              imagePath="/images/nations/brazil.png"
              altText="league1 logo"
              width="100"
              bg={
                llPlayerSelected
                  ? "bg-lime-500 border-lime-700 bg-opacity-25 hover:bg-lime-600"
                  : "bg-pink-800 border-pink-900 bg-opacity-15 hover:bg-pink-800"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
