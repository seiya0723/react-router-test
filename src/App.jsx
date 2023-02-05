import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { Home } from "./components/Home";
import { Portfolio } from "./components/Portfolio";
import { Profile } from "./components/Profile";

import "./App.css"


export const App = () => {
    return (
        <>
        <a href="/">
            <h1>Myportfolio</h1>
        </a>

        <BrowserRouter>
            <Routes>
                <Route path={`/`}           element={<Home />} />
                <Route path={`/portfolio/`} element={<Portfolio />} /> 
                <Route path={`/profile/`}   element={<Profile />} /> 
            </Routes>
        </BrowserRouter>
            
        <div className="link_area">
            <a className="link" href="/portfolio">ポートフォリオ</a>
            <a className="link" href="/profile">プロフィール</a>
        </div>


        </>

    );
}
