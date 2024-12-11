import React, { useState } from 'react'
import css from './Select.module.css'

type Props = {
	data: string[]
	name: string
}

const Select = ({ data, name }: Props) => {
	const [value, setValue] = useState(data[0])
	const [showOption, setShowOption] = useState(false)

	const handleShowOption = () => {
		setShowOption(!showOption)
	}

	return (
		<div className={`${css.customSelect} ${showOption && css.customSelectFocus}`}>
			<div className={css.select} onClick={handleShowOption}>
				{value}
				<div className={`${showOption && css.showOption} ${css.optionContainer}`}>
					{data.map((item, index) => {
						return (
							<div
								key={index}
								className={css.option}
								onClick={() => {
									setValue(item)
								}}>
								<span>{item}</span>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export { Select }
