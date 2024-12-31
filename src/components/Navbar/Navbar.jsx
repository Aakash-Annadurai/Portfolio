import React from 'react'
import "./navbar.css"

export default function Navbar() {
  return (
    <div className='Navbar'>
      <div className="btn aboutme">
        <button>About Me</button>
      </div>
      <div className="btn skills">
      <button>Skills</button>
      </div>
      <div className="btn portfolio">
      <button>Portfolio</button>
      </div>
      <div className="btn contactme">
      <button>CONTACT ME</button>
      </div>
    </div>
  )
}
