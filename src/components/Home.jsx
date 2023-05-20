import React from 'react'
import vg from "../assets/2.webp"

export const Home = () => {
  return (
    <>
    <div className='home'>
      <main>
        <h1>TechStar</h1>
        <p>Solution to all your problems</p>
      </main>

    </div>

    <div className="home2">
       <img src={vg} alt = "Graphics" />

       <div>
        <p> We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
        </p>
       </div>

    </div>
    
    
    
    
    
    
    
    
    
    
    </>
  )
}
