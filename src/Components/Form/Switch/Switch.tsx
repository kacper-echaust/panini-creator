import React, { ReactNode, useState } from 'react'
import css from './Switch.module.css'

type Props = {
	children: ReactNode
	id: string
}

const Switch = ({ children, id }: Props) => {
	const [isOn, setIsOn] = useState(true)
	const [arrayComponents, setArrayComponents] = useState<ReactNode[]>([children])

	const handleSwitch = () => {
		setIsOn(!isOn)
	}
	const handleAdd = () => {
		if (!isOn) return
		const id = String(Date.now())
		setArrayComponents(prevArray => {
			return [
				...prevArray,
				<div id={id} key={id}>
					<div
						className={css.substractIcon}
						onClick={() => {
							handleDelete(id)
						}}
					></div>
					{children}
				</div>,
			]
		})
	}
	const handleDelete = (_id: string) => {
		setArrayComponents(prevArray => {
			const filteredArray = prevArray.filter(component => {
				if (React.isValidElement(component) && component.props.id) {
					return component.props.id !== _id
				}
				return true
			})
			return filteredArray
		})
	}
	return (
		<>
			<div className={css.container}>
				<input type='checkbox' id={id} onClick={handleSwitch} className={css.input} />
				<label htmlFor={id} className={css.label}></label>
				<div className={css.addIcon} onClick={handleAdd}></div>
			</div>
			<div className={css.childrenContainer}>
				{isOn &&
					arrayComponents.map(component => {
						return component
					})}
			</div>
		</>
	)
}

export { Switch }
