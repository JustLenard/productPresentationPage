import Image from 'next/image'
import FiveStars from '../FiveStars'

import { Button, Rating, MTypography } from '../MaterialComponents'
import { ReviewCardT } from '@/app/utils/types'

const ReviewCard: React.FC<ReviewCardT> = ({ author, content, title }) => {
	return (
		<div className="inline-block rounded-lg px-10 py-8 bg-brown-50 w-1/3">
			{/* <Rating value={5} readonly className="mb-5" /> */}
			<FiveStars />
			<MTypography className="text-2xl font-medium">{title}</MTypography>
			<MTypography className="italic ">{content}</MTypography>
			<MTypography className="font-medium text-lg mt-5">{author}</MTypography>
		</div>
	)
}

export default ReviewCard
