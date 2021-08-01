/* tslint:disable */
/* eslint-disable */

import React, { CSSProperties, SVGAttributes, FunctionComponent } from 'react'
import { getIconColor } from './helper'

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
	size?: number
	color?: string | string[]
}

const DEFAULT_STYLE: CSSProperties = {
	display: 'block',
}

const IconWechat: FunctionComponent<Props> = ({
	size,
	color,
	style: _style,
	...rest
}) => {
	const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE

	return (
		<svg
			viewBox="0 0 1024 1024"
			width={size + 'rem'}
			height={size + 'rem'}
			style={style}
			{...rest}
		>
			<path
				d="M468.476 632.834a240.048 240.048 0 0 1-110.052-8.37c-11.358-3.672-52.866 39.78-63.18 34.524-6.12-3.132 18.54-54.522 12.834-58.158C257.066 568.25 224 515.906 224 456.884 224 358.082 316.682 278 431 278c107.802 0 196.344 71.208 206.1 162.162 90.684 3.546 162.9 66.294 162.9 143.172 0 47.754-27.846 90.036-70.686 116.1-8.064 4.896 17.46 46.26 8.424 49.95-5.58 2.268-45.432-32.76-51.336-30.996-17.946 5.364-37.26 8.28-57.402 8.28-73.674 0-136.476-39.06-160.524-93.834z m-9.468-33.84c-9.108 1.26-18.468 1.926-28.008 1.926-23.868 0-46.602-4.104-67.248-11.52-2.052-0.738-9.396-2.952-13.356 0-8.928 6.642-20.916 20.43-20.916 20.43s4.392-10.044 5.868-24.696c0.666-6.696-9.558-11.394-11.592-12.78C284.876 546.074 260 502.64 260 457.46c0-79.236 76.554-143.46 171-143.46 88.182 0 160.776 55.98 170.01 127.908C519.884 453.104 458 512.18 458 583.334c0 5.292 0.342 10.53 1.008 15.66zM512 962c248.526 0 450-201.474 450-450S760.526 62 512 62 62 263.474 62 512s201.474 450 450 450z m-153-540a27 27 0 1 0 0-54 27 27 0 0 0 0 54z m144 0a27 27 0 1 0 0-54 27 27 0 0 0 0 54z m63 126a18 18 0 1 0 0-36 18 18 0 0 0 0 36z m108 0a18 18 0 1 0 0-36 18 18 0 0 0 0 36z"
				fill={getIconColor(color, 0, '#2c2c2c')}
			/>
		</svg>
	)
}

IconWechat.defaultProps = {
	size: 1,
}

export default IconWechat
