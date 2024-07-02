import { BrowserRouter, Route, Routes } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import Header from './Componentes/Layout/Header';
import Nav from './Componentes/Layout/Nav';
import Footer from './Componentes/Layout/Footer';

import HomePage from "./Pages/HomePage";
import ContactoPage from "./Pages/ContactoPage";
import NosotrosPage from "./Pages/NosotrosPage";
import NovedadesPage from "./Pages/Novedades";


function App() {
    return ( 
        <div className = "App" >
            <Header></Header>

            <BrowserRouter>
                <Nav></Nav>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="nosotros" element={<NosotrosPage />}></Route>
                    <Route path="novedades" element={<NovedadesPage />}></Route>
                    <Route path="contacto" element={<ContactoPage />}></Route>
                </Routes>
            </BrowserRouter>

            <Footer></Footer>
        </div>

    );
}

export default App;