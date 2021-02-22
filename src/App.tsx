import Navbar from "./components/frame/navbar";
import Footer from "./components/frame/footer";
import PageController from './components/PageController';
import './assets/scss/app.scss';
import './assets/icons/google-material/google-material.css'
import Particles from "./components/pages/common/Particles";

function App() {

    return (
        <>
          <Particles/>
          <Navbar/>
          <div className='page'>
              <PageController />
          </div>
          <Footer/>
        </>
    );
}

export default App;
