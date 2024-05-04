import './App.css'
import Register from "./components/User/Register";
import {Route, Routes} from "react-router-dom";
import AppToolbar from "./components/appBar/AppToolbar";
import Login from "./components/User/Login"
import AddItemForm from "./components/Items/AddItemForm";
import AllItems from "./components/Items/AllItems";

function App() {
  return (
    <>
        <header>
            <AppToolbar/>
        </header>
        <main>
            <Routes>
                <Route path='/' element={<AllItems/>}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/new-item" element={<AddItemForm/>}/>
            </Routes>
        </main>
    </>
  )
}

export default App
