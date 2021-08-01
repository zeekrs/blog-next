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

const IconMail: FunctionComponent<Props> = ({
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
				d="M512.268258 64.430032c-247.183323 0-447.569968 200.384597-447.569968 447.57304 0 247.1823 200.385621 447.56792 447.569968 447.56792s447.569968-200.385621 447.569968-447.56792c0-247.189467-200.386645-447.57304-447.569968-447.57304z m250.63996 279.572912L513.037196 588.684915l-252.244389-244.681971h502.115411z m-519.180508 35.60766l139.605741 133.484953-139.605741 130.956981V379.610604z m17.561682 300.386452L409.779385 534.941175l102.685459 98.191626 101.170109-98.191626 150.007391 145.055881H261.289392z m519.519413-35.944518L637.395236 512.731054l143.413569-135.081191v266.402675z"
				fill={getIconColor(color, 0, '#2c2c2c')}
			/>
		</svg>
	)
}

IconMail.defaultProps = {
	size: 1,
}

export default IconMail
