import './App.css';
import { SplashScreen } from './Components/SplashScreen/SplashScreen';
import {  PaniniProvider } from './context/PaniniContext';

function App() {
  return (
    <PaniniProvider>
      <SplashScreen />
    </PaniniProvider>
  );
}

export default App;
