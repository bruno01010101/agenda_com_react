import {BrowserRouter, Route, Routes} from "react-router"
import HomeLayout from "./components/HomeLayout"
import AuthLayout from "./components/AuthLayout"
import Home from "./components/Home"
import CreateContact from "./components/Create"
import EditContact from "./components/EditContact"
import Form from "./components/Form"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="" element={<Home />} />
          <Route path="create" element={<CreateContact />} />
          <Route path="edit/:id" element={< EditContact/>} />
        </Route>
        <Route path="/auth/" element={<AuthLayout/>}>
          <Route path="login" element={<Form title="Login" btnText="Logar" isLogin={true} />}/>
          <Route path="register" element={<Form title="Cadastro" btnText="Cadastrar" isLogin={false} />} />
        </Route>
      </Routes>
    </BrowserRouter>
)}

export default App