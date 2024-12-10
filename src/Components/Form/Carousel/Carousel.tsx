import React, { useState } from 'react'
import { LeftArrow } from '../../../assets/icons/leftArrow'
import { RightArrow } from '../../../assets/icons/rightArrow'
import { GrainIcon } from '../../../assets/icons/Icon=Grain'
import { WheatIcon } from '../../../assets/icons/Icon=Wheat'
import css from './Carousel.module.css'
import { breadVariants } from '../../../data/bread'

type Props = {
	data: string[]
}

const Carousel = ({ data }: Props) => {
	const [value, setValue] = useState(0)
	const nextValue = () => {
		setValue(prevValue => {
			if (prevValue >= data.length - 1) return 0
			return prevValue + 1
		})
	}
	const prevValue = () => {
		setValue(prevValue => {
			if (prevValue === 0) return data.length - 1
			return prevValue - 1
		})
	}
	const breadIcon = value == 0 ? <GrainIcon /> : <WheatIcon/>
	return (
		<div className={css.container}>
			<LeftArrow onClick={prevValue} />
			<div className={css.inputContainer}>
				{data === breadVariants && breadIcon}
					
				<input type='text' value={data[value]} disabled />
			</div>
			<RightArrow onClick={nextValue} />
		</div>
	)
}

export { Carousel }
