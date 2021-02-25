import React from "react";
import Navbar from "./components/frame/navbar";
import Footer from "./components/frame/footer";
import './assets/scss/app.scss';
import './assets/icons/google-material/google-material.css';
import Particles from "./components/pages/common/Particles";
import ParentState from "./context/ParentState";
import TreeState from "./context/TreeState";
import PersonState from "./context/PersonState";
import TreeSelection from "./components/pages/TreeSelection";
import PersonViewSwitcher from "./components/PersonViewSwitcher";

function App() {
    return (
        <>
            <Particles/>
            <Navbar/>
            <div className='page'>
                <TreeState>
                    <TreeSelection>
                        <ParentState>
                            <PersonState>
                                <PersonViewSwitcher/>
                            </PersonState>
                        </ParentState>
                    </TreeSelection>
                </TreeState>
            </div>
            <Footer/>
        </>
    );
}

export default App;

