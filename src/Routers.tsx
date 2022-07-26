import { BrowserRouter, Route, Routes } from "react-router-dom"
import "../src/styles/app.scss"
import Home from "./pages/home"
const AppRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default AppRouters
