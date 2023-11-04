import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Logo from '../Logo.png'
import Login from '../pages/Login';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import { useAuth0 } from "@auth0/auth0-react";

export const NavBar = () => {

	const { isAuthenticated } = useAuth0();

  return (

	<div>
		
        <header className="header">
		    <div className="container">
				<Link to="/">
			<img src={Logo} alt="logo" width="100" className="d-inline-block align-top" />
			</Link>
                <h1 className="header-titulo">
			        <Link to="/" className="header-nav-link">AgroInsumos</Link>
		        </h1>
                <nav className="header-nav">
			        
					<Link to="/" className="header-nav-link">Inicio</Link>
			        <Link to="/Conocenos" className="header-nav-link" >Conocenos</Link>
			        <Link to="/Contacto"className="header-nav-link" >Contacto</Link>
					{isAuthenticated && <LogoutButton />}
            		{isAuthenticated && <Profile />}

					
		        </nav>
				{!isAuthenticated && <Login />} 
				
            </div>
			
        </header>
		<Outlet />
	
		</div>
    
  )
}
