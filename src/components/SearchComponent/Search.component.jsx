import { IoSearchOutline } from "react-icons/io5"
import * as Styled from "./search.style"

export default function SearchComponent({title, placeholder}) {
	return (
		<Styled.SearchContainer>
			<Styled.SearchTitle>
				{title}
			</Styled.SearchTitle>
			<Styled.Search>
				<Styled.SearchWrapper>
                    <i><IoSearchOutline /></i>
					<Styled.SearchInput placeholder={placeholder} type="search"/>
				</Styled.SearchWrapper>
				<Styled.SearchBtn>Buscar</Styled.SearchBtn>
			</Styled.Search>
		</Styled.SearchContainer>
	)
}
