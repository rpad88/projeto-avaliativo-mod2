import { IoArrowBack, IoMenu, IoPersonCircleOutline } from "react-icons/io5"
import * as Styled from "./header.style"

export default function HeaderComponent({ showSidebar, handleShowSidebar }) {

    
	return (
		<Styled.Nav>
			{showSidebar ? (
				<Styled.Icon onClick={handleShowSidebar}>
					<IoArrowBack style={{ fontSize: "1.5rem" }} />
				</Styled.Icon>
			) : (
				<Styled.Icon onClick={handleShowSidebar}>
					<IoMenu style={{ fontSize: "1.5rem" }} />
				</Styled.Icon>
			)}

			<Styled.Conteudo>
				<Styled.MenuName>listagem de prontuarios</Styled.MenuName>
				<Styled.UserInfo>
					<span>fulano</span>
					<Styled.Icon>
						<IoPersonCircleOutline />
					</Styled.Icon>
				</Styled.UserInfo>
			</Styled.Conteudo>
		</Styled.Nav>
	)
}
