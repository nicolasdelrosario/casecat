import Image from 'next/image'

import { MaxWidthWrapper } from '@/components'
import ReviewGrid from './ReviewGrid'

export default function Reviews() {
	return (
		<MaxWidthWrapper className='relative max-w-5xl'>
			<Image
				aria-hidden={true}
				src='/what-people-are-buying.png'
				alt='Reviews Image'
				width={200}
				height={150}
				className='absolute -left-32 top-1/3 hidden select-none xl:block'
			></Image>

			<ReviewGrid />
		</MaxWidthWrapper>
	)
}
