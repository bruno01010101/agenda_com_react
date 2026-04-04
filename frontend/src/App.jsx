import { BrowserRouter, Route, Routes } from "react-router"
import AppLayout from "./components/AppLayout"
import Home from "./components/Home"
import CreateContact from "./components/CreateContact"
import EditContact from "./components/EditContact"
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
        <Route path="/auth/">
          <Route path="login" element={<AuthLayout titulo="Login" txtBtn="Logar" flag={true} />}  />
          <Route path="cadastro" element={<AuthLayout titulo="Cadastro" txtBtn="Cadastrar" flag={false} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
