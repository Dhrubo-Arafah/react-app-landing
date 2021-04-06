import React from 'react';
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import About from "./Components/About";
import aboutImage from './images/about.png';
import downloadImage from './images/download.png'
import Presentation from "./Components/Presentation";
import Contact from "./Components/Contact";

function App() {
    return (
        <div className="App">
            <Header/>
            <Feature/>
            <About image={aboutImage} title='Comes with All You Need For Daily Life' button='Get The App'/>
            <Presentation/>
            <About image={downloadImage} title='Download And Get The APP Now' button='Download'/>
            <Contact/>
        </div>
    );
}

export default App;
