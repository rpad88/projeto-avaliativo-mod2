import styled from 'styled-components'

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	padding: 1rem;

    @media (min-width: 580px) {
        flex-direction: row;
        flex-wrap: wrap;
    }

	.flex {
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.dois-itens > * {
		flex-grow: 1;
		flex-basis: 40%;
	}

	.tres-itens > * {
		flex: 1 1 30%;
	}

	.quatro-itens > * {
		flex: 1 1 20%;
	}
	
` 

export const InputGroup = styled.div`
	display: flex;
	/* width: 100%; */
	flex-direction: column;
	align-items: flex-start;

	@media (min-width: 580px) {
        flex-wrap: wrap;
		flex: 1 1 50%;
	}
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
	border: 1px solid gray;
`

export const Select = styled.select`
    display: flex;
	padding: 8px;
	align-items: flex-start;
	align-self: stretch;
	border-radius: 0.5rem;
	border: 1px solid gray;
`
export const Fieldset =  styled.fieldset`
	width: 100%;
	padding: 5px;
	border: 1px dashed gray;
	border-radius: 6px;
	margin-top: 2rem;
	position: relative;
	
	legend {
    position: static;
	margin-left: 1rem;
    float: none;
	width: auto;
    font-size: 14px;
    line-height: 18px;
}
`