import ReactDOM from "react-dom"
import App from "./Routers"
import { createRoot } from "react-dom/client"
import Routes from "./Routers"
const container = document.getElementById("root")
const root = createRoot(container!) // createRoot(container!) if you use TypeScript
root.render(<Routes />)
