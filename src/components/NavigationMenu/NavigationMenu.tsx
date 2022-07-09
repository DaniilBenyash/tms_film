import React from "react";
import './NavigationMenu.scss';
import { MenuLinks } from "../MenuLinks";
import { Link, useLocation } from "react-router-dom";

export const NavigationMenu = () => {

    const location = useLocation()
    
    return (
        <div className="navigation-menu">
            <div>
                <div className="navigation-menu__links">
                    <Link to='/'>
                        <MenuLinks
                            disabled={false}
                            name='Home'
                            active={location.pathname === '/'}
                        ></MenuLinks>
                    </Link>
                    <Link to='/trends'>
                        <MenuLinks
                            disabled={false}
                            name='Trends'
                            active={location.pathname === '/trends'}
                        ></MenuLinks>
                    </Link>
                    
                    <Link to='/favorites'>
                        <MenuLinks
                            disabled={false}
                            name='Favorites'
                            active={location.pathname === '/favorites'}
                        ></MenuLinks>
                    </Link>
                    
                    <Link to='/settings'>
                        <MenuLinks
                            disabled={false}
                            name='Setting'
                            active={location.pathname === '/settings'}
                        ></MenuLinks>
                    </Link>
                    
                </div>
            </div>
            <p className="navigation-menu__сopyright">© All Rights Reserved</p>
        </div>
    )
}