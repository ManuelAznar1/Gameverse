import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaginaPrincipal: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // --- Lógica de Búsqueda ---
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const slides = [
    { subtitle: "Oferta destacada", title: "¡40% DE DESCUENTO!", btnText: "COMPRAR AHORA", bgColor: "bg-[#c4c4c4]" },
    { subtitle: "Novedad", title: "CYBERPUNK 2077", btnText: "RESERVAR YA", bgColor: "bg-[#f3e600]" },
    { subtitle: "Evento especial", title: "TORNEO LEAGUE OF LEGENDS", btnText: "INSCRIBIRSE", bgColor: "bg-[#1d2328]" }
  ];

  const gamesData = [
    { id: 1, title: 'FESGEG', desc: 'Abidirtute' },
    { id: 2, title: 'EDBOB', desc: 'Dappalise fliades' },
    { id: 3, title: 'SEOOOB', desc: 'Alex Soe' },
    { id: 4, title: 'EEOOOS', desc: 'Spaioosens' },
    { id: 5, title: 'BBIRO', desc: 'Viecasdo Pyentes' },
    { id: 6, title: 'DOOCOR', desc: 'Newobna Gaame' },
    { id: 7, title: 'SALIJE', desc: 'Tite Bapteeise' },
    { id: 8, title: 'ALBERTO', desc: 'Bietioua Tarple' }
  ];

  // Filtrar juegos en base a la búsqueda
  const filteredGames = gamesData.filter(game => 
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#2d2d2d] text-white font-sans relative">
      
      {/* HEADER DINÁMICO */}
      <header className="p-6 flex justify-between items-center bg-[#2d2d2d] sticky top-0 z-50 h-20">
        {!isSearchOpen ? (
          <>
            <button onClick={() => setIsMenuOpen(true)} className="text-3xl hover:text-[#48daff]">☰</button>
            <span className="font-bold text-2xl tracking-wide transition-all">GAMEVERSE</span>
            <button onClick={() => setIsSearchOpen(true)} className="text-3xl hover:text-[#48daff]">🔍</button>
          </>
        ) : (
          <div className="flex w-full items-center gap-4 animate-fade-in">
            <input 
              autoFocus
              type="text"
              placeholder="Buscar juegos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-gray-800 p-2 rounded-lg outline-none focus:ring-4 focus:ring-[#48daff]/40 text-lg"
            />
            <button onClick={() => {setIsSearchOpen(false); setSearchQuery("");}} className="text-xl font-bold">✕</button>
          </div>
        )}
      </header>

      {/* MENÚ LATERAL (Igual que antes) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex">
          <div className="w-64 bg-[#2d2d2d] h-full p-6 shadow-2xl">
            <button onClick={() => setIsMenuOpen(false)} className="text-2xl mb-10">✕ Cerrar</button>
            <nav className="flex flex-col gap-6 text-xl">
              <button onClick={() => {navigate('/home'); setIsMenuOpen(false)}} className="text-left hover:text-[#48daff]">Inicio</button>
              <button onClick={() => navigate('/descargas')} className="text-left hover:text-[#48daff]">Descargas</button>
              <button onClick={() => navigate('/deseados')} className="text-left hover:text-[#48daff]">Deseados</button>
              <button onClick={() => navigate('/contacto')} className="text-left hover:text-[#48daff]">Contacto</button>
            </nav>
          </div>
          <div className="flex-grow" onClick={() => setIsMenuOpen(false)}></div>
        </div>
      )}

      {/* CARRUSEL FUNCIONAL (Solo se muestra si no hay búsqueda activa) */}
      {!searchQuery && (
        <section className="px-6 mb-12 relative group animate-fade-in">
          <div className={`w-full ${slides[currentSlide].bgColor} rounded-sm p-12 h-[350px] flex flex-col justify-center items-start transition-all`}>
            <span className="text-gray-800 font-bold uppercase text-sm mb-2">{slides[currentSlide].subtitle}</span>
            <h2 className="text-5xl font-extrabold text-white mb-8">{slides[currentSlide].title}</h2>
            <button className="bg-[#d13076] hover:bg-[#b02663] text-white px-10 py-3 rounded-md font-bold">
              {slides[currentSlide].btnText}
            </button>
          </div>
          <div className="flex justify-center gap-3 mt-4">
            {slides.map((_, index) => (
              <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-[#48daff]' : 'bg-gray-500'}`} />
            ))}
          </div>
        </section>
      )}

      {/* SECCIONES DE JUEGOS FILTRADOS */}
      <main className="px-6 pb-20">
        {filteredGames.length > 0 ? (
          <>
            <GameRow title={searchQuery ? "RESULTADOS" : "POPULARES"} games={filteredGames.slice(0, 4)} />
            {!searchQuery && <GameRow title="MÁS VENDIDOS" games={filteredGames.slice(4, 8)} />}
          </>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl text-gray-400">No se encontraron juegos que coincidan con "{searchQuery}"</h2>
          </div>
        )}
      </main>
    </div>
  );
};

const GameRow = ({ title, games }: { title: string, games: any[] }) => (
  <section className="mb-12">
    <h3 className="text-2xl font-bold mb-6 tracking-wide uppercase">{title}</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {games.map((game) => (
        <div key={game.id} className="flex flex-col cursor-pointer group">
          <div className="aspect-square bg-white relative flex justify-center items-center group-hover:ring-4 ring-[#48daff]/40 transition-all">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="w-full h-[2px] bg-black rotate-45 absolute"></div>
              <div className="w-full h-[2px] bg-black -rotate-45 absolute"></div>
            </div>
          </div>
          <h4 className="mt-4 font-bold text-lg uppercase">{game.title}</h4>
          <p className="text-gray-400 text-sm">{game.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default PaginaPrincipal;