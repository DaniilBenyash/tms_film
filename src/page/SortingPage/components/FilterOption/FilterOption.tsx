import React, { useEffect, useState } from "react";
import './FilterOption.scss';

type FilterOptionProps = {
    option: {} | null,
}

export const FilterOption = ({option}: FilterOptionProps ) => {

    const [filtr, setFiltr] = useState<string[]>([])

    useEffect(() => {
        if(option){
            setFiltr(Object.values(option))
        }
    }, [option])

    return (
        <div className="filter-option">
            {option
            &&
            filtr.map(opt => {
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
