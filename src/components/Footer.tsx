'use client'

import React from 'react'

const Footer = () => {
        const currentYear = new Date().getFullYear()

        return (
                <footer className='bg-[#111] text-white py-8'>
                        <div className='container mx-auto px-4 text-center'>
                                <p className='mb-4'>
                                        Мы не читаем личные переписки. Сохраняем только служебную информацию и ответы на анкеты.
                                        Интеграция с Teams/Slack/календарями по запросу.
                                </p>
                                <p className='text-sm text-gray-400'>© {currentYear}</p>
                        </div>
                </footer>
        )
}

export default Footer

