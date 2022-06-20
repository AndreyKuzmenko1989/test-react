import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import {ROUTES} from "./routes/constants";
import { Index } from "./pages/Index";
import {Layout} from "./common/Layout";



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Index></Index>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
