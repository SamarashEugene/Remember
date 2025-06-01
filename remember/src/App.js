import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';

const App = () => {
    return (
        <>
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </main>
            <Footer/>
        </>
    );
}

export default App;