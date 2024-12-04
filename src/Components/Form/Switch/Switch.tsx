import React, { ReactNode, useState } from 'react'
import css from './Switch.module.css'
import AddIcon from '../../../assets/icons/AddIcon.jpg'
import SubstractIcon from '../../../assets/icons/SubstractIcon.jpg'

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
		const id = String(Date.now())
		console.log(id)
		setArrayComponents(prevArray => {
			return [
				...prevArray,
				<div id={id} key={id}>
					<img
						src={SubstractIcon}
						alt='substract icon'
						className={css.substractIcon}
						onClick={() => {
							handleDelete(id)
						}}
					/>
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
				<img src={AddIcon} alt='add icon' className={css.addIcon} onClick={handleAdd} />
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
