import React, { useContext } from 'react';
import './SplashScreen.css';
import { PaniniContext } from '../../context/PaniniContext';
import { Form } from '../Form/Form';


const SplashScreen = () => {
  const { animate, setAnimate,splashScreenValues } = useContext(PaniniContext);
  const handleStartCreate = () => {
    setAnimate(true);
  };
  return (
    <>
      <div className={`ellipseContainer ${animate ? 'fadeOut' : ''}`}>
        <div className={`ellipse-1 big ${animate ? 'animation1' : ''}`}></div>
        <div className={`ellipse-2 big ${animate ? 'animation2' : ''}`}></div>
        <div className={`ellipse-3 big ${animate ? 'animation3' : ''}`}></div>
        <div className={`ellipse-4 ${animate ? 'animation4' : ''}`}></div>
        <div className={`ellipse-5 ${animate ? 'animation5' : ''}`}></div>
        <div className={`ellipse-6 big ${animate ? 'animation6' : ''}`}></div>
        <div className={`ellipse-7 big ${animate ? 'animation7' : ''}`}></div>
      </div>
      <div className={`headerContainer ${animate ? 'animation8' : ''}`}>
        <p>{splashScreenValues.headerName}</p>
        <button onClick={handleStartCreate}>{splashScreenValues.buttonName}</button>
      </div>
      {animate && <Form />}
    </>
  );
};

export { SplashScreen };
