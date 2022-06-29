import React from "react";
import './SearchLine.scss';
// import { ReactComponent as Filter } from './icon/filter.svg';

type SearchLineProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    filter?: boolean,
    disabled: boolean,
}

export const SearchLine = ({onClick, filter, disabled}: SearchLineProps) => {
    return (
        <div className="search-line">
            <input type="text" className="search-line__input" placeholder="Search" disabled={disabled}/>
            <button className={`search-line__filter ${filter && 'search-line__filter_true'}`} onClick={onClick} disabled={disabled}></button>
        </div>
    )
}