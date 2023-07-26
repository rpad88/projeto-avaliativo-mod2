import { useContext } from "react"
import CadExameComponent from "../../components/CadExame/CadExame.component"
import { SidebarContext } from "../../contexts/SidebarContext"
import SidebarComponent from "../../components/SidebarComponent/Sidebar.component"
import { Container } from "react-bootstrap"
import HeaderComponent from "../../components/HeaderComponent/Header.component"
import SearchComponent from "../../components/SearchComponent/Search.component"
import { PacienteContainer } from "../CadPaciente/cadPaciente.style"

export default function CadExamePage() {
	const { showSidebar, setShowSidebar } = useContext(SidebarContext)

	const handleShowSidebar = () => {
		setShowSidebar(!showSidebar)
	}

	return (
		<PacienteContainer>
			<SidebarComponent
				showSidebar={showSidebar}
				setShowSidebar={setShowSidebar}
			/>

			<Container fluid>
				<HeaderComponent
					showSidebar={showSidebar}
					handleShowSidebar={handleShowSidebar}
					title="cadastro de exame"
				/>

				<Container>
					<SearchComponent
						title="encontre o paciente"
						placeholder="Digite o nome do paciente"
					/>

					<CadExameComponent />
				</Container>
			</Container>
		</PacienteContainer>
	)
}
