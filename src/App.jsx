import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {BrowserRouter, Link, Route, Router, Routes} from "react-router-dom";
import Login from "./pages/login/login.page.jsx";

function App() {
    return (
        <div className="App">

            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login/>
                    }/>

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App
