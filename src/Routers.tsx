import React from 'react'
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Category from "./pages/category/index";

function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/category" element={<Category />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers
