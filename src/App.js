import { Navbar } from "./components/Navbar";
import Logo from './assets/images/flowerco_logo.png';
import { ThreeJsModel } from "./threejs/three";
import './App.css';

function App () {

  return (
    <div className="wrapper">
    <Navbar/>

    <div className="experience">
      <ThreeJsModel />
    </div>


    <div className="page">
      <div className="page-wrapper">
        <section>
            <div className="wrapper justify-center items-center flex-grow w-full">

              <div className="container">
                
                <div className="div-left flex justify-center items-center">
                  <p className="text-4xl font-semibold text-center">Welcome to FlowerCo</p>
                  <div className="h-24 w-14 flex items-center mx-6">
                    <img className="object-cover " src={Logo} alt="FlowerCo logo. A flower made from a cog, with the teeth as petals."/>
                  </div>
                </div>
                <div className="div-lower flex justify-start items-center mt-6 p-8">
                  <p className="text-2xl font-semibold">I'm Sam Flower, and FlowerCo is my online programming and web design portfolio. </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="ml-24 px-12 py-8 bg-customYellow rounded-lg">
              <h1>Something else</h1>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App;
