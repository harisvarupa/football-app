"use client";
import Image from "next/image";
import { useState } from "react";
import { getRandomPlayer } from "../main-content";

export default function LeagueItem({ imagePath, width, onClick, bg }) {
  return (
    <button
      className={`${bg} flex h-auto justify-center items-center border-2 rounded-xl opacity-75 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300`}
      onClick={onClick}
    >
      <Image src={imagePath} width={width} height={150} />
    </button>
  );
}
