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

const IconQq: FunctionComponent<Props> = ({
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
				d="M511.5 63.4c-247.4 0-448 200.6-448 448 0 247.4 200.6 448 448 448s448-200.6 448-448C959.5 263.9 758.9 63.4 511.5 63.4L511.5 63.4zM758.1 651c-11.6 10.8-31.4-1-50.5-27.4-8.3 22.4-19.1 43-31.6 61.5 27 9.6 44.4 24.7 44.4 41.7 0 29.3-51.9 53-115.9 53-38 0-71.5-8.3-92.8-21.2-21 12.9-54.8 21.2-92.8 21.2-64 0-115.9-23.7-115.9-53 0-16.8 17.4-32 44.4-41.7-12.7-18.5-23.3-39.1-31.6-61.5-19.1 26.2-39 38.2-50.5 27.4-15.8-14.8-9.8-67.3 13.7-117.1 5.4-11.4 11.2-21.6 17.2-30.5 3.3-144.6 98.5-260.7 215.4-260.7l0.4 0c116.9 0 212.1 115.9 215.4 260.7 6 8.9 11.8 19.1 17.2 30.5C767.8 583.7 774 636.2 758.1 651L758.1 651zM758.1 651"
				fill={getIconColor(color, 0, '#2c2c2c')}
			/>
		</svg>
	)
}

IconQq.defaultProps = {
	size: 1,
}

export default IconQq
