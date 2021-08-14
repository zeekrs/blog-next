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
								className="rounded-full"
								src="https://img2.tapimg.com/bbcode/images/be2d2472489319c9600369a932b06677.png?imageView2/2/w/1320/h/9999/q/80/format/jpg/interlace/1/ignore-error/1"
								width={64}
								height={64}
								objectFit="cover"
							/>
						</div>
						<div className="text-center mt-2 font-serif font-bold">Zeekrs</div>
						<div className="text-center mt-1 text-gray-500 font-serif">
							full stack developer
						</div>
						<div className="text-center mt-2 font-serif ">just do it</div>
						<div className="flex justify-evenly mt-8">
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
							<a
								href="https://uri.amap.com/marker?position=116.418834,39.997673"
								target="_blank"
								rel="noreferrer"
							>
								<IconFont size={2} name="location" />
							</a>
						</div>
					</div>
				</div>
				<div className="flex-1 w-0  ">
					{articles.map((item) => {
						return (
							<div className="group mt-4 shadow rounded cursor hover:shadow-lg transition-all overflow-hidden">
								<Image
									className="transition duration-500 transform hover:scale-110"
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
									<div className="pt-2 text-justify text-line-3 text-gray-500 group-hover:text-gray-700 transform group-hover:scale-110">
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
								<div className="flex flex-wrap gap-4 p-4  text-blue-800">
									<div className="flex items-center">
										<IconFont size={1} name="comment" />
										<span className="ml-1">22</span>
									</div>
									<div className="flex items-center">
										<IconFont size={1} name="heart" />
										<span>11</span>
									</div>
									<div className="flex items-center">
										<IconFont size={1} name="eye" />
										<span>33</span>
									</div>
									<div className="flex items-center">
										12
										<svg
											className="fill-current text-green-600 w-4 h-4 hover:text-indigo-700"
											viewBox="0 0 1024 1024"
										>
											<path d="M468.476 632.834a240.048 240.048 0 0 1-110.052-8.37c-11.358-3.672-52.866 39.78-63.18 34.524-6.12-3.132 18.54-54.522 12.834-58.158C257.066 568.25 224 515.906 224 456.884 224 358.082 316.682 278 431 278c107.802 0 196.344 71.208 206.1 162.162 90.684 3.546 162.9 66.294 162.9 143.172 0 47.754-27.846 90.036-70.686 116.1-8.064 4.896 17.46 46.26 8.424 49.95-5.58 2.268-45.432-32.76-51.336-30.996-17.946 5.364-37.26 8.28-57.402 8.28-73.674 0-136.476-39.06-160.524-93.834z m-9.468-33.84c-9.108 1.26-18.468 1.926-28.008 1.926-23.868 0-46.602-4.104-67.248-11.52-2.052-0.738-9.396-2.952-13.356 0-8.928 6.642-20.916 20.43-20.916 20.43s4.392-10.044 5.868-24.696c0.666-6.696-9.558-11.394-11.592-12.78C284.876 546.074 260 502.64 260 457.46c0-79.236 76.554-143.46 171-143.46 88.182 0 160.776 55.98 170.01 127.908C519.884 453.104 458 512.18 458 583.334c0 5.292 0.342 10.53 1.008 15.66zM512 962c248.526 0 450-201.474 450-450S760.526 62 512 62 62 263.474 62 512s201.474 450 450 450z m-153-540a27 27 0 1 0 0-54 27 27 0 0 0 0 54z m144 0a27 27 0 1 0 0-54 27 27 0 0 0 0 54z m63 126a18 18 0 1 0 0-36 18 18 0 0 0 0 36z m108 0a18 18 0 1 0 0-36 18 18 0 0 0 0 36z" />
										</svg>
									</div>
								</div>
							</div>
						)
						// 	return (
						// 		<div
						// 			className="ml-4 mt-4 overflow-hidden shadow rounded  cursor-pointer relative  hover:shadow-lg text-gray-700  hover:text-black transition-all"
						// 			key={item.id}
						// 		>
						// 			<div className="h-9">
						// 				<Image
						// 					src={item.coverImage}
						// 					layout="fill"
						// 					objectFit="cover"
						// 				/>
						// 			</div>
						// 			<div className="flex-1 overflow-hidden text-justify p-4 pb-0 flex flex-col h-full">
						// 				<div className="font-bold text-xl flex-none truncate overflow-hidden">
						// 					{item.title}
						// 				</div>
						// 				<div className="text-base my-1 overflow-hidden line-3">
						// 					{item.content}
						// 				</div>
						// 				<div className="flex-none my-1 flex text-sm items-center ">
						// 					<div className=" bg-gray-800 text-white rounded px-2 py-1">
						// 						JAVA
						// 					</div>
						// 					<div className=" ml-2 bg-gray-800 text-white rounded px-2 py-1">
						// 						虚拟机
						// 					</div>
						// 					<div className="ml-2 bg-gray-800 text-white rounded px-2 py-1">
						// 						Script
						// 					</div>
						// 				</div>
						// 				<div className=" flex-none flex  text-gray-500">
						// 					<div className="flex items-center">
						// 						<IconFont size={1} name="comment" />
						// 						<span className="ml-1">22</span>
						// 					</div>
						// 					<div className="ml-2 flex items-center">
						// 						<IconFont size={1} name="heart" />
						// 						<span>11</span>
						// 					</div>
						// 					<div className="ml-2  flex items-center">
						// 						<IconFont size={1} name="eye" />
						// 						<span>33</span>
						// 					</div>
						// 				</div>
						// 			</div>
						// 		</div>
						// 	)
					})}
				</div>
			</div>
		</>
	)
}

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}
