"use client";
import Image from "next/image";
import axios from "axios";
import getRandomPlayer from "../main-content";

export default function LeagueItem({ imagePath, altText, width }) {
  const putPlayer = () => {
    console.log(getRandomPlayer());
    imagePath = player.imagePath;
  };

  return (
    <div
      className="flex h-auto justify-center items-center border-2 border-pink-900 rounded-xl bg-pink-400 opacity-75 bg-opacity-15"
      onClick={putPlayer}
    >
      <Image
        src={imagePath}
        height={100}
        width={width}
        alt={altText}
        className="m-2"
      />
    </div>
  );
}
