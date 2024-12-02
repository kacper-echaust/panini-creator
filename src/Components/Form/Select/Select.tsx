import React from 'react'
import css from './Select.module.css'

type Props = {
	data: string[]
	name: string
}

const Select = ({ data, name }: Props) => {
	return (
		<div className={css.customSelect}>
			<select
				name={name}
				id={name}
				className={css.select}
				onChange={e => {
					e.target.blur()
				}}>
				{data.map(item => {
					return (
						<>
							<option value={item}>{item}</option>
						</>
					)
				})}
			</select>
		</div>
	)
}

export { Select }
