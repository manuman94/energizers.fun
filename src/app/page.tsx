"use client";

import React, { useState } from "react";
import Card from "./components/Card";
import Sidebar from "./components/Sidebar";
import Logo from "./components/Logo";
import gamesData from "../data/games.json";
import AddGameModal from "./components/AddGameModal";

const Home = () => {
  const [search, setSearch] = useState("");
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [minPlayers, setMinPlayers] = useState(1);
  const [maxPlayers, setMaxPlayers] = useState(30);
  const [isAddGameModalOpen, setAddGameModalOpen] = useState(false);

  const filteredGames = gamesData.filter((game) => {
    const searchTerm = search.toLowerCase();
    const matchesSearch =
      game.name.toLowerCase().includes(searchTerm) ||
      game.description.toLowerCase().includes(searchTerm) ||
      game.tags.some((tag) => tag.toLowerCase().includes(searchTerm));

    const matchesPlayers =
      game.maxPlayers >= minPlayers && game.minPlayers <= maxPlayers;

    return matchesSearch && matchesPlayers;
  });

  return (
    <div className="flex min-h-screen bg-[#1A1E2E]">
      <button
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        className={`lg:hidden fixed top-4 left-4 z-20 p-2 rounded-lg bg-[#2A2F43] hover:bg-[#3A405A] transition-all duration-200 ${
          isSidebarOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        aria-label="Toggle Sidebar"
      >
        <svg
          className="w-6 h-6 text-[#F76C5E]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
        filters={[
          {
            name: "Search Games",
            type: "search",
            onChange: setSearch,
            placeholder: "Search by name, description, or tags...",
          },
          {
            name: "Number of Players",
            type: "players",
            minPlayers,
            maxPlayers,
            onMinChange: setMinPlayers,
            onMaxChange: setMaxPlayers,
          },
        ]}
      />
      <main className="relative z-10 flex-1 p-8 lg:pl-80">
        <div className="mb-8 lg:hidden w-[300px]">
          <Logo size="large" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
          {filteredGames.map((game) => (
            <Card key={game.id} {...game} />
          ))}
        </div>
      </main>

      <button
        onClick={() => setAddGameModalOpen(true)}
        className="fixed bottom-8 right-8 z-40 p-4 text-white bg-[#4CAF9A]/90 hover:bg-[#4CAF9A] rounded-full shadow-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#4CAF9A]/50"
        aria-label="Add Game"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>

      <AddGameModal
        isOpen={isAddGameModalOpen}
        onClose={() => setAddGameModalOpen(false)}
      />
    </div>
  );
};

export default Home;
