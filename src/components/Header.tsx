'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from 'antd'
import useIsMobile from '@/helpers/useIsMobile'
import OrderModal from './OrderModal'

const Header = () => {
	const isMobile = useIsMobile() // Используем хук
	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
                <header className='bg-[var(--background)] shadow-sm py-4 fixed top-0 left-0 w-full z-50'>
			<div className='container mx-auto px-4 flex justify-between items-center'>
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='flex items-center'
				>
                                        <Link href='#head' className='flex items-center'>
                                                <Image
                                                        src='https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=40&q=80'
                                                        alt='Логотип Вовлекатор'
                                                        width={40}
                                                        height={40}
                                                        className='mr-2 rounded'
                                                />
                                                <span className='text-xl font-bold italic'>
                                                        Вовлекатор
                                                </span>
                                        </Link>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className='hidden md:flex space-x-8'
				></motion.div>

				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className='flex items-center gap-4'
				>
					{/* Условная отрисовка кнопки "Подробнее" для мобильных устройств */}
                                        {/* placeholder for additional actions */}

					{/* Условная отрисовка текста на кнопке "Заказать" в зависимости от разрешения */}
					<Button
						className='py-4 sm:text-sm md:text-base lg:text-lg ml-3'
						type='primary'
						shape='round'
						size='large'
						onClick={() => setIsModalOpen(true)}
					>
                                                {isMobile ? 'Запустить' : 'Запустить сценарий'}
					</Button>
					<OrderModal
						open={isModalOpen}
						onClose={() => setIsModalOpen(false)}
					/>
				</motion.div>
			</div>
		</header>
	)
}

export default Header
