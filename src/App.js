import Navbar from "./components/frame/navbar";
import Footer from "./components/frame/footer";
import PageController from './components/PageController';
import './assets/scss/app.scss';
import './assets/icons/google-material/google-material.css'
import Particles from "./components/pages/common/Particles";
import BaseConnection from "./app/services/providers/BaseConnection";

function App() {
    const connection = new BaseConnection('', '', '/api/')

    return (
        <>
          <Particles/>
          <Navbar/>
          <div className='page'>
              <PageController connection={connection}/>
          </div>
          <Footer/>
        </>
    );
}

export default App;
