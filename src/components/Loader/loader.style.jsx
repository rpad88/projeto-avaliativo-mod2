import styled, { keyframes } from "styled-components"


const spinner = keyframes`
    to {
        transform: rotate(1turn);
    }
`

export const Loader = styled.div`
	width: 56px;
	height: 56px;
	border-radius: 50%;
	border: 9px solid;
	border-color: #dbdcef;
	border-right-color: #474bff;
	animation: ${spinner} 1s infinite linear;
`
export const LoaderWrapper = styled.div `
	width: 100%;
	height: 100%;
	display: grid;
	place-items: center;
`