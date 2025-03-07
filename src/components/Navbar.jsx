import React from 'react'
import './navbar.css'
function Navbar() {
  return (
    <div>
        <nav>
            <ul style={{display: 'flex', justifyContent: 'space-between', listStyleType: 'none'}}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                
            </ul>
        </nav>
    </div>
  )
}

export default Navbar