import styled from "styled-components"

export const ProntuariosWrapper = styled.div`
	padding: 1rem;
`

export const Table = styled.table`
	width: 100%;
	padding: 0;
	/* margin: 1em; */
	display: table;
	border-spacing: 0 10px;
	padding: 0;
	position: relative;
    border-collapse: separate;
`

export const Th = styled.th`
	color: #525252;
	text-align: center;
`

export const Tr = styled.tr`
	display: table-row;
    text-align: center;

    &:hover {
        background-color: #D6E4FF;
        cursor: pointer;
    }
`

export const Td = styled.td`
	display: table-cell;

	&:first-child::before {
		box-sizing: border-box;
		content: "";
		position: absolute;
		/* do not use top and bottom */
		left: 0;
		right: 0;

		display: block;
		height: 50px;
		box-shadow: 0 1px 9px 1px rgba(0, 0, 0, 0.28);
		-webkit-box-shadow: 0 1px 9px 1px rgba(0, 0, 0, 0.28);
	}

	span {
		display: block;
		padding: 15px;
		height: 50px;
		line-height: 20px;
	}
`

export const SpanIcon = styled.span` 
    font-size: 2.5rem;
    color: #525252;
`
