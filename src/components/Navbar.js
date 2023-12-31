import React, { useEffect } from 'react'
import { Link,useLocation } from 'react-router-dom';



const Navbar = () => {
  const handleLogout =()=>{
    localStorage.removeItem('token')
  }
  let location = useLocation();
  useEffect(()=>{
    console.log(location.pathname)
  },[location])
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-black navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === "/"?"active":""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === "/GlobalChat"?"active":""}`} aria-current="page" to="/GlobalChat">Global Chats</Link>
        </li>
        <li className="nav-item ">
          <Link className={`nav-link ${location.pathname === "/about"?"active":""}`} to="/about">About</Link>
        </li>
        {!localStorage.getItem('token')?
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account Info
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/login">Login</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/singup">Singup</Link></li>
          </ul>
        </li>:<li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account Info
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">My Account</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/login" onClick={handleLogout}>Log out</Link></li>
          </ul>
        </li>}
        <li className="nav-item">
          <Link className="nav-link disabled">Disabled</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
