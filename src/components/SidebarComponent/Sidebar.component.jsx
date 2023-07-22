import { Form, Image, Nav, Offcanvas } from "react-bootstrap"
import "./sidebar.style.css"
import {
	IoStatsChartOutline,
	IoExitOutline,
	IoAddSharp,
	IoList,
} from "react-icons/io5"
import { useState } from "react"

export default function SidebarComponent() {
	const [showSidebar, setShowSidebar] = useState(true)
	const handleClose = () => {
		setShowSidebar(false)
	}


	return (
		<Offcanvas show={showSidebar} backdrop={false} scroll={true}>
			<Offcanvas.Body>
				<div className="img-wrapper">
					<Image src="../../public/images/LABMedical_logo.png"></Image>
				</div>
				<div className="actions">
					<div className="topic-wrapper">
						<small>Geral</small>
						<button>
							<i>
								<IoStatsChartOutline />
							</i>
							INICIO
						</button>
						<button>
							<i>
								<IoExitOutline />
							</i>
							SAIR
						</button>
					</div>
					<div className="topic-wrapper">
						<small>Pacientes</small>
						<button>
							<i>
								<IoAddSharp />
							</i>
							CADASTRAR
						</button>
						<button>
							<i>
								<IoList />
							</i>
							LISTAR PRONTUARIO
						</button>
					</div>
					<div className="topic-wrapper">
						<small>Exames</small>
						<button>
							<i>
								<IoAddSharp />
							</i>
							CADASTRAR CONSULTA
						</button>
						<button>
							<i>
								<IoAddSharp />
							</i>
							CADASTRAR EXAME
						</button>
					</div>
				</div>
				<div className="hide-wrapper">
					<span>Encolher menu</span>
					<Form.Switch
						type="switch"
						id="closeMenu"
						checked={showSidebar}
						onChange={handleClose}
					/>
				</div>
			</Offcanvas.Body>
		</Offcanvas>
	)
}
