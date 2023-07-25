import { Container } from "react-bootstrap"
import CadConsultaComponent from "../../components/CadConsulta/CadConsulta.component"
import SidebarComponent from "../../components/SidebarComponent/Sidebar.component"
import { PacienteContainer } from "../CadPaciente/cadPaciente.style"
import HeaderComponent from "../../components/HeaderComponent/Header.component"
import { useContext } from "react"
import { SidebarContext } from "../../contexts/SidebarContext"
import SearchComponent from "../../components/SearchComponent/Search.component"

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
						title='cadastro de consulta'
					/>
					<SearchComponent title="encontre o paciente" placeholder='Digite o nome do paciente' />
					<CadConsultaComponent />
				</Container>
			</PacienteContainer>
		</>
	)
}
