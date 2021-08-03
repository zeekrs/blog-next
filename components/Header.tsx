import { Menu } from '@headlessui/react'
import { useState } from 'react'
import classnames from 'classnames'
const Header: React.FC = () => {
	const menus = ['首页', '理想', '随笔', '工具', '其他']
	const a = '123'
	const [currentMenu, setCurrentMenu] = useState(menus[0])
	return (
		<header className="sticky top-0 z-50 bg-opacity-50  backdrop-filter backdrop-blur shadow ">
			<div className="m-auto max-w-screen-lg flex justify-between items-center px-4">
				<div className="font-mono font-bold ">Zeekrs&apos; Blog</div>
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
								className={classnames(
									'p-4',
									'hover:text-gray-900',
									'transition-colors',
									'duration-200',
									{
										['bg-opacity-50']: currentMenu === item,
										['bg-gray-100']: currentMenu === item,
										['font-bold']: currentMenu === item,
										['text-black']: currentMenu === item,
										['text-gray-500']: currentMenu !== item,
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
		</header>
	)
}
export default Header
