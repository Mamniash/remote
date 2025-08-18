'use client'

import React from 'react'
import { motion } from 'framer-motion'

const scenarios = [
        {
                title: 'Онбординг 101',
                description:
                        'Сценарий для новых сотрудников: знакомства, mini-кейсы, ретроспективы и общение с наставниками. Всё, что нужно для успешного старта.'
        },
        {
                title: 'Кросс-функ «Анти-силос»',
                description:
                        'Взаимодействие между различными департаментами, с учётом часовых зон и ролей. Это создаёт новые каналы общения и улучшает синергию между командами.'
        },
        {
                title: 'Экспресс-менторинг (4 недели)',
                description:
                        'Менторство от более опытных коллег для развития сотрудников средней квалификации. Сценарий включает чек-листы и планы развития.'
        },
        {
                title: 'Fan-игры & квизы (4 недели)',
                description:
                        'Весёлые и познавательные активности, такие как квизы и ice-breakers, для создания атмосферы дружбы и командного духа.'
        }
]

const ScenariosSection = () => {
        return (
                <section className='py-16 bg-white'>
                        <div className='container mx-auto px-4 text-center'>
                                <h2 className='text-3xl md:text-4xl font-bold mb-8'>Готовые сценарии</h2>
                                <div className='flex gap-6 overflow-x-auto snap-x snap-mandatory mb-8 pb-4'>
                                        {scenarios.map(({ title, description }, idx) => (
                                                <div
                                                        key={idx}
                                                        className='shrink-0 w-72 bg-gray-50 p-4 rounded-lg shadow text-left snap-start'
                                                >
                                                        <h3 className='text-xl font-semibold mb-2'>{title}</h3>
                                                        <p className='text-gray-700'>{description}</p>
                                                </div>
                                        ))}
                                </div>
                                <motion.button
                                        className='bg-[#934a3a] hover:bg-[#b95c4d] text-white font-semibold px-8 py-3 rounded-full'
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                >
                                        Выбрать сценарий
                                </motion.button>
                        </div>
                </section>
        )
}

export default ScenariosSection

