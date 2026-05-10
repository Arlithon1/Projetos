import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Favoritos from "./pages/Favoritos";

import Erro from "./pages/Erro";

import Header from "./components/Header";


function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Movie/:id" element={<Movie />} />
                <Route path="/Favoritos" element={<Favoritos />} />

                <Route path="*" element={<Erro />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;