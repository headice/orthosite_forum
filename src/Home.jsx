import React, { useState } from "react";
import { Hero } from "./components/Hero";
import { TicketModal } from "./components/TicketModal";

// фон после hero
import bgImage from "./components/img/after_hero_back.png";
// картинки для секции "Кому будет полезен"
import whoTop from "./components/img/who_top.png";
import whoBottom from "./components/img/who_bottom.png";

const program = [
  { day: "День 1", time: "10:00", title: "Старт форума", text: "Приветствие организаторов, знакомство, вводные тезисы о трендах отрасли." },
  { day: "День 1", time: "11:30", title: "Диагностика", text: "Современные подходы к инструментальным исследованиям и точной интерпретации." },
  { day: "День 1", time: "14:00", title: "Практические мастер-классы", text: "Работа с кейсами на симуляционном оборудовании и обсуждение ошибок." },
  { day: "День 1", time: "17:00", title: "Дискуссия", text: "Панель о мультидисциплинарном подходе с участием реабилитологов и хирургов." },
  { day: "День 2", time: "10:00", title: "Хирургическая коррекция", text: "Пошаговые протоколы, демонстрация техник и анализ осложнений." },
  { day: "День 2", time: "12:30", title: "Реабилитация", text: "Последние исследования по восстановлению и сопровождению пациентов." },
  { day: "День 2", time: "15:00", title: "Управление практикой", text: "Экономика отделения, работа с пациентским опытом и маркетингом." },
  { day: "День 2", time: "17:00", title: "Подведение итогов", text: "Ответы на вопросы, план дальнейшего обучения и розыгрыш призов." },
];

const speakers = [
  { name: "Иванов Аркадий", role: "Врач-ортопед высшей категории", desc: "25 лет практики, автор 3 учебных пособий. Руководит клиническим отделением в федеральном центре." },
  { name: "Петров Дмитрий", role: "Хирург-ортопед, к.м.н.", desc: "Эксперт по артроскопии и коррекции деформаций. Разработчик собственной программы подготовки специалистов." },
  { name: "Марина Крылова", role: "Реабилитолог", desc: "Специалист по восстановлению пациентов после тотальных эндопротезирований." },
];

const tariffs = [
  {
    title: "Билет на форум",
    price: "15 900 ₽",
    desc: "Доступ к конференции, лекциям и нетворкингу.",
    features: ["2 дня программы", "Раздаточные материалы", "Сертификат участия"],
  },
  {
    title: "Билет на форум + мастер-классы",
    price: "21 900 ₽",
    desc: "Включает участие во всех практических сессиях.",
    features: ["Доступ в демонстрационную зону", "Дополнительные кейсы", "Видеозаписи занятий"],
  },
  {
    title: "VIP",
    price: "35 000 ₽",
    desc: "Персональная консультация со спикерами и место в первых рядах.",
    features: ["Закрытый ужин", "Персональный куратор", "Бонусные материалы"],
  },
];

const organizers = [
  { title: "АКТас", text: "Конференц-площадка с современным оборудованием и просторными залами." },
  { title: "Orthosite Forum", text: "Профессиональное сообщество, объединяющее ортопедов со всей страны." },
];

