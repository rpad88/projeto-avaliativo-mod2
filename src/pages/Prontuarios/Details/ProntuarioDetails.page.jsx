import { Container } from "react-bootstrap"
import SidebarComponent from "../../../components/SidebarComponent/Sidebar.component"
import { useContext, useEffect } from "react"
import { SidebarContext } from "../../../contexts/SidebarContext"
import HeaderComponent from "../../../components/HeaderComponent/Header.component"
import ProntuarioDetailsComponent from "../../../components/Prontuarios/ProntuarioDetails/ProntuarioDetails.component"

export default function ProntuarioDetailsPage() {
	const { showSidebar, setShowSidebar } = useContext(SidebarContext)

	const handleShowSidebar = () => {
		setShowSidebar(!showSidebar)
	}

	return (
		<>
			<div className="home">
				<SidebarComponent
					showSidebar={showSidebar}
					setShowSidebar={setShowSidebar}
				/>
				<Container fluid>
					<HeaderComponent
						showSidebar={showSidebar}
						handleShowSidebar={handleShowSidebar}
						title="Detalhes do paciente"
					/>
					<Container>
                        <ProntuarioDetailsComponent />
                    
                    </Container>
				</Container>
			</div>
		</>
	)
}
