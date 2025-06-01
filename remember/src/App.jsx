import React, {useRef, useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import Memories from "./pages/Memories/Memories";
import Faq from "./pages/Faq/Faq";
import Example from "./pages/Example_page/Example";
import "./App.scss"

const App = () => {
    const headerRef = useRef(null);
    const footerRef = useRef(null);

    const [minHeight, setMinHeight] = useState("100vh");

    useEffect(() => {
        const updateMinHeight = () => {
            const headerHeight = headerRef.current?.offsetHeight || 0;
            const footerHeight = footerRef.current?.offsetHeight || 0;
            setMinHeight(`calc(100vh - ${headerHeight + footerHeight}px)`);
        }

        updateMinHeight();
        window.addEventListener("resize", updateMinHeight);

        return () => window.removeEventListener("resize", updateMinHeight);
    }, [])

    return (
        <>
            <Header ref={headerRef}/>
            <main style={{minHeight}}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/memorials" element={<Memories/>}/>
                    <Route path="/faq" element={<Faq/>}/>
                    <Route path="/example" element={<Example/>}/>
                </Routes>
            </main>
            <Footer ref={footerRef}/>
        </>
    );
}

export default App;