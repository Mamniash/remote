'use client'

import React, { useState } from 'react'
import { Modal, Typography } from 'antd'
import SubscriptionForm from './SubscriptionForm'

const { Title, Paragraph } = Typography

interface OrderModalProps {
	open: boolean
	onClose: () => void
}

const OrderModal: React.FC<OrderModalProps> = ({ open, onClose }) => {
	const [sessionStartTime] = useState<number>(Date.now())

	return (
		<Modal
			open={open}
			onCancel={onClose}
			footer={null}
			centered
			destroyOnClose
			maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
		>
			<div className='text-center p-4'>
                                <Title level={4}>Запустить бота</Title>
                                <Paragraph>Оставьте телефон — отправим ссылку на демо</Paragraph>

				<SubscriptionForm />
			</div>
		</Modal>
	)
}

export default OrderModal
