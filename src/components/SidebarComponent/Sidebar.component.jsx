import { Image, Nav } from "react-bootstrap"
import "./sidebar.style.css"
import {
	IoStatsChartOutline,
	IoExitOutline,
	IoAddSharp,
	IoList,
} from "react-icons/io5"
import { PiSquareSplitHorizontalLight } from "react-icons/pi"

export default function SidebarComponent() {
	return (
		<Nav>
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
				<button>
					<i>
						<PiSquareSplitHorizontalLight />
					</i>
				</button>
			</div>
		</Nav>
	)
}
