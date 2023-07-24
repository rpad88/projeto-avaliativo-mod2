import "./App.css"
import { useContext } from "react"
import { AuthContext } from "./contexts/Auth.context"
import PrivateRoutes from "./routes/PrivateRoutes"
import PublicRoutes from "./routes/PublicRoutes"

function App() {
	const { auth } = useContext(AuthContext)

	return auth ? <PrivateRoutes /> : <PublicRoutes />
}

export default App
