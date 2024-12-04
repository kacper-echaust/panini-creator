import React from 'react'
import css from './Form.module.css'
import { Carousel } from './Carousel/Carousel'
import { breadVariants } from '../../data/bread'
import { cheeseVariants } from '../../data/cheese'
import { meatVariants } from '../../data/meat'
import { dressingVariants } from '../../data/dressing'
import { vegetableVariant } from '../../data/vegetable'
import { Switch } from './Switch/Switch'
import { Select } from './Select/Select'
import { Section } from './Section/Section'
type Props = {
	animate: boolean
}

const Form = ({ animate }: Props) => {
	return (
		<form className={`${css.form} ${animate ? css.fadeIn : ''}`}>
			<div className={css.container}>
				<h3>configure base</h3>
				<Section name='Bread'>
					<Carousel data={breadVariants} />
				</Section>
				<Section name='Cheese'>
					<Switch id='cheese'>
						<Select name='Cheese' data={cheeseVariants} />
					</Switch>
				</Section>
				<Section name='Meat'>
					<Switch id='meat'>
						<Select name='Meat' data={meatVariants} />
					</Switch>
				</Section>
				<Section name='Dressing'>
					<Switch id='dressing'>
						<Carousel data={dressingVariants} />
					</Switch>
				</Section>
				<Section name='Vegetables'>
					<div className={css.vegetablesContainer}>
						{vegetableVariant.map((item, index) => {
							return (
								<>
									<input type='checkbox' key={index} id={item} />
									<label htmlFor={item}> {item}</label>
								</>
							)
						})}
					</div>
				</Section>
			</div>
			<div className={css.container}>
				<h3>configure extras</h3>
			</div>
			<div className={css.container}>
				<h3>finalize order</h3>
			</div>
		</form>
	)
}

export { Form }
