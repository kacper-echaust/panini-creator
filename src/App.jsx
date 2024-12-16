import { useState } from 'react';
import './App.css';
import { SplashScreen } from './Components/SplashScreen/SplashScreen';
import { Form } from './Components/Form/Form';

function App() {
  const [animate, setAnimate] = useState(false);

  return (
    <>
      <SplashScreen animate={animate} setAnimate={setAnimate} />
      {animate && <Form animate={animate} />}
    </>
  );
}

export default App;
