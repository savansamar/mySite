import gsap from 'gsap/gsap-core';
import { TweenMax } from "gsap";
import React,{useRef,useEffect} from 'react'
function Effect() {
    const blue = useRef(null);
    const red = useRef(null);

    useEffect(()=>{
        TweenMax.fromTo(blue.current, 5, { x: 200 }, { x: 0 });
        TweenMax.fromTo(red.current, 5, { y: 18 }, { y: -18 });
        TweenMax.to(blue.current,5,{scale:1,opacity:3})
    },[])
    return (
        <>
       <div ref={blue}  className="pt-2 flex flex-wrap justify-center">
       <img
                   className="w-11/12 sm:w-4/12  md:h-96 px-4 md:object-contain " 
                    src="https://images.unsplash.com/photo-1611077855004-cc0614011bd8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"                    
                    alt=""/>
       </div>
            


       <div  class="flex flex-wrap bg-green-500 pt-2  justify-center">
            <div class="w-6/12 sm:w-4/12 px-4 ">
                <img
                ref={red}
                    src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-1-800x800-fa5a7ac2c81a43925586ea85f2fea332.jpg" 
                    alt="..." class="shadow rounded max-w-full h-auto align-middle border-none" />
            </div>
        </div>
    </>
    ) 
}

export default Effect
