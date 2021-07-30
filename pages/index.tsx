import { Menu } from '@headlessui/react'
import { useState } from 'react'
import clasnames from 'classnames'
export default function Home() {
	const menus = ['首页', '理想', '随笔', '工具', '其他']
	const a = '123'
	const [currentMenu, setCurrentMenu] = useState(menus[0])
	const [isFlow, setIsFlow] = useState(true)
	return (
		<div
			className="text-red-700"
			style={{
				height: '3000px',
			}}
		>
			some ting content
		</div>
	)
}
