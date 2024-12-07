"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  name: string;
  description: string;
  screenshot: string;
  minPlayers: number;
  maxPlayers: number;
  rating: number;
  tags: string[];
  link: string;
};

const Card = ({
  name,
  description,
  screenshot,
  minPlayers,
  maxPlayers,
  rating,
  tags,
  link,
}: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 120; // Characters to show before truncating
  const shouldTruncate = description.length > maxLength;

  const truncatedDescription =
    shouldTruncate && !isExpanded
      ? `${description.slice(0, maxLength)}...`
      : description;

  return (
    <div className="group bg-[#3A405A]/50 backdrop-blur-sm hover:bg-[#3A405A]/70 transition-all duration-300 p-6 rounded-xl">
      <div className="relative w-full aspect-video mb-4 overflow-hidden rounded-lg">
        <Image
          src={screenshot}
          alt={name}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-300"
          unoptimized
        />
      </div>
      <h3 className="text-xl font-medium text-white mb-2">{name}</h3>
      <div className="space-y-2 mb-4">
        <p className="text-sm text-gray-300">
          {truncatedDescription}
          {shouldTruncate && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-1 text-[#F76C5E] hover:text-[#F76C5E]/80 transition-colors duration-200"
            >
              {isExpanded ? "View less" : "View more"}
            </button>
          )}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs rounded-full bg-[#4CAF9A]/20 text-[#4CAF9A]"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${
                i < rating ? "text-[#F76C5E]" : "text-gray-600"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-sm text-gray-400">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          <span>
            {minPlayers === maxPlayers
              ? minPlayers
              : `${minPlayers}-${maxPlayers}`}
          </span>
        </div>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full px-4 py-2.5 text-center text-sm font-medium text-white bg-[#F76C5E]/80 hover:bg-[#F76C5E] rounded-lg transition-colors duration-200"
      >
        Play Now
      </a>
    </div>
  );
};

export default Card;
