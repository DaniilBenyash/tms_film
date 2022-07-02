import React from "react";
import './NavigationMenu.scss';
import { MenuLinks } from "../MenuLinks";

export const NavigationMenu = () => {
    return (
        <div className="navigation-menu">
            <div>
                <div className="navigation-menu__links">
                    <MenuLinks
                        disabled={false}
                        name='Home'
                        active={true}
                    ></MenuLinks>
                    <MenuLinks
                        disabled={false}
                        name='Trends'
                        active={false}
                    ></MenuLinks>
                    <MenuLinks
                        disabled={false}
                        name='Favorites'
                        active={false}
                    ></MenuLinks>
                    <MenuLinks
                        disabled={false}
                        name='Setting'
                        active={false}
                    ></MenuLinks>
                </div>
            </div>
            <p className="navigation-menu__сopyright">© All Rights Reserved</p>
        </div>
    )
}