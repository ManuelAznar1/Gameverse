import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "./assets/componentes/Button";

const PaginaPrincipal: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Búsqueda
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const slides = [
    {
      subtitle: "Oferta destacada",
      title: "¡40% DE DESCUENTO!",
      btnText: "COMPRAR AHORA",
      bgColor: "bg-[#c4c4c4]",
    },
    {
      subtitle: "Novedad",
      title: "CYBERPUNK 2077",
      btnText: "RESERVAR YA",
      bgColor: "bg-[#f3e600]",
    },
    {
      subtitle: "Evento especial",
      title: "TORNEO LEAGUE OF LEGENDS",
      btnText: "INSCRIBIRSE",
      bgColor: "bg-[#1d2328]",
    },
  ];

  const gamesData = [
    {
      id: 1,
      title: "CYBERPUNK 2077",
      desc: "Futurista",
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202008/0416/6Bo40lnWU0BhgrOUm7Cb6by3.png",
    },
    {
      id: 2,
      title: "GTA V",
      desc: "Acción y disparos",
      image:
        "https://rockstaractu.com/wp-content/uploads/2020/06/Banniere-darticles-GTA-5-Image-11-1280p-x-720p-Rockstar-Actu-GTA-V.jpg",
    },
    {
      id: 3,
      title: "Red Dead Redemption 2",
      desc: "Aventura",
      image:
        "https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png",
    },
    {
      id: 4,
      title: "Call of Duty Black Ops 7",
      desc: "FPS",
      image:
        "https://www.clavecd.es/wp-content/uploads/call-of-duty-black-ops-7-1200x628-1.webp",
    },
    {
      id: 5,
      title: "Hollow Knight: Silksong",
      desc: "Metroidvania",
      image:
        "https://nintenduo.com/wp-content/uploads/2025/06/Hollow-Knight-Silksong-destacada-1080x1080.webp",
    },
    {
      id: 6,
      title: "Battlefield 6",
      desc: "FPS",
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202507/2514/054ff23fde43c010f63ed99eb1fca6957c26d2b136a9294d.jpg",
    },
    {
      id: 7,
      title: "Star Wars Outlaws",
      desc: "Mundo Abierto",
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202306/3020/5d272976398422e4228709c8ac02f56f816c687079af5222.jpg",
    },
    {
      id: 8,
      title: "Rust",
      desc: "Supervivencia",
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202505/1909/12a0444a662450a4f8e0d3140a4d13de7a0b26477384e7ed.png?w=440",
    },
  ];

  //Funciones del Carrusel
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Filtrar juegos
  const filteredGames = gamesData.filter((game) =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#2d2d2d] text-white font-sans relative">
      {/* HEADER*/}
      <header className="p-6 flex justify-between items-center bg-[#2d2d2d] sticky top-0 z-50 h-20">
        {!isSearchOpen ? (
          <>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-3xl hover:text-[#48daff] transition-colors"
            >
              ☰
            </button>
            <span className="font-bold text-2xl tracking-wide">GAMEVERSE</span>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-3xl hover:text-[#48daff] transition-colors"
            >
              🔍
            </button>
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
            <button
              onClick={() => {
                setIsSearchOpen(false);
                setSearchQuery("");
              }}
              className="text-xl font-bold"
            >
              ✕
            </button>
          </div>
        )}
      </header>

      {/* MENÚ LATERAL */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex">
          <div className="w-72 bg-[#2d2d2d] h-full p-6 shadow-2xl flex flex-col justify-between border-r border-[#48daff]/20 animate-fade-in-left">
            <div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl mb-10 hover:text-[#48daff] transition-colors font-bold"
              >
                ✕ Cerrar
              </button>

              {/* OPCIONES DE NAVEGACIÓN*/}
              <nav className="flex flex-col gap-6 text-xl">
                <button
                  onClick={() => {
                    navigate("/home");
                    setIsMenuOpen(false);
                  }}
                  className="text-left hover:text-[#48daff] transition-colors"
                >
                  Inicio
                </button>
                <button
                  onClick={() => {
                    navigate("/descargas");
                    setIsMenuOpen(false);
                  }}
                  className="text-left hover:text-[#48daff] transition-colors"
                >
                  Descargas
                </button>
                <button
                  onClick={() => {
                    navigate("/deseados");
                    setIsMenuOpen(false);
                  }}
                  className="text-left hover:text-[#48daff] transition-colors"
                >
                  Deseados
                </button>
                <button
                  onClick={() => {
                    navigate("/contacto");
                    setIsMenuOpen(false);
                  }}
                  className="text-left hover:text-[#48daff] transition-colors"
                >
                  Contacto
                </button>
              </nav>
            </div>

            {/* SECCIÓN MI CUENTA*/}
            <div className="mb-6 pt-6 border-t border-gray-700 w-full flex flex-col items-center">
              <div className="w-full px-6 flex justify-center">
                <CustomButton
                  variant="solid"
                  onClick={() => {
                    navigate("/perfil");
                    setIsMenuOpen(false);
                  }}
                >
                  MI CUENTA
                </CustomButton>
              </div>
            </div>
          </div>
          <div className="flex-grow" onClick={() => setIsMenuOpen(false)}></div>
        </div>
      )}

      {/* CARRUSEL*/}
      {!searchQuery && (
        <section className="px-6 mb-12 relative group animate-fade-in">
          <div
            className={`w-full ${slides[currentSlide].bgColor} rounded-sm p-12 h-[350px] flex flex-col justify-center items-start transition-all duration-500`}
          >
            <span className="text-gray-800 font-bold uppercase text-sm mb-2">
              {slides[currentSlide].subtitle}
            </span>
            <h2 className="text-5xl font-extrabold text-white mb-8 drop-shadow-md">
              {slides[currentSlide].title}
            </h2>
            <button className="bg-[#d13076] hover:bg-[#b02663] text-white px-10 py-3 rounded-md font-bold transition-all active:scale-95">
              {slides[currentSlide].btnText}
            </button>
          </div>

          {/* Flechas de navegación */}
          <button
            onClick={prevSlide}
            className="absolute left-10 top-1/2 -translate-y-1/2 bg-black/30 p-3 rounded-full hidden group-hover:block hover:bg-black/60 transition-all text-xl"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-10 top-1/2 -translate-y-1/2 bg-black/30 p-3 rounded-full hidden group-hover:block hover:bg-black/60 transition-all text-xl"
          >
            ❯
          </button>

          {/* Puntos inferiores */}
          <div className="flex justify-center gap-3 mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index
                    ? "bg-[#48daff] scale-125"
                    : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </section>
      )}

      {/* SECCIONES DE JUEGOS FILTRADOS */}
      <main className="px-6 pb-20">
        {filteredGames.length > 0 ? (
          <>
            <GameRow
              title={searchQuery ? "RESULTADOS DE BÚSQUEDA" : "POPULARES"}
              games={filteredGames.slice(0, 4)}
            />
            {!searchQuery && filteredGames.length > 4 && (
              <GameRow title="MÁS VENDIDOS" games={filteredGames.slice(4, 8)} />
            )}
          </>
        ) : (
          <div className="text-center py-20 animate-fade-in">
            <h2 className="text-2xl text-gray-400">
              No hay coincidencias para "{searchQuery}"
            </h2>
          </div>
        )}
      </main>
    </div>
  );
};

const GameRow = ({ title, games }: { title: string; games: any[] }) => (
  <section className="mb-12">
    <h3 className="text-2xl font-bold mb-6 tracking-wide uppercase border-l-4 border-[#48daff] pl-4">
      {title}
    </h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {games.map((game) => (
        <div key={game.id} className="flex flex-col cursor-pointer group">
          <div className="aspect-square bg-gray-700 rounded-lg overflow-hidden relative shadow-lg group-hover:ring-4 ring-[#48daff]/50 transition-all">
            {game.image ? (
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className="w-full h-[2px] bg-white rotate-45 absolute"></div>
                <div className="w-full h-[2px] bg-white -rotate-45 absolute"></div>
              </div>
            )}
          </div>
          <h4 className="mt-4 font-bold text-lg uppercase tracking-tighter transition-colors group-hover:text-[#48daff]">
            {game.title}
          </h4>
          <p className="text-gray-400 text-sm">{game.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default PaginaPrincipal;
