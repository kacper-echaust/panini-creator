import React from 'react'
import css from './Form.module.css'
import { Carousel } from './Carousel/Carousel'
import { breadVariants } from '../../data/bread'
import { cheeseVariants } from '../../data/cheese'
import { meatVariants } from '../../data/meat'
import { dressingVariants } from '../../data/dressing'
import { vegetableVariant } from '../../data/vegetable'
import { eggVariants } from '../../data/egg'
import { spreadVariant } from '../../data/spread'
import { servingVariant } from '../../data/serving'
import { toppingVariant } from '../../data/topping'
import { Switch } from './Switch/Switch'
import { Select } from './Select/Select'
import { Section } from './Section/Section'
import { Checkbox } from './Checkbox/Checkbox'
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
				<Section name='Egg'>
					<Switch id='egg'>
						<Select name='egg' data={eggVariants} />
					</Switch>
				</Section>
				<Section name='Spreads'>
					<div>
						{spreadVariant.map(spread => {
							return (
								<div className={css.spreadContainer}>
									<Checkbox name={spread} />
								</div>
							)
						})}
					</div>
				</Section>
				<Section name='Serving'>
					<div className={css.servingContainer}>
						{servingVariant.map(serving => {
							return (
								<div className={css.servingContainer}>
									<Checkbox name={serving} className={css.radiusCheckbox} />
								</div>
							)
						})}
					</div>
				</Section>
				<Section name='Topping'>
					<div>
						{toppingVariant.map(topping => {
							return (
								<div className={css.toppingContainer}>
									<Checkbox name={topping} />
								</div>
							)
						})}
					</div>
				</Section>
			</div>
			<div className={css.container}>
				<h3>finalize order</h3>
			</div>
		</form>
	)
}

export { Form }
