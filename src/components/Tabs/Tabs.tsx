import React from "react";
import './Tabs.scss'

type TabsProps = {
    active: 'left' | 'right',
    nameLeft: string,
    nameRight: string,
    onClickLeft?: (event: any) => void,
    onClickRight?: (event: any) => void,
}

export const Tabs = ({active, nameLeft, nameRight, onClickLeft, onClickRight}: TabsProps) => {
    return (
        <div className="tabs">
            <button 
                onClick={onClickLeft} 
                className={`tabs__button tabs__button_left ${active === 'left' && 'tabs__button_active'}`}
            >
                {nameLeft}
            </button>
            <button 
                onClick={onClickRight} 
                className={`tabs__button tabs__button_right ${active === 'right' && 'tabs__button_active'}`}
            >
                {nameRight}
            </button>
        </div>
    )
}