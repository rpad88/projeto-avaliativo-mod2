import styled from 'styled-components'

export const Container = styled.div`
	background-color: white;
	height: 440px;
	width: 275px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0 2px 10px 10px rgba(#000, 0.05);
`
export const CircleBorder = styled.div`
	$colorGreen: #8f6;
	$circleSize: 60px;

	width: $circleSize;
	height: $circleSize;
	border-radius: 50%;

	z-index: 0;
	position: absolute;
	background: $colorGreen;
	transform: scale(1.1);
	animation: circle-anim 600ms ease;

	@keyframes circle-anim {
		from {
			transform: scale(0);
		}
		to {
			transform: scale(1.1);
		}
	}
`

export const Circle = styled.div`
	$colorGreen: #8f6;
	$circleSize: 60px;

	width: $circleSize;
	height: $circleSize;
	border-radius: 50%;

	z-index: 1;
	position: relative;
	background: white;
	transform: scale(1);
	animation: success-anim 900ms ease;

	@keyframes success-anim {
		0% {
			transform: scale(0);
		}
		30% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}
`

export const Success = styled.div`
	$colorGreen: #8f6;

	&::before,
	&::after {
		content: '';
		display: block;
		height: 4px;
		background: $colorGreen;
		position: absolute;
	}

	&::before {
		width: 17px;
		top: 58%;
		left: 23%;
		transform: rotateZ(50deg);
	}

	&::after {
		width: 30px;
		top: 50%;
		left: 35%;
		transform: rotateZ(-50deg);
	}
`
