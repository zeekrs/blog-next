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
				d="M471.3472 949.6576l0.4096 0.4096c21.7088 22.3232 57.4464 22.8352 79.7696 1.1264l1.024-1.024C752.8448 744.96 852.992 558.3872 852.992 390.3488c0-184.1152-152.576-333.312-340.7872-333.312s-340.992 149.0944-340.992 333.2096c0 167.2192 100.0448 353.6896 300.1344 559.4112zM512 512.1024c-63.0784 0-114.2784-51.2-114.2784-114.2784s51.2-114.2784 114.2784-114.2784 114.2784 51.2 114.2784 114.2784c0 63.0784-51.2 114.2784-114.2784 114.2784z"
				fill={getIconColor(color, 0, '#323233')}
			/>
		</svg>
	)
}

IconLocation.defaultProps = {
	size: 1,
}

export default IconLocation
