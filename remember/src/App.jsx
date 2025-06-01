import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import Memories from "./pages/Memories/Memories";
import Faq from "./pages/Faq/Faq";
import Example from "./pages/Example_page/Example";

const App = () => {
    return (
        <>
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/products" element={<Products />}/>
                    <Route path="/memorials" element={<Memories />}/>
                    <Route path="/faq" element={<Faq />}/>
                    <Route path="/example" element={<Example />}/>
                </Routes>
            </main>
            <Footer/>
        </>
    );
}

export default App;