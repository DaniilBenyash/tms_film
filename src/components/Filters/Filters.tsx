import React, { useState } from "react";
import './Filters.scss';
import { ReactComponent as Cancel } from './icon/Cancel.svg';
import { Input } from '../Input'
import { MultiSelect } from '../MultiSelect'
import { Select } from '../Select'
import { Button } from '../Button'
import { useFilterPost } from '../../features/filterPost'
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../features/theme";

export const Filters = () => {
    const { theme } = useTheme()

    const [genre] = useState(['Action', 'Adventure', 'Sci-Fi', 'Fantasy', 'Animation', 'Comedy', 'Family', 'Drama', 'Crime', 'Romance', 'Reality-TV', 'Western', 'Documentary', 'Game-Show', 'Short', 'Horror', 
    'Music', 'Mystery', 'Talk-Show', ])

    const [type] = useState(['movie', 'series', 'episode', 'game'])
 
    const {getFilterPost, setFilterState, clearFilterState, setWindowsFilter, activeFilter, filter} = useFilterPost()

    const chengeMovieName = (ev: any) => setFilterState({movieName: ev.target.value});
    const chengeYearsTo = (ev: any) => setFilterState({yearsTo: ev.target.value});
    const chengeYearsFrom = (ev: any) => setFilterState({yearsFrom: ev.target.value});
    const chengeRatingTo = (ev: any) => setFilterState({ratingTo: ev.target.value});
    const chengeRatingFrom = (ev: any) => setFilterState({ratingFrom: ev.target.value});
    const chengeType = (ev: any) => setFilterState({type: ev.target.value});

    const inputMovieName = React.useRef<HTMLInputElement>(null);
    const inputYearsTo = React.useRef<HTMLInputElement>(null);
    const inputYearsFrom = React.useRef<HTMLInputElement>(null);
    const inputRatingTo = React.useRef<HTMLInputElement>(null);
    const inputRatingFrom = React.useRef<HTMLInputElement>(null);

    const clearFilter = () => {
        clearFilterState()
        if(inputMovieName.current && inputYearsTo.current && inputYearsFrom.current && inputRatingTo.current && inputRatingFrom.current){
            inputMovieName.current.value=''
            inputYearsTo.current.value=''
            inputYearsFrom.current.value=''
            inputRatingTo.current.value=''
            inputRatingFrom.current.value=''
        }
    }
    const navigate = useNavigate()
    const getPosts = () => {
        if(filter?.movieName){
            getFilterPost(filter?.movieName)
        }

        navigate('/sorting')
    }
    
    return (
        <div className={`filters ${!activeFilter && 'filters_display_none'}`}>
            <div className="filters__window" onClick={() => {setWindowsFilter(false)}}></div>
            <div className={`filters__section filters__section-${theme}`}>
                <div>
                    <div className="filters__header">
                        <h3 className={`filters__title filters__title-${theme}`}>Filters</h3>
                        <button className="filters__close-button" onClick={() => {setWindowsFilter(false)}}><Cancel/></button>
                    </div>
                </div>
                <div>
                    <div className="filters__border-line"></div>
                    <Input 
                        placeholder="Your text"
                        disabled={false}
                        label='Full or short movie name'
                        onChange={chengeMovieName}
                        ref={inputMovieName}
                    />
                    <div className="filters_padding_24"></div>
                    <MultiSelect 
                        placeholder="Your genre"
                        title="Genre"
                        genres={genre}
                    />
                    <div className="filters_padding_24"></div>
                    <div className="filters__two-select">
                        <Input 
                            placeholder="From"
                            disabled={false}
                            label='Years'
                            onChange={chengeYearsFrom}
                            ref={inputYearsFrom}
                        />
                        <Input 
                            placeholder="To"
                            disabled={false}
                            onChange={chengeYearsTo}
                            ref={inputYearsTo}
                        />
                    </div>
                    <div className="filters_padding_24"></div>
                    <div className="filters__two-select">
                        <Input 
                            placeholder="From"
                            disabled={false}
                            label='Rating'
                            onChange={chengeRatingFrom}
                            ref={inputRatingFrom}
                        />
                        <Input 
                            placeholder="To"
                            disabled={false}
                            onChange={chengeRatingTo}
                            ref={inputRatingTo}
                        />
                    </div>
                    <div className="filters_padding_24"></div>
                    <Select 
                        placeholder="Select type"
                        title="Type"
                        options={type}
                        onChange={chengeType}
                    />
                </div>
                <div className="filters__two-select">
                    <Button 
                        text="Clear filter"
                        className="button_secondary"
                        disabled={false}
                        onClick={clearFilter}
                    />
                    <Button 
                        text="Show results"
                        className="button_primary"
                        disabled={false}
                        onClick={getPosts}
                    />
                </div>
            </div>
        </div>
    )
}