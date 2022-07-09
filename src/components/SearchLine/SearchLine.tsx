import React from "react";
import './SearchLine.scss';
import { useSearchPosts } from "../../features/searchPost";
import { type RequestForPosts } from "../../features/searchPost/searchPostSlice";
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../features/theme';

type SearchLineProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    filter?: boolean,
    disabled: boolean,
}

export const SearchLine = ({onClick, filter, disabled}: SearchLineProps) => {
    const { theme } = useTheme()
    const { fetchSearch, clearSerchPosts } = useSearchPosts()

    const navigate = useNavigate()

    const fetch = (ev: any) => { 
        clearSerchPosts(null)
        const request: RequestForPosts = {
            numberPage: 1,
            search: ev.target.value
        }
        fetchSearch(request)
        navigate('/search')
    }

    const navMain = (ev: any) => {
        if(!ev.target.value){
            navigate('/')
        }else{
            fetch(ev)
        }
    }
    const fetchPosts = (ev: any) => {
        if(ev.keyCode === 13) {
            fetch(ev)
        }
    }

    return (
        <div className="search-line">
            <input 
                type="text" 
                className={`search-line__input ${'search-line__input-' + theme}` }
                placeholder="Search" 
                disabled={disabled} 
                onKeyDown={fetchPosts} 
                onChange={navMain}
                />
            <button 
                className={`search-line__filter ${filter && 'search-line__filter_true'} ${'search-line__filter-' + theme}`} 
                onClick={onClick} 
                disabled={disabled}></button>
        </div>
    )
}