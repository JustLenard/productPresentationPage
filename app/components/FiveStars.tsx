import Image from 'next/image'

const FiveStars = () => {
	return (
		<div className="flex mb-5">
			{[...Array(5)].map((_, i) => (
				<Image
					key={i}
					className="pr-1"
					width={30}
					height={30}
					src="https://athletic-greens-new.cdn.prismic.io/athletic-greens-new/b92e2770-6610-42a4-871b-b345441b7d3d_star-v2.svg"
					alt="rating star image"
				/>
			))}
		</div>
	)
}

export default FiveStars
