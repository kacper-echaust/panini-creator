import React, { ReactNode, useState } from 'react'
import css from './Switch.module.css'

type Props = {
	children: ReactNode
}

const Switch = ({ children }: Props) => {
	const [isOn, setIsOn] = useState(true)

	const handleSwitch = () => {
		setIsOn(!isOn)
	}

	return (
		<>
			<div className={css.container}>
				<input type='checkbox' id='switch' onClick={handleSwitch} className={css.input} />
				<label htmlFor='switch' className={css.label}></label>
			</div>
			{isOn && children}
		</>
	)
}

export { Switch }
