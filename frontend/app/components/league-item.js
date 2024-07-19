"use client";
import Image from "next/image";

export default function LeagueItem({ imagePath, altText, width }) {
  return (
    <div className="flex items-center justify-center border-2 border-pink-900 rounded-2xl aspect-square bg-pink-400 opacity-75 bg-opacity-15">
      <Image
        src={imagePath}
        height={100}
        width={width}
        alt={altText}
        className=""
      />
    </div>
  );
}
