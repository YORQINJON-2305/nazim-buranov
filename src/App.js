import { useContext } from "react";
import "./assets/styles/main.css";
import { AuthContext } from "./context/AuthContext";
import { PrivateApp } from "./app/PrivateApp";
import { PublicApp } from "./app/PublicApp/PublicApp";

function App() {
	const { token } = useContext(AuthContext);

	if (token) {
		return <PrivateApp />;
	}
	return <PublicApp />;
}

export default App;
