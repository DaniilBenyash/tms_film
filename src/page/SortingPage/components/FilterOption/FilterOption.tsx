import React from "react";
import './FilterOption.scss';


type FilterOptionProps = {
    option: {} | null,
}

export const FilterOption = ({option}: FilterOptionProps ) => {

    return (
        <div className="filter-option">
            {option
            &&
            Object.values(option).map(opt => {
                if(typeof opt === 'string'){
                    return (
                        <div key={opt} className="filter-option__card">{opt}</div>
                    )
                }
                return
            })}
        </div>
    )
}
