import { IoSearchOutline } from "react-icons/io5"
import * as Styled from "./search.style"

export default function SearchComponent() {
	return (
		<Styled.SearchContainer>
			<Styled.SearchTitle>
				Informações rápidas de pacientes
			</Styled.SearchTitle>
			<Styled.Search>
				<Styled.SearchWrapper>
                    <i><IoSearchOutline /></i>
					<Styled.SearchInput />
				</Styled.SearchWrapper>
				<Styled.SearchBtn>Buscar</Styled.SearchBtn>
			</Styled.Search>
		</Styled.SearchContainer>
	)
}
