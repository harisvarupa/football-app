"use client";
import Image from "next/image";

export default function LeagueItem({
  imagePath,
  altText,
  width,
  assignedLeague,
}) {
  return (
    <div className="flex h-auto justify-center items-center border-2 border-pink-900 rounded-xl bg-pink-400 opacity-75 bg-opacity-15">
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
