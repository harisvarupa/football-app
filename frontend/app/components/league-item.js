"use client";
import Image from "next/image";
import { useState } from "react";
import { getRandomPlayer } from "../main-content";

export default function LeagueItem({ imagePath, width, onClick, bg }) {
  return (
    <button
      className={`${bg} flex h-auto justify-center items-center border-2 border-pink-900 rounded-xl opacity-75 bg-opacity-15`}
      onClick={onClick}
    >
      <Image src={imagePath} width={width} height={150} />
    </button>
  );
}
