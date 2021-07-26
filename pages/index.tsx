import { Menu, Transition } from '@headlessui/react'
import { useState } from 'react'
import clasnames from 'classnames'
export default function Home() {
	const menus = ['首页', '理想', '随笔', '工具', '其他']
	const a = '123'
	const [currentMenu, setCurrentMenu] = useState(menus[0])
	return (
		<div>
			<div className="bg-gray-600 text-white">
				<div className="m-auto max-w-screen-lg flex justify-between items-center px-4">
					<div>Zeekrs' Blog</div>
					<Menu
						as="div"
						className="flex flex-nowrap items-center justify-items-end "
					>
						{menus.map((item) => {
							return (
								<Menu.Item
									onClick={() => {
										setCurrentMenu(item)
									}}
									as="button"
									className={clasnames(
										'py-4',
										'border-b-2',
										'ml-2',
										'px-2',
										'border-transparent',
										{
											['border-white']: currentMenu === item,
											['font-bold']: currentMenu === item,
										}
									)}
									key={item}
								>
									{item}
								</Menu.Item>
							)
						})}
					</Menu>
				</div>
			</div>
		</div>
	)
}
