import React from "react";

interface GameCardProps {
  title: string;
  desc: string;
  image?: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, desc, image }) => (
  <div className="flex flex-col cursor-pointer group">
    <div className="aspect-square bg-gray-700 rounded-lg overflow-hidden relative shadow-lg group-hover:ring-4 ring-[#48daff]/50 transition-all">
      {image ? (
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="w-full h-[2px] bg-white rotate-45 absolute"></div>
          <div className="w-full h-[2px] bg-white -rotate-45 absolute"></div>
        </div>
      )}
    </div>
    <h4 className="mt-4 font-bold text-lg uppercase tracking-tighter transition-colors group-hover:text-[#48daff]">{title}</h4>
    <p className="text-gray-400 text-sm">{desc}</p>
  </div>
);

export default GameCard;