import { Container, Navbar } from "react-bootstrap"
import SidebarComponent from "../../components/SidebarComponent/Sidebar.component"
import "./home.style.css"
import { useContext } from "react"
import { SidebarContext } from "../../contexts/SidebarContext"
import { IoArrowBack, IoMenu } from "react-icons/io5"

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
					<Navbar>
						<div
							className="conteudo"
							style={{
								width: "100%",
								border: "1px solid black",
							}}
						>
							{showSidebar ? (
								<i onClick={handleShowSidebar}>
									<IoArrowBack style={{ fontSize: "1.5rem" }} />
								</i>
							) : (
								<i onClick={handleShowSidebar}>
									<IoMenu style={{ fontSize: "1.5rem" }} />
								</i>
							)}

							<span>LISTAGEM DE PRONTUARIOS</span>
						</div>
					</Navbar>
					<main>Container</main>
				</Container>
			</div>
		</>
	)
}
