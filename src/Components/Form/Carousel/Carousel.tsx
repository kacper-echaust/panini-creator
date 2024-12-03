import React, { useState } from 'react'
import { LeftArrow } from '../../../assets/icons/leftArrow'
import { RightArrow } from '../../../assets/icons/rightArrow'
import css from './Carousel.module.css'

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
	return (
		<div className={css.container}>
			<LeftArrow onClick={prevValue} />
			<input type='text' value={data[value]} disabled />
			<RightArrow onClick={nextValue}/>
		</div>
	)
}

export { Carousel }
