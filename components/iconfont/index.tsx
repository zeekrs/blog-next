/* tslint:disable */
/* eslint-disable */

import React, { SVGAttributes, FunctionComponent } from 'react'
import IconWechat from './IconWechat'
import IconQq from './IconQq'
import IconMail from './IconMail'
import IconLocation from './IconLocation'
import IconGithub from './IconGithub'

export type IconNames = 'wechat' | 'qq' | 'mail' | 'location' | 'github'

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
	name: IconNames
	size?: number
	color?: string | string[]
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
	switch (name) {
		case 'wechat':
			return <IconWechat {...rest} />
		case 'qq':
			return <IconQq {...rest} />
		case 'mail':
			return <IconMail {...rest} />
		case 'location':
			return <IconLocation {...rest} />
		case 'github':
			return <IconGithub {...rest} />
	}

	return null
}

export default IconFont
