import { Container, Navbar } from "react-bootstrap"
import SidebarComponent from "../../components/SidebarComponent/Sidebar.component"
import "./home.style.css"
import { useContext } from "react"
import { SidebarContext } from "../../contexts/SidebarContext"
import HeaderComponent from "../../components/HeaderComponent/Header.component"

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
					<HeaderComponent showSidebar={showSidebar} handleShowSidebar={handleShowSidebar} />
					<main>Container</main>
				</Container>
			</div>
		</>
	)
}
