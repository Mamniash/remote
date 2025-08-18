'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import OrderModal from './OrderModal'

const HeroSection = () => {
        const [isModalOpen, setIsModalOpen] = useState(false)

        return (
                <section
                        className='pt-32 pb-16 text-center bg-gradient-to-tr from-[#611f69] via-[#e01e5a] to-[#36c5f0] text-white'
                        id='head'
                >
                        <div className='container mx-auto px-4'>
                                <h1 className='text-4xl md:text-5xl font-bold mb-4'>
                                        Вовлекатор228
                                </h1>
                                <p className='text-lg mb-4'>
                                        Запускайте 4–6-недельные «Сценарии» для повышения вовлечённости и роста NPS на 20%.
                                </p>
                                <p className='text-lg mb-8'>
                                        Автоматизация встреч, напоминаний и отчётов. Интеграция с Telegram, Microsoft Teams или Slack (по запросу).
                                </p>

                                <motion.button
                                        onClick={() => setIsModalOpen(true)}
                                        className='w-full max-w-sm btn-primary shadow-md'
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        animate={{
                                                scale: [1, 1.03, 1],
                                                opacity: [1, 0.95, 1]
                                        }}
                                        transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: 'easeInOut'
                                        }}
                                >
                                        Запустить сценарий
                                </motion.button>

                                <OrderModal
                                        open={isModalOpen}
                                        onClose={() => setIsModalOpen(false)}
                                />
                        </div>
                </section>
        )
}

export default HeroSection

