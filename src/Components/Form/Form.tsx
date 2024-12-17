import React, { useContext } from 'react';
import css from './Form.module.css';
import { Carousel } from './Carousel/Carousel';
import { breadVariants } from '../../data/bread';
import { cheeseVariants } from '../../data/cheese';
import { meatVariants } from '../../data/meat';
import { dressingVariants } from '../../data/dressing';
import { vegetableVariant } from '../../data/vegetable';
import { eggVariants } from '../../data/egg';
import { spreadVariant } from '../../data/spread';
import { servingVariant } from '../../data/serving';
import { toppingVariant } from '../../data/topping';
import { Switch } from './Switch/Switch';
import { Select } from './Select/Select';
import { Section } from './Section/Section';
import { Checkbox } from './Checkbox/Checkbox';
import dices from '../../assets/icons/Dices.jpg';
import { GridSelector } from './GridSelector/GridSelector';
import { PaniniContext, SplashScreenValues } from '../../context/PaniniContext';

const Form = () => {
  const { animate, setAnimate, setSplashScreenValues } = useContext(PaniniContext);
  const sendOrder = () => {
    setAnimate(false);
    setSplashScreenValues({
      headerName: SplashScreenValues.PaniniOrdered,
      buttonName: SplashScreenValues.StartAgain,
    });
  };
  return (
    <form className={`${css.form} ${animate ? css.fadeIn : ''}`}>
      <div className={css.header}>
        <h1>Panini Creator</h1>
      </div>
      <div className={css.randomizePaniniButton}>
        <button>
          <img src={dices} alt="dices" />
          randomize panini
        </button>
      </div>
      <div className={css.container}>
        <h3>configure base</h3>
        <Section name="Bread">
          <Carousel data={breadVariants} />
        </Section>
        <Section name="Cheese">
          <Switch id="cheese">
            <Select name="Cheese" data={cheeseVariants} />
          </Switch>
        </Section>
        <Section name="Meat">
          <Switch id="meat">
            <Select name="Meat" data={meatVariants} />
          </Switch>
        </Section>
        <Section name="Dressing">
          <Switch id="dressing">
            <Carousel data={dressingVariants} />
          </Switch>
        </Section>
        <Section name="Vegetables">
          <GridSelector data={vegetableVariant} />
        </Section>
      </div>
      <div className={css.container}>
        <h3>configure extras</h3>
        <Section name="Egg">
          <Switch id="egg">
            <Select name="egg" data={eggVariants} />
          </Switch>
        </Section>
        <Section name="Spreads">
          <div>
            {spreadVariant.map((spread, index) => {
              return (
                <div className={css.spreadContainer} key={index}>
                  <Checkbox name={spread} />
                </div>
              );
            })}
          </div>
        </Section>
        <Section name="Serving">
          <div className={css.servingContainer}>
            {servingVariant.map((serving, index) => {
              return (
                <div className={css.servingContainer} key={index}>
                  <Checkbox name={serving} className={css.radiusCheckbox} />
                </div>
              );
            })}
          </div>
        </Section>
        <Section name="Topping">
          <div>
            {toppingVariant.map((topping, index) => {
              return (
                <div className={css.toppingContainer} key={index}>
                  <Checkbox name={topping} />
                </div>
              );
            })}
          </div>
        </Section>
      </div>
      <div className={css.container}>
        <h3>finalize order</h3>
        <Section name="Name panini">
          <label htmlFor="paniniName" className={css.inputPaniniName}>
            <input id="paniniName" type="text" placeholder="eg. Club Panini" />
          </label>
        </Section>
        <Section name="Cutlery">
          <div className={css.addToOrderContainer}>
            <Checkbox name="ADD TO ORDER" />
          </div>
        </Section>
        <Section name="Napkins">
          <div className={css.addToOrderContainer}>
            <Checkbox name="ADD TO ORDER" />
          </div>
        </Section>
        <div className={css.endButtonsContainer}>
          <button className={css.placeOrderButton} onClick={sendOrder}>
            place order
          </button>
          <button className={css.startAgainButton}>start again</button>
        </div>
      </div>
    </form>
  );
};

export { Form };
