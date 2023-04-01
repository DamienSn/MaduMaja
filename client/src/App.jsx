import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import Lessons from "./pages/Lessons"
import Login from "./pages/Login"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>

          <Route path="/login" element={<Login/>}/>

          <Route path="/lessons" element={<Lessons/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
