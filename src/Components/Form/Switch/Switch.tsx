import React from 'react'
import css from './Switch.module.css'

const Switch = () => {

	return (
		<>
			<input type='checkbox' id='switch' className={css.input}/>
			<label htmlFor='switch' className={css.label}></label>
		</>
	)
}

export { Switch }
