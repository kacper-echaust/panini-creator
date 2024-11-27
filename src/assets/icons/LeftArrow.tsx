import React from 'react'

type Props = {
	onClick: () => void
}

const LeftArrow = ({ onClick }: Props) => {
	return (
		<svg
			onClick={onClick}
			style={{ cursor: 'pointer' }}
			width='12'
			height='22'
			viewBox='0 0 12 22'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path id='Vector 3' d='M11 1L1 11L11 21' stroke='black' strokeWidth='0.5' />
		</svg>
	)
}
export { LeftArrow }
