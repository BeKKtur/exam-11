import './App.css'
import Register from "./components/User/Register";
import {Route, Routes} from "react-router-dom";
import AppToolbar from "./components/appBar/AppToolbar";

function App() {
  return (
    <>
        <header>
            <AppToolbar/>
        </header>
        <main>
            <Routes>
                <Route path="/register" element={<Register />} />
            </Routes>
        </main>
    </>
  )
}

export default App
