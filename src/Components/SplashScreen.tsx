import React from 'react'
import './SplashScreen.css'

const SplashScreen = () => {
	return (
        <>
		<div className='ellipseContainer'>
            <div className='ellipse-1 big'></div>
            <div className='ellipse-2 big'></div>
            <div className='ellipse-3 big'>
            </div>
            <div className='ellipse-4'></div>
            <div className='ellipse-5'></div>
            <div className='ellipse-6 big'></div>
            <div className='ellipse-7 big'></div>
		</div>
        <div className='headerContainer'>
            <p>Panini Creator</p>
            <button>begin</button>
        </div>
        </>
	)
}

export { SplashScreen }
