import {BrowserRouter, Route, Routes} from "react-router"
import HomeLayout from "./components/HomeLayout"
import AuthLayout from "./components/AuthLayout"
import Home from "./components/Home"
import CreateContact from "./components/Create"
import EditContact from "./components/EditContact"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="" element={<Home />} />
          <Route path="create" element={<CreateContact />} />
          <Route path="edit" element={< EditContact/>} />
        </Route>
        <Route path="/auth/" element={<AuthLayout/>}>
          <Route path="login" element={<AuthLayout />} />
          <Route path="register" element={<AuthLayout />} />
        </Route>
      </Routes>
    </BrowserRouter>
)}

export default App