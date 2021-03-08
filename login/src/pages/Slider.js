import React from "react"
import "./slider.css"
import "./image.css"
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
const colors = ["https://images.unsplash.com/photo-1550344071-13ecada2a91d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", 
"https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", 
"https://images.unsplash.com/photo-1524282745852-a463fa495a7f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
"https://images.unsplash.com/photo-1521335629791-ce4aec67dd15?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
];
const delay = 2500;

function Slider() {
  /*const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="mx-4 rounded-lg my-auto  overflow-hidden w-auto">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((imageurl, index) => (
          <div
            className="slide"
            key={index}
            
          >
           <article class="bg-white h-80 mt-4 px-4 overflow-hidden rounded-lg  ">
     <img alt="Placeholder" class="mx-auto mt-4 w-11/12 object-cover h-64 "


    src={imageurl} />
    </article>   
          </div>
        ))}
      </div>

      
    </div>
  );*/
  return <ImageSlider slides={SliderData} />
}
export default Slider