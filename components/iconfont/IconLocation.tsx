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

const IconLocation: FunctionComponent<Props> = ({
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
				d="M515.2 67.2c-246.4 0-448 201.6-448 448s201.6 448 448 448 448-201.6 448-448c0-249.6-201.6-448-448-448z m73.6 620.8l-60.8 70.4c-3.2 3.2-9.6 6.4-12.8 6.4-6.4 0-9.6-3.2-12.8-6.4-6.4-9.6-188.8-198.4-188.8-304 0-112 89.6-201.6 201.6-201.6s201.6 89.6 201.6 201.6c-3.2 54.4-44.8 131.2-128 233.6z"
				fill={getIconColor(color, 0, '#2c2c2c')}
			/>
			<path
				d="M512 454.4m-92.8 0a92.8 92.8 0 1 0 185.6 0 92.8 92.8 0 1 0-185.6 0Z"
				fill={getIconColor(color, 1, '#2c2c2c')}
			/>
		</svg>
	)
}

IconLocation.defaultProps = {
	size: 1,
}

export default IconLocation
