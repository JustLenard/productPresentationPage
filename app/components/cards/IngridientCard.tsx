import { IngridientCardT } from '@/app/utils/types'
import Image from 'next/image'
import { MTypography } from '../MaterialComponents'

const IngridientCard: React.FC<IngridientCardT> = ({ content, imageSrc, title, imageAlt }) => {
	return (
		<div className="display-block p-2">
			<Image className=" mb-3" width={300} height={296} src={imageSrc} alt={imageAlt} />
			<MTypography className="font-medium text-2xl mb-3">{title}</MTypography>
			<MTypography>{content}</MTypography>
		</div>
	)
}

export default IngridientCard
