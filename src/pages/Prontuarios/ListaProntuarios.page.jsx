import './prontuarios.css'
import { useContext, useState } from "react"
import { SidebarContext } from "../../contexts/SidebarContext"
import SidebarComponent from "../../components/SidebarComponent/Sidebar.component"
import { Container } from "react-bootstrap"
import HeaderComponent from "../../components/HeaderComponent/Header.component"
import SearchComponent from "../../components/SearchComponent/Search.component"
import ListaProntuariosComponent from "../../components/Prontuarios/ListaProntuarios.component"
import { PatientContext } from "../../contexts/Patient.context"


export default function ListaProntuariosPage() {
	const { showSidebar, setShowSidebar } = useContext(SidebarContext)
	const { patient } = useContext(PatientContext) 


	const handleShowSidebar = () => {
		setShowSidebar(!showSidebar)
	}

	return (
		<div className="prontuarios">
			<SidebarComponent
				showSidebar={showSidebar}
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

					<ListaProntuariosComponent />
				</Container>
			</Container>
		</div>
	)
}
