import React from 'react';
import ConcertConnectLogo from '/Users/finncastell/bootcamp/Project-3/Concert-Connect/client/src/assets/ConcertConnectLogo.png'

function Footer() {

    return(
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <div className="items-center grid-flow-col">
        <img src={ConcertConnectLogo} height={100} width={100}/>
        <p>Copyright © 2023 - We Will Sue</p>
      </div> 
    </footer>
    
    
    )
}

export default Footer 

