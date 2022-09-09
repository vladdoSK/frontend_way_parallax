import React from "react";
import { Route, Routes } from "react-router-dom";
import "./Content.css";
import Footer from "./Footer/Footer";
import HTML_lesson from "./HTML_lesson/HTML_lesson";
import InProgress from "./InProgress/InProgress";
import Navbar from "./Navbar_content/Navbar";

const Content = () => {

    return (
        <div className="content">
            <Routes>
                <Route path='*' element={<Navbar/>}/>
                <Route path='/html_lesson' element={<HTML_lesson />}/>
                <Route path='/in_progress' element={<InProgress />}/>
            </Routes>
            <Footer />
        </div>
    );
}

export default Content;