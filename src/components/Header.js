import React from 'react'
import TimeOfDay from "./Greeting";

function Home() {
    return (
        
      <div className="header">
       
        <div>
          <h1 className="name"> Patrick Quandt</h1>
        </div>
        <div>
          <p>{TimeOfDay()} Willkommen auf meiner persönlichen Homepage.</p>
        </div>
    
      </div>
     
    )
}

export default Home