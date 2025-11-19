import React from "react";
import orthos from "./img/ortho_hero.png";
import heroBack from "./img/hero_back.jpg";

export const Hero = ({ onBuyTicket }) => {
  return (
    <div
      id="hero"
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat font-sans text-white"
      style={{ backgroundImage: `url(${heroBack})` }}
    >
      {/* затемнение поверх фона */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030a1c]/80 via-[#041b39]/85 to-[#041b39]" />

      {/* Навигация */}
      <header className="relative z-10 flex justify-center gap-12 py-6 text-xs uppercase tracking-wide text-blue-100">
        <a href="#who" className="transition hover:text-white">
          О форуме
        </a>
        <a href="#speakers" className="transition hover:text-white">
          Спикеры форума
        </a>
        <a href="#contacts" className="transition hover:text-white">
          Контакты
        </a>
      </header>

      {/* Контент */}
      <div className="relative z-10 w-full pt-4">

        {/* Текст слева */}
        <div className="w-full text-left pl-4 md:pl-10 xl:pl-16">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-200">
            Интенсив
          </p>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl">
            ВВЕДЕНИЕ В ОРТОПЕДИЮ
          </h1>

          <p className="mt-6 max-w-lg text-lg text-blue-100">
            Форум, где создается будущее современной медицины. Ортопедия: от
            диагностики до коррекции
          </p>

          <div className="mt-6 flex flex-wrap gap-6 text-sm text-blue-100">
            <span>29–30 января 2026</span>
            <span>Санкт-Петербург • МФК «Бугры»</span>
          </div>
        </div>

        {/* Спикеры: имена по бокам, фото по центру */}
        <div
          id="speakers"
          className="mt-16 flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-20"
        >
          {/* Левый спикер */}
          <div className="max-w-xs text-center lg:text-right">
            <h3 className="text-2xl font-semibold">
              Иванов Аркадий Николаевич
            </h3>
            <p className="mt-3 text-blue-200">спикер</p>
          </div>

          {/* Фото — без рамки и без тени */}
          <div className="flex justify-center">
            <img
              src={orthos}
              alt="Спикеры"
              className="block max-w-md lg:max-w-lg"
            />
          </div>

          {/* Правый спикер + кнопки */}
          <div className="max-w-xs text-center lg:text-left">
            <h3 className="text-2xl font-semibold">
              Петров Дмитрий Олегович
            </h3>
            <p className="mt-3 text-blue-200">спикер</p>

            <div className="mt-8 flex flex-col gap-4">
              <button
                onClick={onBuyTicket}
                className="rounded-2xl border border-blue-200/60 px-8 py-4 font-semibold uppercase tracking-wide transition hover:border-white hover:bg-white/10"
              >
                Купить билет
              </button>

              <a
                href="#program"
                className="rounded-2xl border border-blue-200/60 px-8 py-4 text-center font-semibold uppercase tracking-wide transition hover:border-white hover:bg-white/10"
              >
                Программа форума
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
