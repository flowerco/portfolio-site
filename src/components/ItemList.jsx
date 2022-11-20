import { useEffect, useState, useRef } from "react";
import './ItemList.css';

export const ItemList = ({ itemData }) => {
  
  const appearRef = useRef(null);
  const [show, setShow] = useState(false);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
  };

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      const [ entry ] = entries;
      setShow(entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(appearRef.current);
    }, options);

    if (appearRef.current) observer.observe(appearRef.current);

    return () => {
      if (appearRef.current) observer.unobserve(appearRef.current);
    };
  }, [appearRef, options]);

  return (
    <>
      {itemData.map((item, index) => {
        return (
          <a
            ref={appearRef}
            key={index}
            href={item.url}
            style={{'--i': `${index}`}}
            className={`${show ? 'show' : ''} appear-left flex md:flex-col rounded-lg h-44 md:h-full w-full md:w-72 bg-customYellow cursor-pointer`}
          >
            <div className="h-full md:h-2/5 w-full">
              <img
                src={item.image}
                alt="App pic"
                className="h-full w-full object-cover object-top rounded-l-lg md:rounded-t-lg"
              />
            </div>
            <div className="h-3/5 px-2 py-1 md:p-4">
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
