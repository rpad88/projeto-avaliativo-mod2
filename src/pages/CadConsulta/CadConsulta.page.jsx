import { Container } from "react-bootstrap"
import CadConsultaComponent from "../../components/CadConsulta/CadConsulta.component"
import SidebarComponent from "../../components/SidebarComponent/Sidebar.component"
import { PacienteContainer } from "../CadPaciente/cadPaciente.style"
import HeaderComponent from "../../components/HeaderComponent/Header.component"
import { useContext } from "react"
import { SidebarContext } from "../../contexts/SidebarContext"

export default function CadConsultaPage() {
  const {showSidebar, setShowSidebar} = useContext(SidebarContext)

  const handleShowSidebar = () => {
		setShowSidebar(!showSidebar)
	}

	return (
		<>
			<PacienteContainer>
				<SidebarComponent
					showSidebar={showSidebar}
					setShowSidebar={setShowSidebar}
				/>
				<Container fluid>
					<HeaderComponent
						showSidebar={showSidebar}
						handleShowSidebar={handleShowSidebar}
					/>
					<CadConsultaComponent />
				</Container>
			</PacienteContainer>
		</>
	)
}
