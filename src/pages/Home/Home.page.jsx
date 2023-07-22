import { Container, Navbar } from "react-bootstrap"
import SidebarComponent from "../../components/SidebarComponent/Sidebar.component"
import "./home.style.css"
import { useContext } from "react"
import { SidebarContext } from "../../contexts/SidebarContext"

export default function HomePage() {
	const { showSidebar, setShowSidebar } = useContext(SidebarContext)

	return (
		<>
			<div className="home">
				<SidebarComponent
					showSidebar={showSidebar}
					setShowSidebar={setShowSidebar}
          style={{position: 'relative !important'}}
				/>

				<Navbar
					style={{
						backgroundColor: "blue",
						display: "flex",
						justifyContent: "center",
						width: "100vw",
					}}
				>
					<div
						className="conteudo"
						style={{
							width: "100%",
							border: "1px solid black",
							marginLeft: "300px",
						}}
					>
						<span>LISTAGEM DE PRONTUARIOS</span>
					</div>
				</Navbar>
				<Container
					fluid={true}
					style={{
						border: "1px solid black",
						marginLeft: "300px", //mesma margem do SideBar
					}}
				>
					<main style={{ position: "relative" }}>main</main>
				</Container>
			</div>
		</>
	)
}
