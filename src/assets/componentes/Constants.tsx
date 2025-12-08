export interface Slide {
  subtitle: string;
  title: string;
  btnText: string;
  bgColor: string;
}

export interface Game {
  id: number;
  title: string;
  desc: string;
  image: string;
}

export const slides: Slide[] = [
  { subtitle: "Oferta destacada", title: "¡40% DE DESCUENTO!", btnText: "COMPRAR AHORA", bgColor: "bg-[#c4c4c4]" },
  { subtitle: "Novedad", title: "CYBERPUNK 2077", btnText: "RESERVAR YA", bgColor: "bg-[#f3e600]" },
  { subtitle: "Evento especial", title: "TORNEO LEAGUE OF LEGENDS", btnText: "INSCRIBIRSE", bgColor: "bg-[#1d2328]" }
];

export const gamesData: Game[] = [
  { id: 1, title: 'CYBERPUNK 2077', desc: 'Futurista', image: 'https://image.api.playstation.com/vulcan/ap/rnd/202008/0416/6Bo40lnWU0BhgrOUm7Cb6by3.png' },
  { id: 2, title: 'GTA V', desc: 'Acción y disparos', image: 'https://rockstaractu.com/wp-content/uploads/2020/06/Banniere-darticles-GTA-5-Image-11-1280p-x-720p-Rockstar-Actu-GTA-V.jpg' },
  { id: 3, title: 'Red Dead Redemption 2', desc: 'Aventura', image: 'https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png' },
  { id: 4, title: 'Call of Duty Black Ops 7', desc: 'FPS', image: 'https://www.clavecd.es/wp-content/uploads/call-of-duty-black-ops-7-1200x628-1.webp' },
  { id: 5, title: 'Hollow Knight: Silksong', desc: 'Metroidvania', image: 'https://nintenduo.com/wp-content/uploads/2025/06/Hollow-Knight-Silksong-destacada-1080x1080.webp' },
  { id: 6, title: 'Battlefield 6', desc: 'FPS', image: 'https://image.api.playstation.com/vulcan/ap/rnd/202507/2514/054ff23fde43c010f63ed99eb1fca6957c26d2b136a9294d.jpg' },
  { id: 7, title: 'Star Wars Outlaws', desc: 'Mundo Abierto', image: 'https://image.api.playstation.com/vulcan/ap/rnd/202306/3020/5d272976398422e4228709c8ac02f56f816c687079af5222.jpg' },
  { id: 8, title: 'Rust', desc: 'Supervivencia', image: 'https://image.api.playstation.com/vulcan/ap/rnd/202505/1909/12a0444a662450a4f8e0d3140a4d13de7a0b26477384e7ed.png?w=440' }
];