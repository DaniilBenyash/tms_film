import React from "react";
import './List.scss';

type ListProps = {
    lines: string[],
    onClick?: (event: any) => void,
    selectItems: string[],
}

export const List = ({lines, onClick, selectItems}: ListProps ) => {

    const checkLine = (line: string) => selectItems.includes(line) 
    
    return (
        <div className="list">
            {lines.map((line, index, array) => {
                return (
                    <button 
                    key={index}
                    className={`list__line 
                                ${index === 0 ? 'list__line_first' : (index === array.length-1 && 'list__line_last')} 
                                ${checkLine(line) && 'list__line_selected'}`}
                    onClick={onClick}
                    value={line}
                    >
                        {line}
                    </button>
                )
            })}
        </div>
    )
}