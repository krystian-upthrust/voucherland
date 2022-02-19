import React from "react";
import { useNavigate  } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();

  return (
    <nav className="nav">

      {/* h1 for desktop only ? */}

      {/* is content needed... ? */}

      <div className="nav_content">
        <ul className="nav_content_menu">
          <li className="active" onClick={()=>{navigate('/')}} >home</li>
          <li onClick={()=>{navigate('/vouchers')}} >vouchers</li>
          <li onClick={()=>{navigate('/articles')}} >articles</li>
          <li onClick={()=>{navigate('/contact')}} >contact</li>
        </ul>

        <div className="login_content">
          <button className="register" onClick={()=>{navigate('/register')}} >register</button>
          <button className="login" onClick={()=>{navigate('/login')}} >login</button>
        </div>
      </div>

    </nav>
  );
}

export default Nav;
