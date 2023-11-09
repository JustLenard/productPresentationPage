// components/StickyHeader.js
import Link from 'next/link'
import AG1 from '../logos/AG-One'
import { MButton } from '../MaterialComponents'
import ArrowRight from '../logos/ArrowRight'

const StickyHeader = () => {
	return (
		<div className="fixed top-0 left-0 right-0 bg-white z-10 shadow-lg p-4">
			<div className="flex items-center justify-between">
				<div className="logoDynamic_FyWHC">
					<AG1 />
				</div>
				<div className="content_KhF81 __mobile_cH7bF">
					FREE VITAMIN D3 + K2 + 5 TRAVEL PACKS**
				</div>
				<div>
					<MButton className="rounded-full" color="light-green">
						Unlock Offer
						<ArrowRight />
					</MButton>
				</div>
			</div>
		</div>
	)
}

export default StickyHeader
