import React from "react";
import './Tabs.scss'

type TabsProps = {
    active: string,
    nameLeft: string,
    nameRight: string,
    onClick?: (event: any) => void,

}

export const Tabs = ({active, nameLeft, nameRight, onClick}: TabsProps) => {
    return (
        <div className="tabs">
            <button 
                onClick={onClick} 
                className={`tabs__button tabs__button_left ${active === nameLeft && 'tabs__button_active'}`}
                value={nameLeft}
            >
                {nameLeft}
            </button>
            <button 
                onClick={onClick} 
                className={`tabs__button tabs__button_right ${active === nameRight && 'tabs__button_active'}`}
                value={nameRight}
            >
                {nameRight}
            </button>
        </div>
    )
}