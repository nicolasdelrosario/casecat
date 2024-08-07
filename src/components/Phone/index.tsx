import { cn } from '@/lib/utils'
import { HtmlHTMLAttributes } from 'react'
import Image from 'next/image'

interface PhoneProps extends HtmlHTMLAttributes<HTMLDivElement> {
	imgSrc: string
	dark?: boolean
}

export default function Phone({
	imgSrc,
	dark = false,
	className,
	...props
}: PhoneProps) {
	return (
		<div
			className={cn(
				'pointer-events-none relative z-50 overflow-hidden',
				className
			)}
			{...props}
		>
			<Image
				alt='Phone Image'
				width={500}
				height={500}
				src={
					dark
						? '/phone-template-dark-edges.png'
						: '/phone-template-white-edges.png'
				}
				className='pointer-events-none z-50 select-none'
			/>

			<div className='absolute inset-0 -z-10'>
				<Image
					alt='Overlay Phone Image'
					width={500}
					height={500}
					src={imgSrc}
					className='object-cover'
				/>
			</div>
		</div>
	)
}
