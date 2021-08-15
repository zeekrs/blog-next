/* tslint:disable */
/* eslint-disable */

import React, { SVGAttributes, FunctionComponent } from 'react'
import IconLocation from './IconLocation'
import IconRead from './IconRead'
import IconComment from './IconComment'
import IconHeart from './IconHeart'
import IconHeartFull from './IconHeartFull'
import IconWechat from './IconWechat'
import IconQq from './IconQq'
import IconMail from './IconMail'
import IconGithub from './IconGithub'

export type IconNames =
	| 'location'
	| 'read'
	| 'comment'
	| 'heart'
	| 'heart-full'
	| 'wechat'
	| 'qq'
	| 'mail'
	| 'github'

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
	name: IconNames
	size?: number
	color?: string | string[]
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
	switch (name) {
		case 'location':
			return <IconLocation {...rest} />
		case 'read':
			return <IconRead {...rest} />
		case 'comment':
			return <IconComment {...rest} />
		case 'heart':
			return <IconHeart {...rest} />
		case 'heart-full':
			return <IconHeartFull {...rest} />
		case 'wechat':
			return <IconWechat {...rest} />
		case 'qq':
			return <IconQq {...rest} />
		case 'mail':
			return <IconMail {...rest} />
		case 'github':
			return <IconGithub {...rest} />
	}

	return null
}

export default IconFont
