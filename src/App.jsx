import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./pages/Header/Header"
import LogIn from "./pages/Auth/LogIn"
import SignUp from "./pages/Auth/SignUp"
import Home from "./pages/Home/Home"
import Form from "./pages/Form/Form"



function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/logIn" element={<LogIn />} />
          {/* <Route path="/form/:id" element={<Form />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
