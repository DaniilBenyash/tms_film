import React, {  useEffect, useState } from "react";
import './Header.scss';
import { ReactComponent as Logo } from '../../assets/image/logo.svg';
import { ReactComponent as LogoLight } from '../../assets/image/logoLight.svg';
import { SearchLine } from "../SearchLine";
import { User } from "../User";
import { Link } from "react-router-dom";
import { Filters } from "../Filters/Filters";
import { useFilterPost } from "../../features/filterPost";
import { useTheme } from '../../features/theme'

export const Header = () => {
    const { theme } = useTheme()
    const {setWindowsFilter, filter} = useFilterPost()
    const [activeFilter, setActiveFilter] = useState(false)

    useEffect(() => {
        if(filter?.movieName){
            setActiveFilter(true)
        } else {
            setActiveFilter(false)
        }
    }, [filter])
    
    return (
        <header className="header">
            <div className="header_padding_64">
                <Link to='/'>
                    {theme === 'dark'
                    ?
                    <Logo className='header__logo'/>
                    :
                    <LogoLight className='header__logo'/>
                    }
                </Link>
            </div>
            <SearchLine disabled={false} onClick={() => setWindowsFilter(true)} filter={activeFilter}/>
            <div className="header_padding_40">
                <User  auth={false}/>
            </div>
            <Filters />
        </header>
    )
}