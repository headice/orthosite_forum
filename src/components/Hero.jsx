import React from "react";
import orthos from './img/ortho_hero.png';
import heroBack from './img/hero_back.jpg';

export const Hero = () => {
  return (
    <div
      className="w-full min-h-screen bg-[#0a2a57] text-white font-sans relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBack})` }}
    >
      {/* Navigation */}
      <header className="flex justify-center items-center px-8 py-6 relative z-10 gap-12">
        <a href="#" className="hover:opacity-100">О форуме</a>
        <a href="#" className="hover:opacity-100">Спикеры форума</a>
        <a href="#" className="hover:opacity-100">Контакты</a>
      </header>

      {/* Title */}
      <div className="px-8 pt-12 max-w-4xl relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          ВВЕДЕНИЕ В ОРТОПЕДИЮ
        </h1>
        <p className="mt-6 text-lg text-left text-blue-200 max-w-2xl">
          Форум, где создается будущее современной медицины. Ортопедия: от диагностики до коррекции
        </p>
      </div>

      {/* Speakers Section */}
      <div className="mt-16 px-8 flex flex-col lg:flex-row justify-between gap-12 relative z-10">
        {/* Speaker 1 */}
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-2xl font-bold">Иванов Аркадий Николаевич</h3>
          <p className="mt-1 text-blue-200">спикер</p>
        </div>

        {/* Photo */}
        <div className="flex-1 flex justify-center">
          <img
            src={orthos}
            alt="speaker 1"
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Speaker 2 + Buttons */}
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-2xl font-bold">Петров Дмитрий Олегович</h3>
          <p className="mt-1 text-blue-200">спикер</p>

          {/* Buttons под вторым спикером */}
          <div className="mt-4 flex flex-col gap-4">
            <button className="px-10 py-4 border border-blue-300 rounded-xl hover:bg-blue-600 transition">
              КУПИТЬ БИЛЕТ
            </button>
            <button className="px-10 py-4 border border-blue-300 rounded-xl hover:bg-blue-600 transition">
              ПРОГРАММА ФОРУМА
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
