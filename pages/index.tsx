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
				title: `测试标题${i}`,
				content:
					'啊吧啊吧啊吧办法水电费埃里克束带结发;世纪东方拉三等奖发了圣诞节氛围IE卷发梳砥砺奋进OA王嘉尔法拉盛;点击foe文件发售考虑对方均为;案件发生了地方叫我案件发生;颠覆了看见爱上;非叫我艾尔建覅偶',
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
						<div className="flex  justify-evenly mt-8">
							<a
								href="https://github.com/zeekrs"
								target="_blank"
								rel="noreferrer"
							>
								<IconFont className="w-8 h-8" name="github" />
							</a>
							<a href="mailto:contact@zeekrs.dev">
								<IconFont className="w-8 h-8" name="mail" />
							</a>

							<Link href={'/contact/wechat'} passHref>
								<a target="_blank">
									<IconFont className="w-8 h-8 cursor-pointer" name="wechat" />
								</a>
							</Link>
							<a
								href={
									'tencent://message/?uin=263721301&Site=zeekrs.com&Menu=yes'
								}
							>
								<IconFont className="w-8 h-8" name="qq" />
							</a>
							<a
								href="https://uri.amap.com/marker?position=116.418834,39.997673"
								target="_blank"
								rel="noreferrer"
							>
								<IconFont className="w-8 h-8" name="location" />
							</a>
						</div>
					</div>
				</div>
				<div className="flex-grow  mt-4 ml-4 shadow rounded px-4">
					{articles.map((item) => {
						return (
							<div className="mt-4" key={item.id}>
								<div className="font-bold text-xl">{item.title}</div>
								<div className="text-base mt-4">{item.content}</div>
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
