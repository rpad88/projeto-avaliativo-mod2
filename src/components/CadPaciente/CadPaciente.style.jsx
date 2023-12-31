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
		margin-top: 1rem;
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
	
	.actions {
		display: flex;
		width: 100%;
		justify-content: flex-end;
		gap: .5rem;
	}

	.danger {
		border-color: #dc3545;
	}

	small {
		color: #dc3545;
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

	&:disabled {
		background-color: #d3d3d3;
	}
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

export const BtnSalvar = styled.button`
	padding: .5rem 1rem;
	border: 0;
	border-radius: .5rem;
	color: #efefef;
	background-color: #3C6859;

	&:hover{
		box-shadow: 3px 3px 5px #3C6859;
	}
`

export const BtnDeletar = styled.button`
	padding: .5rem 1rem;
	border: 0;
	border-radius: .5rem;
	color: #efefef;
	background-color: #48233C;

	&:hover{
		box-shadow: 3px 3px 5px #48233C;
	}

	&:disabled {
		opacity: 0.8;
		cursor: not-allowed;
	}
`

export const BtnEditar =styled.button`
	padding: .5rem 1rem;
	border: 0;
	border-radius: .5rem;
	color: #efefef;
	background-color: #36558F;

	&:hover{
		box-shadow: 3px 3px 5px #36558F;
	}

	&:disabled {
		opacity: 0.8;
		cursor: not-allowed;
	}
`