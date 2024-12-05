import css from './CheckBox.module.css'
import React from 'react'

type Props = {
	name: string
	className?: string
}

const Checkbox = ({ name, className }: Props) => {
	return (
		<>
			<label className={className} htmlFor={name}>
				{name}
			</label>
			<input className={`${css.input} ${className}`} type='checkbox' id={name} />
		</>
	)
}

export { Checkbox }
