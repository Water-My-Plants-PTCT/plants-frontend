import React from 'react'
import {Link, useHistory} from 'react-router-dom'

function Header() {
    // const history = useHistory();

    const handleSignout = (e) => {
        localStorage.clear("token");
        // history.push('/');
        window.location.reload()
    }
    return (
        <div>
            <nav className="navbar-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </nav>

            <nav className="navbar-item">
              <Link to="/Login" className="nav-link">
                Login
              </Link>
            </nav>
            <nav className="navbar-item">
              <Link to="/" className="nav-link" onClick={handleSignout}>
                Logout
              </Link>
            </nav>
        </div>
    )
}

export default Header
