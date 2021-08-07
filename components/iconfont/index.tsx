/* tslint:disable */
/* eslint-disable */

import React, { SVGAttributes, FunctionComponent } from 'react'
import IconEye from './IconEye'
import IconComment from './IconComment'
import IconHeart from './IconHeart'
import IconHeartFull from './IconHeartFull'
import IconWechat from './IconWechat'
import IconQq from './IconQq'
import IconMail from './IconMail'
import IconLocation from './IconLocation'
import IconGithub from './IconGithub'

export type IconNames =
	| 'eye'
	| 'comment'
	| 'heart'
	| 'heart-full'
	| 'wechat'
	| 'qq'
	| 'mail'
	| 'location'
	| 'github'

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
	name: IconNames
	size?: number
	color?: string | string[]
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
	switch (name) {
		case 'eye':
			return <IconEye {...rest} />
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
		case 'location':
			return <IconLocation {...rest} />
		case 'github':
			return <IconGithub {...rest} />
	}

	return null
}

export default IconFont
