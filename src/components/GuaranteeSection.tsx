'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import OrderModal from '@/components/OrderModal'
import useIsMobile from '@/helpers/useIsMobile'

const GuaranteeSection = () => {
        const isMobile = useIsMobile()
        const [isModalOpen, setIsModalOpen] = useState(false)

        return (
                <section className='py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 scroll-mt-16' id='order'>
                        <div className='container mx-auto px-4'>
                                <div className='bg-white/80 backdrop-blur rounded-xl overflow-hidden shadow-lg p-8 md:p-12 text-center'>
                                        <motion.img
                                                src='https://cdn-icons-png.flaticon.com/512/190/190411.png'
                                                alt='Значок гарантии'
                                                className='w-24 h-24 mx-auto mb-4'
                                                initial={{ opacity: 0, y: -20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6 }}
                                        />
                                        <h2 className='text-2xl md:text-3xl font-bold mb-6'>Даём гарантию</h2>
                                        <p className='text-lg text-gray-700 mb-6'>
                                                Если за первый цикл (4–6 недель) мы не увеличим вовлечённость и NPS на 20%, мы
                                                вернём вам деньги в 2 раза больше.
                                        </p>

                                        <motion.div
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.6 }}
                                                className='flex justify-center mb-6'
                                        >
                                                <motion.button
                                                        onClick={() => setIsModalOpen(true)}
                                                        className='w-full max-w-sm relative btn-primary shadow-md'
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
                                        </motion.div>

                                        {isMobile ? (
                                                <p className='text-sm text-gray-600 mt-4'>
                                                        Оставьте телефон — и мы поможем запустить сценарий
                                                </p>
                                        ) : (
                                                <p className='text-sm text-gray-600'>
                                                        Оставьте телефон — и мы поможем запустить сценарий
                                                </p>
                                        )}

                                        <OrderModal
                                                open={isModalOpen}
                                                onClose={() => setIsModalOpen(false)}
                                        />
                                </div>
                        </div>
                </section>
        )
}

export default GuaranteeSection
