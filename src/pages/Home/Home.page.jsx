import { Container, Navbar } from "react-bootstrap"
import SidebarComponent from "../../components/SidebarComponent/Sidebar.component"
import "./home.style.css"
import { useContext } from "react"
import { SidebarContext } from "../../contexts/SidebarContext"
import HeaderComponent from "../../components/HeaderComponent/Header.component"
import StatusComponent from "../../components/StatusComponent/Status.component"
import SearchComponent from "../../components/SearchComponent/Search.component"
import CardsContainer from "../../components/CardPaciente/Cards.container"

export default function HomePage() {
	const { showSidebar, setShowSidebar} =
		useContext(SidebarContext)

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
					<HeaderComponent showSidebar={showSidebar} handleShowSidebar={handleShowSidebar} title='estatísticas e informações'/>
					<StatusComponent />
					<SearchComponent title='Informações rápidas de pacientes' placeholder='Digite o nome do paciente' />
					<CardsContainer>

					</CardsContainer>
				</Container>
			</div>
		</>
	)
}
