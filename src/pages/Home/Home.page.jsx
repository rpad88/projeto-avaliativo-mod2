import { Container } from "react-bootstrap";
import SidebarComponent from "../../components/SidebarComponent/Sidebar.component";
import './home.style.css'

export default function HomePage() {


  return (
    <>
        <div className="home">
            <SidebarComponent />
            <Container style={{border: '1px solid black'}}>teste</Container>
        </div>
    </>
  )
}
