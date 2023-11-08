import { ingridientCardData } from '@/app/data'
import IngridientCard from '../cards/IngridientCard'
import { MTypography } from '../MaterialComponents'

const IngridientsSection = () => {
	return (
		<>
			<MTypography>Ingredients optimized for impact</MTypography>
			<MTypography>
				AG1 combines what you get from multiple supplements together into one, simple,
				drinkable habit. It delivers optimal amounts of hard-to get nutrients to improve not
				just your day-to-day, but your long term health.
			</MTypography>

			<div className="inline-grid grid-cols-3">
				{ingridientCardData.map((item, i) => (
					<IngridientCard
						key={i}
						content={item.content}
						imageAlt={item.imageAlt}
						title={item.title}
						imageSrc={item.imageSrc}
					/>
				))}
			</div>
		</>
	)
}

export default IngridientsSection
