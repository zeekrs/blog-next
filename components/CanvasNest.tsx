import React, { useEffect, useRef, useState } from 'react'
export interface CanvasNestConfig {
	count?: number // count of points
	dist?: number // maximum length of line segments between two points
	pointOpacity?: number // transparency of points
	lineColor?: string // color of lines
	lineWidth?: number // multiple of line width
	pointColor?: string // color of points
	pointRadius?: number // radius of the point
	follow?: boolean // is flow of mouse
	mouseDist?: number // mouse point dist
	style?: React.CSSProperties
	className?: string
}

interface Point {
	x?: number | null
	y?: number | null
	xStep?: number
	yStep?: number
	max?: number
}

const CanvasNest: React.FC<CanvasNestConfig> = (props) => {
	const { count, dist, mouseDist, follow } = props
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const [points, setPoints] = useState<Point[]>([])
	const [pointsWithMouse, setPointsWithMouse] = useState<Point[]>([])
	const [outDivWidth, setOutDivWidth] = useState(0)
	const [outDivHeight, setOutDivHeight] = useState(0)
	const animationRef = useRef(0)
	if (animationRef) {
		const [test, setTest] = useState(1)
	}

	useEffect(() => {
		const setSize = () => {
			const parent = canvasRef.current?.parentNode as HTMLElement
			setOutDivWidth(parent.clientWidth)
			setOutDivHeight(parent.clientHeight)
		}
		setSize()
		window.addEventListener('resize', setSize)
		//初始化points
		return () => {
			window.removeEventListener('resize', setSize)
			cancelAnimationFrame(animationRef.current)
			canvasRef.current!.parentNode!.removeChild(canvasRef.current!)
		}
	}, [])

	useEffect(() => {
		init()
		mouseEvent(follow)
		requestAnimationFrame(drawNest)
	})
	const drawNest = () => {
		const { pointColor, pointRadius, pointOpacity, lineWidth, lineColor } =
			props
		const context = canvasRef.current!.getContext('2d')!

		context!.clearRect(0, 0, outDivWidth, outDivHeight)

		for (let index = 0; index < points.length; ++index) {
			const point = points[index]
			context.beginPath()
			context.fillStyle = `rgba(${pointColor},${pointOpacity})`
			context.arc(point.x!, point.y!, pointRadius!, 0, 2 * Math.PI)
			context.fill()

			point.x! += point.xStep! // point movement
			point.y! += point.yStep!
			point.xStep! *=
				point.x! + pointRadius! > outDivWidth || point.x! - pointRadius! < 0
					? -1
					: 1
			point.yStep! *=
				point.y! + pointRadius! > outDivHeight || point.y! - pointRadius! < 0
					? -1
					: 1

			for (let nextIndex = 0; nextIndex < pointsWithMouse.length; ++nextIndex) {
				const nextPoint = pointsWithMouse[nextIndex]
				if (nextPoint.x) {
					const xDist = point.x! - nextPoint.x!
					const yDist = point.y! - nextPoint.y!
					const dist = xDist * xDist + yDist * yDist // the square of the distance between two points

					if (dist < nextPoint.max!)
						nextIndex + 1 === pointsWithMouse.length &&
							dist >= nextPoint.max! / 2 &&
							((point.x! -= 0.03 * xDist), (point.y! -= 0.03 * yDist))

					const scale = (nextPoint.max! - dist) / nextPoint.max!
					context.beginPath()
					context.lineWidth = (scale * lineWidth!) / 2
					context.strokeStyle = `rgba(${lineColor},${scale})`
					context.moveTo(point.x!, point.y!)
					context.lineTo(nextPoint.x, nextPoint.y!)
					context.stroke()
				}
			}
		}
		animationRef.current = requestAnimationFrame(drawNest)
		console.log('drawNest', animationRef.current)
	}
	const mouseEvent = (follow?: boolean) => {
		const parent = canvasRef.current!.parentNode! as HTMLElement

		const setMouseCoordinate = (x: number | null, y: number | null) => {
			const points = [...pointsWithMouse]
			points[points.length - 1] = { x, y, max: props.mouseDist }
			setPointsWithMouse(points)
		}
		const followMouse = (e: MouseEvent) => {
			const x =
				e.clientX - parent.offsetLeft + document.scrollingElement!.scrollLeft
			const y =
				e.clientY - parent.offsetTop + document.scrollingElement!.scrollTop
			setMouseCoordinate(x, y)
		}
		const clearMouse = () => {
			setMouseCoordinate(null, null)
		}

		if (follow) {
			parent.onmousemove = followMouse
			parent.onmouseout = clearMouse
		} else {
			parent.onmousemove = null
			parent.onmouseout = null
			clearMouse()
		}
	}
	const init = () => {
		const randomPoints = () => {
			const points = []
			const width = canvasRef.current!.clientWidth
			const height = canvasRef.current!.clientHeight
			for (let index = 0; index < count!; ++index) {
				points.push({
					x: Math.random() * width,
					y: Math.random() * height,
					xStep: 2 * Math.random() - 1, // step size of point movement
					yStep: 2 * Math.random() - 1,
					max: dist,
				})
			}
			return points
		}
		const points = randomPoints()
		setPoints(points)

		const mouseCoordinate: Point = {
			// mouse coordinate
			x: null,
			y: null,
			max: mouseDist,
		}
		setPointsWithMouse([...points, mouseCoordinate])
	}

	return (
		<canvas
			ref={canvasRef}
			style={props.style}
			width={outDivWidth}
			height={outDivHeight}
			className={props.className}
		/>
	)
}
CanvasNest.defaultProps = {
	count: 88,
	dist: 6000,
	pointOpacity: 1,
	lineColor: '0, 0, 0',
	lineWidth: 1,
	pointColor: '114, 114, 114',
	pointRadius: 20,
	follow: true,
	mouseDist: 20000,
	style: {
		zIndex: 9999,
		opacity: 1, // transparency of canvas
		display: 'block',
		position: 'absolute',
	},
}
export default CanvasNest
