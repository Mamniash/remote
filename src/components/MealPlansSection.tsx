'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Row, Col } from 'antd'

const MealPlansSection = () => {
	const benefits = [
		{
			title: 'Персонализация',
			description: 'Ваша аптечка собирается под ваши нужды и аллергии'
		},
		{
			title: 'Спокойствие',
			description: 'Чат с врачом всегда на связи, поддержка 24/7'
		},
		{
			title: 'Безопасность',
			description:
				'В аптечке только актуальные, годные и подходящие лекарства'
		},
		{
			title: 'Удобство',
			description: 'Напоминаем о замене и обновляем комплект каждый год'
		}
	]

	return (
		<section className='pt-16 pb-6 bg-black text-white'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className='text-center mb-12'
				>
					<h2 className='text-3xl md:text-4xl font-bold mb-6'>
						Почему родители выбирают нас
					</h2>

					<Row gutter={[32, 32]} className='mt-12'>
						{benefits.map(({ title, description }, idx) => (
							<Col xs={24} md={12} key={idx}>
								<motion.div
									whileHover={{ scale: 1.03 }}
									transition={{ duration: 0.3 }}
									className='bg-[#1a1a1a] rounded-xl p-8 h-full'
								>
									<h4 className='text-2xl font-bold mb-4'>{title}</h4>
									<p className='text-gray-300'>{description}</p>
								</motion.div>
							</Col>
						))}
					</Row>
				</motion.div>
			</div>
		</section>
	)
}

export default MealPlansSection
