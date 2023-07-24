import { Container } from "react-bootstrap"
import CadPacienteComponent from "../../components/CadPaciente/CadPaciente.component"
import SidebarComponent from "../../components/SidebarComponent/Sidebar.component"
import HeaderComponent from "../../components/HeaderComponent/Header.component"
import SearchComponent from "../../components/SearchComponent/Search.component"
import { useContext } from "react"
import { SidebarContext } from "../../contexts/SidebarContext"
import * as Styled from './cadPaciente.style'

export default function CadPacientePage() {
  const {showSidebar, setShowSidebar} = useContext(SidebarContext)

  const handleShowSidebar = () => {
		setShowSidebar(!showSidebar)
	}

	return (
		<>
    <Styled.PacienteContainer>
			<SidebarComponent
				showSidebar={showSidebar}
				setShowSidebar={setShowSidebar}
			/>
			<Container fluid > 
				<HeaderComponent
					showSidebar={showSidebar}
					handleShowSidebar={handleShowSidebar}
				/>
				<CadPacienteComponent />
			</Container>
    </Styled.PacienteContainer>
		</>
	)
}
