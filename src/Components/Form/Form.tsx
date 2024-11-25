import React from 'react'
import './Form.css'
type Props = {
	animate: boolean
}

const Form = ({ animate }: Props) => {
	return (
		<div className={`container ${animate ? 'fadeIn' : ''}`}>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias ullam est, nobis maiores corporis
			eligendi error veniam totam a sapiente porro, suscipit esse, perferendis laboriosam doloribus voluptatem aut
			aperiam eum!
		</div>
	)
}

export { Form }
