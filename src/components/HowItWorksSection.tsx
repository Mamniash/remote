'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'

const features = [
        {
                title: 'Системные циклы, а не разовые мероприятия',
                description:
                        'Мы предлагаем долгосрочные циклы активности: 4-6 недель, которые постепенно формируют у сотрудников привычку к регулярным взаимодействиям. С каждым циклом растёт не только вовлечённость, но и осознание ценности этих мероприятий для коллектива.',
               image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80'
        },
        {
                title: 'Рандомные встречи для укрепления связей',
                description:
                        'Еженедельные случайные встречи для улучшения горизонтальных связей. Система автоматически подбирает участников, обеспечивая разнообразие в составах. Это помогает уменьшить барьеры между отделами, локациями и ролями. Встречи сразу попадают в календарь, а система отправляет напоминания в Telegram.',
               image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80'
        },
        {
                title: 'Интерактивные игры и викторины',
                description:
                        'Элементы геймификации для поддержания интереса и вовлечённости сотрудников. Игры и викторины могут быть адаптированы под вашу корпоративную культуру.',
               image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80'
        },
        {
                title: 'Опросы и мини-кейсы',
                description:
                        'Регулярные опросы вовлечённости и практичные мини-кейсы помогают поддерживать диалог и вовлечённость сотрудников. Через анкетирование мы собираем обратную связь, а также решаем реальные рабочие задачи. Всё это автоматизируется и доставляется непосредственно в каналы, такие как Telegram, для минимизации усилий с вашей стороны.',
                image: 'https://share.google/images/MLc2L1HxPDWqHirAg'
        },
        {
                title: 'Готовые сценарии для быстрого старта',
                description:
                        'Мы подготовили набор готовых сценариев для запуска, включающих онбординг, кросс-функциональное взаимодействие, менторинг и развлекательные мероприятия. Вам не нужно тратить время на создание контента — всё уже подготовлено.',
                image: 'https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=600&q=80'
        },
        {
                title: 'Подробные отчёты для HR',
                description:
                        'Дашборды с детализированными отчётами по активности сотрудников, участию в встречах и результатам взаимодействий. Мы предоставляем удобный экспорт в PDF, чтобы менеджеры и HR могли легко отслеживать эффективность наших сценариев.',
                image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=600&q=80'
       }
]

const HowItWorksSection = () => {
        const [currentSlide, setCurrentSlide] = useState(0)
        const [sliderRef, instanceRef] = useKeenSlider({
                loop: true,
                slides: { perView: 1, spacing: 16 },
                breakpoints: {
                        '(min-width: 768px)': {
                                slides: { perView: 2, spacing: 24 }
                        },
                        '(min-width: 1024px)': {
                                slides: { perView: 3, spacing: 32 }
                        }
                },
                slideChanged(slider) {
                        setCurrentSlide(slider.track.details.rel)
                }
        })

        return (
                <section className='pb-16 pt-6 bg-[var(--background)]'>
                        <div className='container mx-auto px-4'>
                                <h2 className='text-3xl md:text-4xl font-bold mb-8 text-center'>
                                        Как работает сервис
                                </h2>
                                <div className='relative'>
                                        <div ref={sliderRef} className='keen-slider'>
                                                {features.map(({ title, description, image }, idx) => (
                                                        <div key={idx} className='keen-slider__slide'>
                                                                <div className='bg-white rounded-xl overflow-hidden shadow'>
                                                                        <div className='relative h-48'>
                                                                                <Image
                                                                                        src={image}
                                                                                        alt={title}
                                                                                        fill
                                                                                        className='object-cover'
                                                                                />
                                                                        </div>
                                                                        <div className='p-6 text-left'>
                                                                                <h3 className='text-xl font-semibold mb-2'>
                                                                                        {title}
                                                                                </h3>
                                                                                <p className='text-gray-700'>{description}</p>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                ))}
                                        </div>
                                        <div className='flex justify-center gap-2 mt-4 md:hidden'>
                                                {features.map((_, idx) => (
                                                        <button
                                                                key={idx}
                                                                onClick={() => instanceRef.current?.moveToIdx(idx)}
                                                                className={`w-2 h-2 rounded-full ${
                                                                        currentSlide === idx
                                                                                ? 'bg-gray-800'
                                                                                : 'bg-gray-300'
                                                                }`}
                                                        />
                                                ))}
                                        </div>
                                        <button
                                                onClick={() => instanceRef.current?.prev()}
                                                className='hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white text-gray-700 p-3 rounded-full shadow hover:bg-gray-100'
                                        >
                                                <svg
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        viewBox='0 0 24 24'
                                                        fill='none'
                                                        stroke='currentColor'
                                                        strokeWidth='2'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        className='w-5 h-5'
                                                >
                                                        <path d='M15 19l-7-7 7-7' />
                                                </svg>
                                        </button>
                                        <button
                                                onClick={() => instanceRef.current?.next()}
                                                className='hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white text-gray-700 p-3 rounded-full shadow hover:bg-gray-100'
                                        >
                                                <svg
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        viewBox='0 0 24 24'
                                                        fill='none'
                                                        stroke='currentColor'
                                                        strokeWidth='2'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        className='w-5 h-5'
                                                >
                                                        <path d='M9 5l7 7-7 7' />
                                                </svg>
                                        </button>
                                </div>
                        </div>
                </section>
        )
}

export default HowItWorksSection

