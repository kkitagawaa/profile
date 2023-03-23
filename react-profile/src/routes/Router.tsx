import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { DiaryPage } from "../pages/DiaryPage";
import { HomePage } from "../pages/HomePage";


export const Router: React.FC = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/diary" element={<DiaryPage />} />
            </Routes>
        </BrowserRouter>
    )
}