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
					'啊吧啊吧啊吧办法水电费埃里克束带结啊吧啊吧啊吧办法啊吧啊吧啊吧啊吧啊吧办法水电费埃里克束带结啊吧啊吧啊吧办法啊吧啊吧啊吧办法水电费埃里克束带结啊吧啊吧啊吧办法水电费埃里克束带结发发水电费埃里克束带结发发啊吧办法水电费埃里克束带结啊吧啊吧啊吧办法水电费埃里克束带结发发水电费埃里克束带结发发;啊吧啊吧啊吧办法水电费埃里克束带结啊吧啊吧啊吧办法水电费埃里克束带结发发;点击foe文件发售考虑对方均为;案件发生了地方叫我案件发生;颠覆了看见爱上;非叫我艾尔建覅偶',
				coverImage:
					'https://img2.tapimg.com/bbcode/images/be2d2472489319c9600369a932b06677.png?imageView2/2/w/1320/h/9999/q/80/format/jpg/interlace/1/ignore-error/1',
				tags: [],
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

			<div className="flex">
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
				<div className="flex-1 w-0">
					{articles.map((item) => {
						return (
							<div
								className="ml-4 mt-4 h-48 overflow-hidden shadow rounded  cursor-pointer relative  flex hover:shadow-lg text-gray-700  hover:text-black transition-all"
								key={item.id}
							>
								<div className="flex-none w-48 ">
									<Image
										src={item.coverImage}
										width={192}
										height={192}
										objectFit="cover"
									/>
								</div>
								<div className="flex-1 overflow-hidden text-justify p-4 pb-0 flex flex-col h-full">
									<div className="font-bold text-xl flex-none truncate overflow-hidden">
										{item.title}
									</div>
									<div className="text-base my-1 overflow-hidden line-3">
										{item.content}
									</div>
									<div className="flex-none my-1 flex text-sm items-center ">
										<div className=" bg-gray-800 text-white rounded px-2 py-1">
											JAVA
										</div>
										<div className=" ml-2 bg-gray-800 text-white rounded px-2 py-1">
											虚拟机
										</div>
										<div className="ml-2 bg-gray-800 text-white rounded px-2 py-1">
											Script
										</div>
									</div>
									<div className=" flex-none flex  text-gray-500">
										<div className="flex items-center">
											<IconFont size={1} name="comment" />
											<span className="ml-1">22</span>
										</div>
										<div className="ml-2 flex items-center">
											<IconFont size={1} name="heart" />
											<span>11</span>
										</div>
										<div className="ml-2  flex items-center">
											<IconFont size={1} name="eye" />
											<span>33</span>
										</div>
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
