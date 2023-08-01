import { Container } from "react-bootstrap"
import SidebarComponent from "../../../components/SidebarComponent/Sidebar.component"
import { useContext } from "react"
import { SidebarContext } from "../../../contexts/SidebarContext"
import HeaderComponent from "../../../components/HeaderComponent/Header.component"
import StatusComponent from "../../../components/StatusComponent/Status.component"
import SearchComponent from "../../../components/SearchComponent/Search.component"
import CardsContainer from "../../../components/CardPaciente/Cards.container"



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
						title="estatísticas e informações"
					/>
					Conteudo aqui
				</Container>
			</div>
		</>
	)
}
