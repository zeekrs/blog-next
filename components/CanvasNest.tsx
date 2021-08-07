import React, { useEffect, useRef, useState } from 'react'
export interface CanvasNestConfig {
	className?: string
	style?: React.CSSProperties
	pointCount?: number
	mouseDistance?: number
	pointDistance?: number
	pointColor?: string
	pointRadius?: number
	lineColor?: string
	lineWidth?: number
	pointOpacity?: number // transparency of points
}
interface Point {
	x: number
	y: number
	xStep: number
	yStep: number
	max: number
}
interface MousePoint {
	x: number | null
	y: number | null
	max: number
}
const CanvasNest: React.FC<CanvasNestConfig> = (props) => {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const [canvasWidth, setCanvasWidth] = useState(0)
	const [canvasHeight, setCanvasHeight] = useState(0)
	const pointsRef = useRef<Point[]>([])
	const animationRef = useRef(0)
	const mousePoint = useRef<MousePoint>({
		x: null,
		y: null,
		max: props.mouseDistance!,
	})
	useEffect(() => {
		const parentElement = canvasRef.current!.parentElement!

		const onResize = () => {
			setCanvasWidth(parentElement.clientWidth)
			setCanvasHeight(parentElement.scrollHeight)
			// pointsRef.current = randomPoints()
		}
		onResize()
		pointsRef.current = randomPoints()
		window.addEventListener('resize', onResize)
		parentElement.onmousemove = (e) => {
			const x =
				e.clientX -
				parentElement.offsetLeft +
				document.scrollingElement!.scrollLeft
			const y =
				e.clientY -
				parentElement.offsetTop +
				document.scrollingElement!.scrollTop

			mousePoint.current.x = x
			mousePoint.current.y = y
		}
		parentElement.onmouseout = () => {
			mousePoint.current = {
				x: null,
				y: null,
				max: props.mouseDistance!,
			}
		}
		requestAnimationFrame(drawCanvas)
		return () => {
			window.removeEventListener('resize', onResize)
			parentElement.onmouseout = null
			parentElement.onmousemove = null
			cancelAnimationFrame(animationRef.current)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const drawCanvas = () => {
		const { pointColor, lineColor, pointOpacity, pointRadius, lineWidth } =
			props
		const cavas = canvasRef.current!
		const context = cavas.getContext('2d')!
		const width = cavas.width
		const height = cavas.height
		context.clearRect(0, 0, width, height)
		// 随机的线条和当前位置联合数组
		// 遍历处理每一个点
		const points = pointsRef.current
		points.forEach((point) => {
			//绘制一个圆
			context.beginPath()
			context.fillStyle = `rgba(${pointColor},${pointOpacity})`
			context.arc(point.x, point.y, pointRadius!, 0, 2 * Math.PI)
			context.fill()
			point.x += point.xStep //移动点
			point.y += point.yStep
			// 碰到边界，反向反弹
			point.xStep *=
				point.x + pointRadius! > width || point.x - pointRadius! < 0 ? -1 : 1
			point.yStep *=
				point.y + pointRadius! > height || point.y - pointRadius! < 0 ? -1 : 1
			// 从下一个点开始
			for (let nextIndex = 0; nextIndex < points.length + 1; nextIndex++) {
				const nextPoint =
					nextIndex === points.length ? mousePoint.current : points[nextIndex]

				// 当前点存在
				if (nextPoint.x && nextPoint.y) {
					const xDistance = point.x - nextPoint.x // x轴距离 l
					const yDistance = point.y - nextPoint.y // y轴距离 n
					const distance = xDistance * xDistance + yDistance * yDistance // 总距离, m
					if (distance < nextPoint.max)
						nextIndex === points.length &&
							distance >= nextPoint.max / 2 &&
							((point.x -= 0.03 * xDistance), (point.y -= 0.03 * yDistance))

					const scale = (nextPoint.max - distance) / nextPoint.max
					context.beginPath()
					context.lineWidth = (scale * lineWidth!) / 2
					context.strokeStyle = `rgba(${lineColor},${scale})`
					context.moveTo(point.x, point.y)
					context.lineTo(nextPoint.x, nextPoint.y)
					context.stroke()
				}
			}
		})
		animationRef.current = requestAnimationFrame(drawCanvas)
	}

	const randomPoints = () => {
		const { pointCount, pointDistance } = props
		const parentElement = canvasRef.current!.parentElement!
		let points: Point[] = []
		for (let i = 0; i < pointCount!; i++) {
			const point: Point = {
				x: Math.random() * parentElement.clientWidth,
				y: Math.random() * parentElement.clientHeight,
				xStep: 2 * Math.random() - 1,
				yStep: 2 * Math.random() - 1,
				max: pointDistance!,
			}
			points.push(point)
		}
		return points
	}

	return (
		<canvas
			ref={canvasRef}
			style={props.style}
			className={props.className}
			width={canvasWidth}
			height={canvasHeight}
		></canvas>
	)
}
CanvasNest.defaultProps = {
	style: {
		display: 'block',
		zIndex: -1,
		position: 'absolute',
		top: 0,
		left: 0,
	},
	pointCount: 66,
	mouseDistance: 20000,
	pointDistance: 6000,
	lineColor: '255,0,0',
	pointColor: '255,0,0',
	lineWidth: 1,
	pointOpacity: 1,
	pointRadius: 1,
}
export default CanvasNest
