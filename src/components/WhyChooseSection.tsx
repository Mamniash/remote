'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Row, Col } from 'antd'

const WhyChooseSection = () => {
        const benefits = [
                {
                        title: 'Долгосрочные циклы активности',
                        description:
                                'Цикличность 4-6 недель позволяет не только вовлечь сотрудников, но и сформировать у них привычку к регулярным встречам и взаимодействию.'
                },
                {
                        title: 'Алгоритм анти-силос-матчинга',
                        description:
                                'Мы создаём мосты между отделами и локациями, стимулируя обмен знаниями и опытом.'
                },
                {
                        title: 'Интерактивные сценарии для быстрого старта',
                        description:
                                'Вам не нужно тратить время на разработку контента, мы уже подготовили всё необходимое.'
                },
                {
                        title: 'Автоматизация без лишней рутины',
                        description:
                                'От напоминаний до создания встреч, всё будет работать без дополнительной нагрузки на вашу команду.'
                },
                {
                        title: 'Поддержка привычных инструментов',
                        description:
                                'Интеграция с Telegram, Teams, Slack для удобства и быстроты.'
                },
                {
                        title: 'Измеряемое влияние на вовлечённость и NPS',
                        description:
                                'Увеличиваем вовлечённость на 20% и демонстрируем рост NPS через регулярные, персонализированные взаимодействия.'
                }
        ]

	return (
                <section className='pt-16 pb-6 bg-[var(--primary)] text-white'>
			<div className='container mx-auto px-4'>
                                <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        viewport={{ once: true }}
                                        className='text-center mb-12'
                                >
                                        <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                                                Почему выбирают нас
                                        </h2>

                                        <Row gutter={[32, 32]} className='mt-12'>
                                                {benefits.map(({ title, description }, idx) => (
                                                        <Col xs={24} md={12} key={idx}>
                                                                <motion.div
                                                                        whileHover={{ scale: 1.03 }}
                                                                        transition={{ duration: 0.3 }}
                                                                        className='bg-[#4A154B] rounded-xl p-8 h-full'
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

export default WhyChooseSection
