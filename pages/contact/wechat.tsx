import Image from 'next/image'
import qrCode from '@public/images/wechat-qrcode.jpeg'

function WeChat() {
	return (
		<div className="bg-gray-100 h-full min-h-screen flex justify-center items-center">
			<div>
				<Image src={qrCode} layout="intrinsic" />
			</div>
		</div>
	)
}

export default WeChat
