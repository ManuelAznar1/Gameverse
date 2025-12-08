import React, { useState } from "react";
import Carousel from "./assets/componentes/Carrousel";
import GameCard from "./assets/componentes/Gamecard";
import Sidebar from "./assets/componentes/Sidebar";
import { slides, gamesData } from "./assets/componentes/Constants";

const PaginaPrincipal: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // El filtro ahora detecta que 'g' es de tipo 'Game' y permite acceder a 'title'
  const filteredGames = gamesData.filter((g) =>
    g.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#2d2d2d] text-white font-sans relative">
      <header className="p-6 flex justify-between items-center sticky top-0 z-50 bg-[#2d2d2d] h-20 shadow-md">
        {!isSearchOpen ? (
          <>
            <button onClick={() => setIsMenuOpen(true)} className="text-3xl hover:text-[#48daff]">☰</button>
            <span className="font-bold text-2xl tracking-wide">GAMEVERSE</span>
            <button onClick={() => setIsSearchOpen(true)} className="text-3xl hover:text-[#48daff]">🔍</button>
          </>
        ) : (
          <div className="flex w-full items-center gap-4">
            <input autoFocus type="text" placeholder="Buscar juegos..." value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-gray-800 p-2 rounded-lg outline-none" />
            <button onClick={() => { setIsSearchOpen(false); setSearchQuery(""); }}>✕</button>
          </div>
        )}
      </header>

      <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {!searchQuery && <Carousel slides={slides} />}

      <main className="px-6 pb-20 mt-8">
        <h3 className="text-2xl font-bold mb-6 border-l-4 border-[#48daff] pl-4 uppercase">
            {searchQuery ? `Resultados: "${searchQuery}"` : "Populares"}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredGames.slice(0, 8).map(game => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default PaginaPrincipal;
