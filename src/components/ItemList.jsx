import { useEffect, useState, useRef } from "react";
import './ItemList.css';

export const ItemList = ({ itemData }) => {
  
  const appearRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {

    const currentAppearRef = appearRef.current;
    
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
    };

    const observer = new IntersectionObserver((entries) => {
      const [ entry ] = entries;
      setShow(entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(currentAppearRef);
    }, options);

    if (currentAppearRef) observer.observe(currentAppearRef);

    return () => {
      if (currentAppearRef) observer.unobserve(currentAppearRef);
    };
  }, [appearRef]);

  return (
    <>
      {itemData.map((item, index) => {
        return (
          <a
            ref={appearRef}
            key={index}
            href={item.url}
            style={{'--i': `${index}`}}
            className={`${show ? 'show' : ''} bg-customYellow bg-opacity-100 appear-left flex md:flex-col rounded-lg h-44 md:h-full w-full md:w-72  cursor-pointer`}
          >
              <img
                  src={item.image}
                  alt="App pic as box background"
                  className="image-bg z-0 absolute opacity-20 h-full w-full object-cover object-top rounded-l-lg md:rounded-t-lg"
                />
              <div className="image-box">
                <img
                  src={item.image}
                  alt="App pic"
                  className="h-full w-full object-cover object-top rounded-t-lg"
                />
              </div>
              <div className="z-10 h-3/5 p-4">
                <p className="text-lg md:text-2xl font-bold">{item.title}</p>
                <p
                  className="text-sm md:text-base"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></p>
              </div>
          </a>
        );
      })}
    </>
  );
};
