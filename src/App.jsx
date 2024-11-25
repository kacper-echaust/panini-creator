import { useState } from 'react'
import './App.css'
import { SplashScreen } from './Components/SplashScreen'

function App() {
	const [animate, setAnimate] = useState(false)

	return <SplashScreen animate={animate} setAnimate={setAnimate}/>
}

export default App
