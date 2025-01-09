import React, { useEffect, useRef, useState } from 'react'
import Hero from '../components/Hero'
import TheTeam from '../components/TheTeam'
import OurCrafts from "../components/OurCrafts"
import background from "../assets/backgrounddarck.jpg"
import Footer from '../components/Heafoo/Footer'
import ScrollTrigger from 'gsap/ScrollTrigger'
import _ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(_ScrollTrigger);

function Home() {
    const [VisibleDiv, setVisibleDiv] = useState("divref1")
    const divRef1 = useRef(null)
    const divRef2 = useRef(null)
    const divRef3 = useRef(null)
    const Containerref = useRef(null)
    useEffect(() => {
        if(VisibleDiv==="divref2"){
            gsap.to(".vis", {
                opacity:1,
                duration:3,
            })
        }
    }, [VisibleDiv])
    useEffect(() => {
        if(VisibleDiv==="divref3"){
            gsap.to(".vis3", {
                opacity:1,
                duration:3,
            })
        }
    }, [VisibleDiv])
    useEffect(() => {
        const triggers = [
            { ref: divRef1, name: "divref1" },
            { ref: divRef2, name: "divref2" },
            { ref: divRef3, name: "divref3" }
        ];
        triggers.forEach(({ref, name})=> {
            ScrollTrigger.create({
                trigger:ref.current,
                start: 'top center',
                end: 'top center',
                scroller: Containerref.current,
                onEnter: () => {if(VisibleDiv!=="divref3"){
                    setVisibleDiv(name)
                }},
            })
        })
        
        console.log(VisibleDiv)
    return () => { 
        // Clean up ScrollTriggers on component unmount 
        ScrollTrigger.getAll().forEach(trigger => trigger.kill()); 
    }; 
    }, [VisibleDiv]);
  return (
    <div
    ref={Containerref} 
    className='text-center max-h-screen overflow-y-scroll snap snap-y snap-mandatory '>
        <div ref={divRef1}
        className='h-screen snap-y snap-center p-10'
        style={{ backgroundImage: `url(${background})` }}
        >
            <Hero />
        </div>
        <div
        ref={divRef2} 
        className='vis opacity-0 h-screen snap-center '>
            <TheTeam state={VisibleDiv} />
        </div>
        <div 
        ref={divRef3}
        className='vis3 opacity-0 bg-black h-screen snap-center py-10'>
            <OurCrafts state={VisibleDiv}/> 
        </div>
        <div className="w-full block -mt-24">
            <Footer />
        </div>
    </div>
  )
}

export default Home