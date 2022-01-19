import React from 'react'
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers
