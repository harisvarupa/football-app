"use client";
import LeagueItem from "./league-item";
import axios from "axios";
import MainContent from "../main-content";

export default function LeagueTable() {
  return (
    <div className="grid grid-cols-5 grid-rows-3 gap-4 w-auto h-auto">
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
  );
}
