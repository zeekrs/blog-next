import Link from 'next/link'
import Image from 'next/image'
import IconFont from '@components/iconfont'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
import { ReactElement, useEffect, useState } from 'react'
import Layout from '@components/Layout'

SwiperCore.use([Autoplay])
interface Article {
	id: number
	title: string
	content: string
	coverImage: string
	tags: string[]
	createAt: string
}
export default function Home() {
	const banners = [
		'https://img2.tapimg.com/bbcode/images/be2d2472489319c9600369a932b06677.png?imageView2/2/w/1320/h/9999/q/80/format/jpg/interlace/1/ignore-error/1',
		'https://img2.tapimg.com/bbcode/images/461ccaf6c5de54c2b8238a3c39ff8d4b.png?imageView2/2/w/1320/h/9999/q/80/format/jpg/interlace/1/ignore-error/1',
		'https://img2.tapimg.com/bbcode/images/8e17c9516ac250b3c4464e9da0dfb21c.png?imageView2/2/w/1320/h/9999/q/80/format/jpg/interlace/1/ignore-error/1',
		'https://img2.tapimg.com/bbcode/images/6c69ee2c4d74d0a9f5642737a3efe4dd.png?imageView2/2/w/1320/h/9999/q/80/format/jpg/interlace/1/ignore-error/1',
		'https://img2.tapimg.com/bbcode/images/4f2cc458ad147e3f47eaddb07dd89697.png?imageView2/2/w/1320/h/9999/q/80/format/jpg/interlace/1/ignore-error/1',
	]

	const [articles, setArticle] = useState<Article[]>([])
	const tags = [
		'虚拟机',
		'JAVA',
		'JAVASCRIPT',
		'KOTLIN',
		'RUST',
		'WEB',
		'NEXTJS',
		'NB',
		'Android',
		'Node',
	]
	useEffect(() => {
		const articles = generateArticles()
		setArticle(articles)
	}, [])
	const generateArticles = () => {
		const temp = [...articles]
		for (let i = articles.length; i < 10; i++) {
			temp.push({
				id: i,
				title: `测试标题是打发发发斯蒂芬地方啊发dffs测试标题是打发发发斯蒂芬地方啊发dffsd测试标题是打发发发斯蒂芬地方啊发dffsdd${i}`,
				content:
					i % 2 == 0
						? '啊吧啊吧啊吧办法水电费埃里克束带结啊吧啊吧啊吧办法啊吧啊吧啊吧啊吧啊吧办法水电费埃里克束带结啊吧啊吧啊吧办法啊吧啊吧啊吧办法水电费埃里克束带结啊吧啊吧啊吧办法水电费埃里克束带结发发水电费埃里克束带结发发啊吧办法水电费埃里克束带结啊吧啊吧啊吧办法水电费埃里克束带结发发水电费埃里克束带结发发;啊吧啊吧啊吧办法水电费埃里克束带结啊吧啊吧啊吧办法水电费埃里克束带结发发;点击foe文件发售考虑对方均为;案件发生了地方叫我案件发生;颠覆了看见爱上;非叫我艾尔建覅偶'
						: '三打发大水发生的离开飞机',
				coverImage:
					'https://img2.tapimg.com/bbcode/images/be2d2472489319c9600369a932b06677.png?imageView2/2/w/1320/h/9999/q/80/format/jpg/interlace/1/ignore-error/1',
				tags: [
					'虚拟机',
					'JAVA',
					'JAVASCRIPT',
					'KOTLIN',
					'RUST',
					'WEB',
					'NEXTJS',
					'NB',
					'Android',
					'Node',
				],
				createAt: '2020-12-32',
			})
		}
		return temp
	}

	return (
		<>
			<Swiper
				className="shadow rounded"
				spaceBetween={8}
				slidesPerView={1}
				loop={true}
				autoplay={{
					delay: 3000,
				}}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>
				{banners.map((item, index) => {
					return (
						<SwiperSlide key={index}>
							<Image
								layout="responsive"
								objectFit="cover"
								src={item}
								width={1024}
								height={256}
							/>
						</SwiperSlide>
					)
				})}
			</Swiper>

			<div className="flex space-x-4">
				<div className="flex-none w-64 mt-4">
					<div className="shadow rounded p-4">
						<div className="mx-auto w-16">
							<Image
								className="rounded-full transform duration-700  transition-transform hover:rotate-360	"
								src="https://img2.tapimg.com/bbcode/images/be2d2472489319c9600369a932b06677.png?imageView2/2/w/1320/h/9999/q/80/format/jpg/interlace/1/ignore-error/1"
								width={64}
								height={64}
								objectFit="cover"
							/>
						</div>
						<div className="text-center mt-2 font-serif font-bold">Zeekrs</div>
						<div className="text-center mt-1 text-gray-700 font-serif">
							full stack developer
						</div>
						<div className="text-center mt-2 font-serif ">just do it</div>
						<div className="flex mt-4 justify-around gap-2 ">
							<div className=" text-center">
								<div className="text-sm text-gray-700 font-bold">POSTS</div>
								<div className="mt-1 text-lg font-bold text-gray-800">231</div>
							</div>
							<div className="my-4 border-l" />
							<div className=" text-center">
								<div className="text-sm text-gray-700 font-bold">
									CATEGORIES
								</div>
								<div className="mt-1 text-lg font-bold text-gray-800">231</div>
							</div>
							<div className="my-4 border-l" />
							<div className=" text-center">
								<div className="text-sm text-gray-700 font-bold">TAGS</div>
								<div className="mt-1 text-lg font-bold text-gray-800">231</div>
							</div>
						</div>
						<div className="mt-4 bg-gray-700 p-2 rounded text-center font-bold text-white cursor-pointer hover:bg-gray-800">
							<a
								href="https://github.com/zeekrs"
								target="_blank"
								rel="noreferrer"
							>
								FLOW
							</a>
						</div>
						<div className="flex justify-evenly mt-4">
							<a
								href="https://github.com/zeekrs"
								target="_blank"
								rel="noreferrer"
							>
								<IconFont size={2} name="github" />
							</a>
							<a href="mailto:contact@zeekrs.dev">
								<IconFont size={2} name="mail" />
							</a>

							<Link href={'/contact/wechat'} passHref>
								<a target="_blank">
									<IconFont size={2} name="wechat" />
								</a>
							</Link>
							<a
								href={
									'tencent://message/?uin=263721301&Site=zeekrs.com&Menu=yes'
								}
							>
								<IconFont size={2} name="qq" />
							</a>
						</div>
					</div>
					<div className="shadow rounded mt-2 px-4">
						<div className=" font-bold text-black text-lg py-4">CATEGORIES</div>
						<div className=" border-b" />
						{articles.map((item, index) => {
							return (
								<div
									key={index}
									className="py-2 truncate cursor-pointer text-gray-600 hover:text-black"
								>
									{item.title}
								</div>
							)
						})}
					</div>
					<div className="shadow rounded mt-2 px-4">
						<div className=" font-bold text-black text-lg py-4">HOT POSTS</div>
						<div className=" border-b" />
						{articles.map((item, index) => {
							return (
								<div
									key={index}
									className="py-2 truncate cursor-pointer text-gray-600 hover:text-black"
								>
									{item.title}
								</div>
							)
						})}
					</div>
					<div className="shadow rounded mt-2 px-4">
						<div className=" font-bold text-black text-lg py-4">TAGS</div>
						<div className=" border-b" />
						<div className="flex flex-wrap gap-2 py-4">
							{tags.map((item) => {
								return (
									<div
										key={item}
										className="py-2 px-4 rounded  cursor-pointer bg-gray-900 text-gray-300 hover:bg-black hover:text-white"
									>
										{item}
									</div>
								)
							})}
						</div>
					</div>
				</div>
				<div className="flex-1 w-0  ">
					{articles.map((item) => {
						return (
							<div className="group mt-4 shadow rounded cursor hover:shadow-lg transition-all overflow-hidden">
								<Image
									className="transition duration-500 transform group-hover:scale-110"
									src={item.coverImage}
									layout="responsive"
									width={360}
									height={128}
									objectFit="cover"
								/>
								<div className="p-4">
									<div className="font-bold w-full text-xl  flex-none truncate overflow-hidden text-gray-700 group-hover:text-gray-900">
										{item.title}
									</div>
									<div className="pt-2 text-justify text-line-3 text-gray-500 group-hover:text-gray-700 transform ">
										{item.content}
									</div>
								</div>
								<div className="flex gap-2 px-4 flex-wrap">
									{item.tags.map((tag) => {
										return (
											<div className=" bg-gray-800 text-white rounded px-2 py-1">
												{tag}
											</div>
										)
									})}
								</div>
								<div className="mx-4 mt-2 border-t" />
								<div className="flex flex-wrap gap-8 p-4 text-sm">
									<div className="flex items-center cursor-pointer">
										<IconFont size={1} name="comment" />
										<span className="ml-1"> 22 评论</span>
									</div>
									<div className="flex items-center cursor-pointer">
										<IconFont size={1} name="heart" />
										<span className="ml-1"> 11 点赞</span>
									</div>
									<div className="flex items-center cursor-pointer">
										<IconFont size={1} name="read" />
										<span className="ml-1"> 33 阅读</span>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</>
	)
}

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}
