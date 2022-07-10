import React, { useEffect, useState } from "react";
import './ButtonMore.scss';
import { useTheme } from '../../features/theme';

type ButtonMoreProps = {
    limit?: boolean,
    onClick?: (ev: any) => void,
}

export const ButtonMore = ({limit, onClick}: ButtonMoreProps) => {
    const { theme } = useTheme()
    const [limitPage, setLimitPage] = useState(false)

    useEffect(() => {
        if(limit){
            setLimitPage(limit)
        }
    }, [limit])

    return (
        <button className={`button-more ${limitPage && 'button-more_dislpay_none'} button-more-${theme}`} onClick={onClick}>
            Show more
            <span className="button-more__loader"></span>
        </button>
    )
}