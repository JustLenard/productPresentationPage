import ReviewCard from './components/cards/ReviewCard'
import StickyHeader from './components/sections/Header'
import IngridientsSection from './components/sections/IngridientsSection'
import ReviewSection from './components/sections/ReviewSection'
import TellMeAbout from './components/sections/TellMeAbout'
import { reviews } from './data'

const page = () => {
	return (
		<div className="p-1">
			{/* <TellMeAbout /> */}
			<StickyHeader />
			<ReviewSection />
			<IngridientsSection />
		</div>
	)
}

export default page
