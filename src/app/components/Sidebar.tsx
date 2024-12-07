import React from "react";
import Logo from "./Logo";

type SearchFilter = {
  name: string;
  type: "search";
  onChange: (value: string) => void;
  placeholder?: string;
};

type PlayersFilter = {
  name: string;
  type: "players";
  minPlayers: number;
  maxPlayers: number;
  onMinChange: (value: number) => void;
  onMaxChange: (value: number) => void;
};

type FilterType = SearchFilter | PlayersFilter;

type Props = {
  filters: FilterType[];
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar: React.FC<Props> = ({ filters, isOpen, onClose }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity lg:hidden z-30 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed lg:fixed top-0 left-0 h-full w-72 bg-[#2A2F43] p-6 transform transition-transform duration-300 ease-in-out lg:translate-x-0 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } overflow-y-auto`}
      >
        <div className="mb-8 hidden lg:block w-full">
          <div className="w-full">
            <Logo size="small" />
          </div>
        </div>
        <div className="flex justify-between items-center mb-6 lg:mb-6">
          <h2 className="text-xl font-medium text-white">Filters</h2>
          <button
            onClick={onClose}
            className="lg:hidden p-2 hover:bg-[#3A405A] rounded-lg transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {filters.map((filter, index) => (
          <div key={index} className="mb-6">
            <label className="block text-sm text-gray-400 mb-2">
              {filter.name}
            </label>

            {filter.type === "search" && (
              <input
                type="text"
                onChange={(e) => filter.onChange(e.target.value)}
                className="w-full bg-[#3A405A]/50 border-0 rounded-lg p-3 text-sm text-white placeholder-gray-500 focus:ring-2 focus:ring-[#F76C5E] focus:outline-none transition-all duration-200"
                placeholder={filter.placeholder}
              />
            )}

            {filter.type === "players" && (
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-xs text-gray-400 mb-1">
                    Min Players
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={filter.maxPlayers}
                    value={filter.minPlayers}
                    onChange={(e) =>
                      filter.onMinChange(parseInt(e.target.value) || 1)
                    }
                    className="w-full bg-[#3A405A]/50 border-0 rounded-lg p-3 text-sm text-white placeholder-gray-500 focus:ring-2 focus:ring-[#F76C5E] focus:outline-none transition-all duration-200"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-xs text-gray-400 mb-1">
                    Max Players
                  </label>
                  <input
                    type="number"
                    min={filter.minPlayers}
                    max={30}
                    value={filter.maxPlayers}
                    onChange={(e) =>
                      filter.onMaxChange(parseInt(e.target.value) || 1)
                    }
                    className="w-full bg-[#3A405A]/50 border-0 rounded-lg p-3 text-sm text-white placeholder-gray-500 focus:ring-2 focus:ring-[#F76C5E] focus:outline-none transition-all duration-200"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
