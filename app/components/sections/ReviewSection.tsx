import { reviews } from '@/app/data'
import ReviewCard from '../cards/ReviewCard'
import { MTypography } from '../MaterialComponents'

const ReviewSection = () => {
	return (
		<div>
			<MTypography>5 Stars from over 30,000 members.</MTypography>
			<div className="flex gap-5">
				{reviews.map((review, i) => (
					<ReviewCard
						title={review.title}
						author={review.author}
						content={review.content}
						key={i}
					/>
				))}
			</div>
		</div>
	)
}

export default ReviewSection
