import Logo from "../assets/images/flowerco_logo.png";
import { ItemList } from "./ItemList";
import { appData, projectData, algoData } from "../data/PageData";
import { AboutMe } from "./AboutMe";

export const MainPage = ({ sidebarOpen }) => {
  return (
    <div className="page-wrapper">
      {sidebarOpen && (
        <div className="fixed top-0 left-0 h-full w-full z-20 backdrop-blur-2xl"></div>
      )}
      <section id="home">
        <div className="wrapper justify-center items-center flex-grow w-full">
          <div className="container">
            <div className="div-left flex justify-center items-center">
              <p className="text-4xl font-semibold text-center">
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

      <section id="apps">
        <div className="wrapper justify-center items-center flex-grow w-full">
          <div className="container">
            <div className="section-title flex flex-col justify-center items-start pl-8">
              <p className="text-4xl font-semibold text-center">
                Latest Applications
              </p>
              <p className="text-xl mt-2">Projects I'm working on currently</p>
            </div>
            <div className="project-box flex justify-start items-center gap-6 mt-6">
              <ItemList itemData={appData} />
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="wrapper justify-center items-center flex-grow w-full">
          <div className="container">
            <div className="section-title flex flex-col justify-center items-start pl-8">
              <p className="text-4xl font-semibold text-center">
                Bootcamp Projects
              </p>
              <p className="text-xl mt-2">
                I recently finished a Javascript bootcamp, creating the
                following projects
              </p>
            </div>
            <div className="project-box flex justify-start items-center gap-6 mt-6">
              <ItemList itemData={projectData} />
            </div>
          </div>
        </div>
      </section>

      <section id="algos">
        <div className="wrapper justify-center items-center flex-grow w-full">
          <div className="container">
            <div className="section-title flex flex-col justify-center items-start pl-8">
              <p className="text-4xl font-semibold text-center">Algorithms</p>
              <p className="text-xl mt-2">
                Because everyone has their favourite algorithms they like to practice with... right?
              </p>
            </div>
            <div className="project-box flex justify-start items-center gap-6 mt-6">
              <ItemList itemData={algoData} />
            </div>
          </div>
        </div>
      </section>

      <section id="about">
      <div className="wrapper justify-center items-center flex-grow w-full">
          <div className="container">
            <AboutMe />
          </div>
        </div>
      </section>
    </div>
  );
};
