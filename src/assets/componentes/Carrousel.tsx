import React, { useState } from "react";

interface CarouselProps {
  slides: { subtitle: string; title: string; btnText: string; bgColor: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="px-6 mb-12 relative group animate-fade-in">
      <div className={`w-full ${slides[currentSlide].bgColor} rounded-sm p-12 h-[350px] flex flex-col justify-center items-start transition-all duration-500`}>
        <span className="text-gray-800 font-bold uppercase text-sm mb-2">{slides[currentSlide].subtitle}</span>
        <h2 className="text-5xl font-extrabold text-white mb-8 drop-shadow-md">{slides[currentSlide].title}</h2>
        <button className="bg-[#d13076] hover:bg-[#b02663] text-white px-10 py-3 rounded-md font-bold transition-all active:scale-95">
          {slides[currentSlide].btnText}
        </button>
      </div>

      <button onClick={prevSlide} className="absolute left-10 top-1/2 -translate-y-1/2 bg-black/30 p-3 rounded-full hidden group-hover:block hover:bg-black/60 transition-all text-xl">❮</button>
      <button onClick={nextSlide} className="absolute right-10 top-1/2 -translate-y-1/2 bg-black/30 p-3 rounded-full hidden group-hover:block hover:bg-black/60 transition-all text-xl">❯</button>

      <div className="flex justify-center gap-3 mt-4">
        {slides.map((_, index) => (
          <button key={index} onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? "bg-[#48daff] scale-125" : "bg-gray-500"}`} />
        ))}
      </div>
    </section>
  );
};

export default Carousel;