export const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="min-h-screen bg-[#030b1f] text-white">
      {/* Hero */}
      <Hero onBuyTicket={openModal} />

      {/* бегущая строка */}
      <div className="overflow-hidden bg-yellow-400 py-5 text-xs font-semibold uppercase tracking-wide text-blue-900 md:text-sm">
        <div className="marquee">
          До 31 августа действует скидка 15% на раннее бронирование участия • Количество мест строго ограничено •
          Гарантируйте себе участие уже сегодня
        </div>
      </div>

      {/* ОБОЛОЧКА С ФОНОМ */}
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-4 py-16">
          {/* Кому будет полезен интенсив */}
          <section
            id="who"
            className="rounded-[32px] p-8 "
          >
            <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide text-white">
              КОМУ БУДЕТ ПОЛЕЗЕН ЭТОТ ИНТЕНСИВ?
            </h2>

            {/* Плашка с названием курса */}
            <div className="mt-6 mx-auto max-w-4xl bg-[#11418a] text-center text-white px-6 py-4 rounded-[18px] shadow-lg border border-white/30">
              <p className="font-semibold text-sm md:text-base">
                Курс «Введение в ортопедию для подологов»
              </p>
              <p className="mt-1 text-xs md:text-sm">
                Двухдневный интенсив созданный для специалистов, желающих углубить знания
                в области ортопедии и биомеханики стопы.
              </p>
            </div>

            {/* Верхняя карточка: текст слева на картинке */}
            <div className="mt-10 relative rounded-3xl overflow-hidden shadow-xl border border-white/10 bg-[#0d1f40]">
              <img
                src={whoTop}
                alt="Спикер курса"
                className="w-full h-full object-cover"
              />

              {/* оверлей с текстом слева */}
              <div className="absolute inset-0 flex items-center">
                <div className="ml-4 md:ml-8 max-w-md p-4 md:p-5 text-white leading-relaxed text-xs sm:text-sm md:text-base drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] text-left">
                  Под руководством ведущих экспертов ФГУП ЦИТО вы разберёте ключевые
                  патологии опорно-двигательного аппарата, научитесь проводить
                  диагностику возникающих проблем со стопой и эффективно способствовать
                  восстановлению клиентов, применяя эти знания.
                </div>
              </div>
            </div>

            {/* Нижняя карточка: текст справа на картинке */}
            <div className="mt-6 relative rounded-3xl overflow-hidden shadow-xl border border-white/10 bg-[#0d1f40]">
              <img
                src={whoBottom}
                alt="Спикер курса"
                className="w-full h-full object-cover"
              />

              {/* оверлей с текстом справа */}
              <div className="absolute inset-0 flex items-center justify-end">
                <div className="mr-4 md:mr-8 max-w-md p-4 md:p-5 text-white leading-relaxed text-xs sm:text-sm md:text-base drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] text-right">
                  Вы получите практические инструменты для ежедневной работы подолога:
                  от оценки состояния стопы и позвоночника, а также ведения пациентов
                  с диабетической стопой и выбора ортопедической обуви.
                </div>
              </div>
            </div>
          </section>

          {/* Программа */}
          <section
            id="program"
            className="rounded-[32px] border border-white/10 bg-gradient-to-b from-[#05173c] to-[#030b1f] p-8"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-blue-200">Программа</p>
                <h2 className="mt-2 text-3xl font-semibold">Программа курса</h2>
              </div>
              <button
                onClick={openModal}
                className="rounded-2xl border border-blue-200/60 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10"
              >
                Купить билет
              </button>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {program.map((item, index) => (
                <article key={index} className="rounded-2xl border border-white/10 bg-[#040f2a] p-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-wide text-blue-300">
                    <span>{item.day}</span>
                    <span>{item.time}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-blue-100">{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Спикеры */}
          <section id="speakers" className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-blue-200">Спикеры</p>
            <h2 className="mt-2 text-3xl font-semibold">О спикерах</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {speakers.map((speaker) => (
                <div key={speaker.name} className="rounded-2xl border border-white/10 bg-[#051336] p-6">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600" />
                  <h3 className="mt-4 text-xl font-semibold">{speaker.name}</h3>
                  <p className="text-sm uppercase tracking-wide text-blue-200">{speaker.role}</p>
                  <p className="mt-3 text-sm text-blue-100">{speaker.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Тарифы */}
          <section
            id="pricing"
            className="rounded-[32px] border border-white/10 bg-gradient-to-b from-[#041433] to-[#030b1f] p-8"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-blue-200">Тарифы</p>
            <h2 className="mt-2 text-3xl font-semibold">Тарифы на участие в интенсиве</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {tariffs.map((tariff) => (
                <div key={tariff.title} className="flex flex-col rounded-2xl border border-white/10 bg-[#051433] p-6">
                  <h3 className="text-xl font-semibold">{tariff.title}</h3>
                  <p className="mt-2 text-3xl font-bold text-blue-200">{tariff.price}</p>
                  <p className="mt-2 text-sm text-blue-100">{tariff.desc}</p>
                  <ul className="mt-4 flex flex-1 list-disc flex-col gap-2 pl-5 text-sm text-blue-100">
                    {tariff.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <button
                    onClick={openModal}
                    className="mt-6 rounded-2xl bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/20"
                  >
                    Купить билет
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Организаторы */}
          <section id="organizers" className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-blue-200">Организаторы</p>
            <h2 className="mt-2 text-3xl font-semibold">Организаторы и площадка</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {organizers.map((org) => (
                <div key={org.title} className="rounded-2xl border border-white/10 bg-[#041433] p-6">
                  <h3 className="text-xl font-semibold">{org.title}</h3>
                  <p className="mt-3 text-sm text-blue-100">{org.text}</p>
                </div>
              ))}
              <div className="rounded-2xl border border-white/10 bg-[#041433] p-6">
                <h3 className="text-xl font-semibold">Площадка</h3>
                <p className="mt-3 text-sm text-blue-100">
                  МФК «Бугры», Ленинградская область. Просторные залы, отдельная выставочная зона и удобная инфраструктура для
                  участников.
                </p>
                <p className="mt-4 text-sm text-blue-100">Адрес: Новоприозерское шоссе, 123</p>
              </div>
            </div>
          </section>

          {/* Контакты */}
          <section
            id="contacts"
            className="rounded-[32px] border border-white/10 bg-gradient-to-b from-[#05173c] to-[#030b1f] p-8"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-blue-200">Контакты</p>
            <h2 className="mt-2 text-3xl font-semibold">Остались вопросы?</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-[#041433] p-6">
                <p className="text-sm text-blue-100">Телефон</p>
                <p className="text-2xl font-semibold">+7 (812) 123-45-67</p>
                <p className="mt-4 text-sm text-blue-100">Email</p>
                <p className="text-2xl font-semibold">hello@orthosite.ru</p>
                <p className="mt-4 text-sm text-blue-100">Мы на связи ежедневно с 10:00 до 20:00.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#041433] p-6">
                <p className="text-sm text-blue-100">Соцсети</p>
                <ul className="mt-4 space-y-3 text-blue-100">
                  <li>Telegram: @orthosite_forum</li>
                  <li>VK: vk.com/orthositeforum</li>
                  <li>Instagram*: @orthosite_forum</li>
                </ul>
                <p className="mt-4 text-xs text-blue-200">*Запрещенная в РФ организация Meta, 18+</p>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 bg-[#030b1f] py-8 text-center text-xs text-blue-200">
          © 2024 Orthosite Forum. Все права защищены.
        </footer>
      </div>

      <TicketModal open={isModalOpen} onClose={closeModal} />
    </div>
  );
};
