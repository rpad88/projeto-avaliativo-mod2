import styled from "styled-components"

export const SearchContainer = styled.div`
	padding: 1rem;
	position: relative;
`

export const SearchTitle = styled.h5`
	text-transform: uppercase;
`
export const Search = styled.div`
	display: flex;
	gap: 1rem;
`

export const SearchWrapper = styled.div`
	width: 100%;
	position: relative;

	i {
		position: absolute;
		left: 5px;
		top: 5px;
	}
`

export const SearchInput = styled.input`
	padding: 5px 10px 5px 2rem;
	width: 100%;
	outline: none;
	border: 1px solid #d3d3d3;
	border-radius: 5px;

	&:active, &:focus {
		box-shadow: 0 0 5px #256EFF;
	}
`

export const SearchBtn = styled.button`
	padding: 5px 10px;
	border: 1px solid #d3d3d3;
	border-radius: 5px;

	&:hover {
		box-shadow: 0 0 5px #256EFF
	}
`

export const Ul = styled.ul`
	width: 90%;
	padding: 1rem;
	background-color: #fefefe;
	border-radius: .5rem;
	position: absolute;
	list-style-type: none;
	box-shadow: 0 0 5px rgba(0, 0, 0, .5);
	border: 1px solid #d3d3d3;
	z-index: 1;
	
	li {
		color: #000;
		border-radius: 5px;
		padding: 5px;

		&:hover {
			background-color: #d3d3d3;
			cursor: pointer;
		}
	}
`