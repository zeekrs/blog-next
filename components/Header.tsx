import { Menu } from '@headlessui/react'
import { useState } from 'react'
import classnames from 'classnames'
const Header: React.FC = () => {
	const menus = ['首页', '理想', '随笔', '工具', '其他']
	const a = '123'
	const [currentMenu, setCurrentMenu] = useState(menus[0])
	return (
		<header className="sticky top-0 z-50 bg-opacity-50  backdrop-filter backdrop-blur shadow-xl">
			<div className="m-auto max-w-screen-lg flex justify-between items-center px-4">
				<div className="font-mono font-bold ">Zeekrs' Blog</div>
				<Menu as="div" className="flex flex-nowrap items-center justify-items-end ">
					{menus.map((item) => {
						return (
							<Menu.Item
								onClick={() => {
									setCurrentMenu(item)
								}}
								as="button"
								className={classnames('py-4', 'border-b-2', 'ml-2', 'px-2', 'border-transparent', {
									['border-black']: currentMenu === item,
									['font-bold']: currentMenu === item,
								})}
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
