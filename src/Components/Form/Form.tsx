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
import { FormProvider, useForm } from 'react-hook-form';

const Form = () => {
  const { animate, setAnimate, setSplashScreenValues } = useContext(PaniniContext);
  const methods = useForm({
    defaultValues: {
      bread: breadVariants[0],
      cheese: [{ value: cheeseVariants[0] }],
      dressing: [{ value: dressingVariants[0] }],
      meat: [{ value: meatVariants[0] }],
      vegetables: [{ value: vegetableVariant[0] }],
      egg: [{ value: eggVariants[0] }],
      spreads: [{ value: spreadVariant[0] }],
      serving: [{ value: servingVariant[0] }],
      topping: [{ value: toppingVariant[0] }],
      cutlery: [],
      napkins: [],
      paniniName: ''
    },
  });

  const sendOrder = (data) => {
    setAnimate(false);
    setSplashScreenValues({
      headerName: SplashScreenValues.PaniniOrdered,
      buttonName: SplashScreenValues.StartAgain,
    });
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form className={`${css.form} ${animate ? css.fadeIn : ''}`} onSubmit={methods.handleSubmit(sendOrder)}>
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
            <Carousel data={breadVariants} name="bread" />
          </Section>
          <Section name="Cheese">
            <Switch switchName="cheese">
              <Select data={cheeseVariants} name="cheese" />
            </Switch>
          </Section>
          <Section name="Meat">
            <Switch switchName="meat">
              <Select data={meatVariants} name="meat" />
            </Switch>
          </Section>
          <Section name="Dressing">
            <Switch switchName="dressing">
              <Carousel data={dressingVariants} name="dressing" />
            </Switch>
          </Section>
          <Section name="Vegetables">
            <GridSelector data={vegetableVariant} name="vegetables" />
          </Section>
        </div>
        <div className={css.container}>
          <h3>configure extras</h3>
          <Section name="Egg">
            <Switch switchName="egg">
              <Select name="egg" data={eggVariants} />
            </Switch>
          </Section>
          <Section name="Spreads">
            <div>
              {spreadVariant.map((spread, index) => {
                return (
                  <div className={css.spreadContainer} key={index}>
                    <Checkbox valueName={spread} name="spreads" />
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
                    <Checkbox name="serving" className={css.radiusCheckbox} valueName={serving} />
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
                    <Checkbox name="topping" valueName={topping} />
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
              <input id="paniniName" type="text" placeholder="eg. Club Panini" {...methods.register('paniniName')}/>
            </label>
          </Section>
          <Section name="Cutlery">
            <div className={css.addToOrderContainer}>
              <Checkbox valueName="ADD TO ORDER" name="cutlery" />
            </div>
          </Section>
          <Section name="Napkins">
            <div className={css.addToOrderContainer}>
              <Checkbox valueName="ADD TO ORDER" name="napkins" />
            </div>
          </Section>
          <div className={css.endButtonsContainer}>
            <button type="submit" className={css.placeOrderButton}>
              place order
            </button>
            <button className={css.startAgainButton}>start again</button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export { Form };
