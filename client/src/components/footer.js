import React from 'react';
import Logo from '../assets/ConcertConnectLogo.png'


function Footer() {

    return(
        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
  <div className="items-center grid-flow-col">
    <img src={Logo} width={100} height={100}/>
    <p>Copyright © 2023 - We Will Sue</p>
  </div> 
</footer>
    )
}

export default Footer 

