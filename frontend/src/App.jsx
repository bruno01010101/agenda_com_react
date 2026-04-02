import { BrowserRouter, Route, Routes } from "react-router"
import AppLayout from "./components/AppLayout"
import Home from "./components/Home"
import CreateContact from "./components/CreateContact"
import EditContact from "./components/EditContact"
import Login from "./components/Login"
import Cadastro from "./components/Cadastro"
import AuthLayout from "./components/AuthLayout"

function App() {
  // route que engloba outros tem fechamento
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}> 
          <Route path="" element={<Home />}/>
          <Route path="create" element={<CreateContact />}/>
          <Route path="edit" element={<EditContact />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="cadastro" element={<Cadastro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
