import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand mx-3" href="/"><img src="https://www.sciastra.com/Assets/Images/newsciastra.jpg" alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item ">
          <a className="nav-link mx-3" aria-current="page" href="/">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">COURSES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">SELCTIONS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">BLOGS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">MATERIALS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">TEAM</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">CONTACT US</a>
        </li>
        <li className="nav-item">
            <button className='btn mx-3'>LOGIN</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
