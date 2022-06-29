import React from "react";
import './NamePlate.scss';


type NamePlateProps = { 
    name: string,
    onClick?: (ev: any) => void
}

export const NamePlate = ({name, onClick}: NamePlateProps) => {
    return (
        <div className="name-plate">
            {name}
            <button value={name} className="name-plate__cross" onClick={onClick}></button>
        </div>
    )
}