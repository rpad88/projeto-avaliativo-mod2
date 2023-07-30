import styled from "styled-components"

export const CardContainer = styled.div`
	display: flex;
    flex-wrap: wrap;
	padding: 1rem;
    gap: 1rem;
`

export const Card = styled.div`
	flex: 0 1 32.5%;
	border-radius: 1rem;
	border: 1px solid #d3d3d3;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`

export const CardHeader = styled.div`
	width: 100%;
	height: 3rem;
	background-color: #85adff;
	border-radius: 1rem 1rem 0 0;
`
export const CardBody = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 0.5rem;
    align-items: center;

	.img-circle {
		border-radius: 50%;
        border: 0;
        position: absolute;
        top: -2.1rem;
	}
`

export const CardName = styled.span`
    font-weight: bold;
    margin-top: 1.5rem;
    text-transform: capitalize;
`

export const CardIdade = styled.small`
    font-size: .8rem;
    text-transform: lowercase;
`

export const CardTel = styled.span`
    color: #5c5c5c;
`

export const CardConvenio = styled.span`
    text-transform: capitalize;
`

export const CardBtn = styled.button`
    background: none;
    border: none;
    font-size: .8rem;
    color: #ADADAD;

    &:hover {
        color: #474747;
    }
`