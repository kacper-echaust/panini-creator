import React, { useState } from 'react'
import css from './Select.module.css'

type Props = {
	data: string[]
	name: string
}

const Select = ({ data, name }: Props) => {
	const [value, setValue] = useState('')

	const handleChange = event => {
		event.target.blur()
		setValue(event.target.value)
	}

	return (
		<div className={css.customSelect}>
			<select value={value} name={name} className={css.select} onChange={handleChange}>
				{data.map((item, index) => {
					return (
						<option key={index} value={item}>
							{item}
						</option>
					)
				})}
			</select>
		</div>
	)
}

export { Select }
