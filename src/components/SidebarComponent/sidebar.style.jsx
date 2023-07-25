import styled from "styled-components"

export const Sidebar = styled.nav`
    display: flex;
	background-color: rgb(56, 107, 201);
	/* padding: .5rem; */
    width: ${({$isOpened}) => {return $isOpened ? '280px': '70px'}};
	color: #fefefe;
	/* position: sticky; */
	inset: 0;
    z-index: 0;
`

export const SidebarBody = styled.div`
    /* margin-top: 2rem; */
    width: 100%;
	display: flex;
	flex-direction: column;
    justify-content: space-around;
	color: #fefefe;
    padding: .5rem;
`

export const SidebarActions = styled.div`
	/* margin: auto 0; */
	width: 100%;
`

export const TopicWrapper = styled.div`
	width: 100%;
	margin-top: 1.5rem;

	& small {
		font-size: 0.75rem;
	}

	& button {
		width: 100%;
		display: flex;
		align-items: center;
        justify-content: ${({$isOpened}) => {return $isOpened ? 'center' : 'start'}};
        text-align: center;
		background-color: transparent;
		border: 1px solid #ffffff67;
		color: #fefefe;
		border-radius: 6px;
		margin-bottom: 0.6rem;
		padding: ${({$isOpened}) => {return $isOpened ? '5px' : '5px 0'}};

		&:hover {
			box-shadow: 0 0 5px #ffffff67;
		}

		& i svg {
			margin: 0 5px;
			font-size: 1.5rem;
		}
	}
`
