import logo from './logo.svg';
import './App.css';

import { Blog, Features, Footer, Header, Possibility, WhatGPT } from './Containers/export'
import { Article, Brand, CallToAction, Feature, Navbar } from './Components/export'

function App() {
  return (
    <div className='font main-div min-h-screen box-border scroll-smooth'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>

        <Brand />
        <WhatGPT />
        <Features />
        <Possibility />
        <CallToAction />
        <Blog />
        <Footer />
    </div>
  );
}

export default App;
