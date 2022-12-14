import Logo from "../assets/images/flowerco_logo.png";
import { ItemList } from "./ItemList";
import { appData, projectData, algoData } from "../data/PageData";
import { AboutMe } from "./AboutMe";

export const MainPage = ({ sidebarOpen, sectionRefs }) => {

  // TODO: This can be set up with a single Ref which contains an array
  const [ homeRef, appRef, projRef, algoRef, aboutRef ] = sectionRefs;

  return (
    <div className="page-wrapper">
      {sidebarOpen && (
        <div className="fixed top-0 left-0 h-full w-full z-30 backdrop-blur-2xl"></div>
      )}
      <section ref={homeRef} id="home">
        <div className="wrapper justify-center items-center flex-grow w-full">
          <div className="title-container">
            <div className="div-left flex justify-center items-center">
              <p className="text-3xl md:text-4xl font-semibold text-center">
                Welcome to FlowerCo
              </p>
              <div className="h-24 w-14 flex items-center mx-6">
                <img
                  className="object-cover "
                  src={Logo}
                  alt="FlowerCo logo. A flower made from a cog, with the teeth as petals."
                />
              </div>
            </div>
            <div className="div-lower flex justify-start items-center mt-6 p-8">
              <p className="text-2xl font-semibold">
                I'm Sam Flower, and FlowerCo is my online programming and web
                design portfolio.{" "}
              </p>
            </div>
            {/* <div className="div-extra mt-6 p-8">
                    <p className="text-xl font-semibold">All of the code used in this website can be found on my GitHub, here: </p>
                    <a className="text-xl font-semibold pt-3" href="https://github.com/flowerco">https://github.com/flowerco</a>
                  </div> */}
          </div>
        </div>
      </section>

      <section ref={appRef} id="apps">
        <div className="wrapper justify-center items-center flex-grow w-full">
          <div className="container">
            <div className="section-title flex flex-col justify-center items-center md:items-start pl-8">
              <p className="text-2xl md:text-4xl font-semibold text-center">
                Group Projects 
              </p>
              <p className="text-lg md:text-xl mt-2">Applications developed in 3 to 5 person teams</p>
            </div>
            <div className="project-box flex flex-col md:flex-row justify-start items-center px-4 md:px-0 gap-6 mt-6">
              <ItemList itemData={appData} />
            </div>
          </div>
        </div>
      </section>

      <section ref={projRef} id="projects">
        <div className="wrapper justify-center items-center flex-grow w-full">
          <div className="container">
            <div className="section-title flex flex-col justify-center items-center md:items-start pl-8">
              <p className="text-2xl md:text-4xl font-semibold text-center">
                Solo Projects
              </p>
              <p className="text-lg md:text-xl mt-2">
                Projects I built previously
              </p>
            </div>
            <div className="project-box overflow-y-auto flex flex-col md:flex-row justify-start items-center px-4 md:px-0 gap-6 mt-6">
              <ItemList itemData={projectData} />
            </div>
          </div>
        </div>
      </section>

      <section ref={algoRef} id="algos">
        <div className="wrapper justify-center items-center flex-grow w-full">
          <div className="container">
            <div className="section-title flex flex-col justify-center items-start pl-8">
              <p className="text-2xl md:text-4xl font-semibold text-center">
                Algorithms
              </p>
              <p className="text-lg md:text-xl mt-2">
                Because everyone has their favourite algorithms to practice with... right?
              </p>
            </div>
            <div className="project-box flex flex-col md:flex-row justify-start items-center px-4 md:px-0 gap-6 mt-6">
              <ItemList itemData={algoData} />
            </div>
          </div>
        </div>
      </section>

      <section ref={aboutRef} id="about">
      <div className="wrapper justify-center items-center flex-grow px-2 md:px-0 w-full">
          <div className="container">
            <AboutMe />
          </div>
        </div>
      </section>
    </div>
  );
};
