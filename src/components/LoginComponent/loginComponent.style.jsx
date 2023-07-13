import styled from 'styled-components'

export const Form = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
    padding: 1rem;
`
export const FormHeader = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
`

export const Legend = styled.legend`
	text-align: center;
`

export const InputGroup = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: flex-start;
`

export const Label = styled.label`
	display: flex;
	align-items: flex-start;
	gap: 10px;
	align-self: stretch;
`

export const Input = styled.input`
	display: flex;
	padding: 8px;
	align-items: flex-start;
	align-self: stretch;
	border-radius: 0.5rem;
	border: 1px solid #36558f;
`

export const Button = styled.button`
	padding: 0.5rem 1rem;
	align-self: stretch;
	border-radius: 0.5rem;
    border: 1px solid;
	background: ${({ $outlined }) => {
		return $outlined ? 'transparent' : '#528e7ac7'
	}};
	color: ${({ $outlined }) => {
		return $outlined ? '#000' : '#fefefe'
	}};

	border-color: ${({ $outlined }) => {
		return $outlined ? '#528E7A' : 'transparent'
	}};

	&:hover {
		background-color: #528e7a;
	}
`
