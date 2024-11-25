import React from 'react'
import './SplashScreen.css'

type Props = {
	animate: boolean
    setAnimate: React.Dispatch<React.SetStateAction<boolean>>
}

const SplashScreen = ({ animate,setAnimate }: Props) => {
	const handleStartCreate = () => {
		setAnimate(true)
	}
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
				<p>Panini Creator</p>
				<button onClick={handleStartCreate}>begin</button>
			</div>
		</>
	)
}

export { SplashScreen }
