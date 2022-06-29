import React, { useEffect, useState } from "react";
import './MultiSelect.scss';
import { List } from './components/List'
import { useRef } from "react";
import { NamePlate } from './components/NamePlate'

type MultiSelectProps = {
    placeholder: string,
    title: string,
    genres: any[]
}

export const MultiSelect = ({placeholder, title, genres}: MultiSelectProps) => {

    const [selectItems, setSelectItems] = useState<any[]>([])
    const [findItems, setFindItems] = useState<any[]>([])

    const [inputActive, setInputActive] = useState(true)
    const [inputValue, setInputValue] = useState('')

    const [tableActive, setTableActive] = useState(false)

    const inputRef = useRef<HTMLInputElement>(null)

    const findGenre = (ev: any) => {
        const value = ev.target.value;
        setInputValue(value)
        
        if(value){
            setFindItems(genres.filter(el => el.toLowerCase().includes(value.toLowerCase())))
        } else {
            setFindItems([])
        }
    }

    const selectGenre = (ev: any) => {
        const value = ev.target.value;
        ev.stopPropagation()
        
        if(selectItems.includes(value)){
            setSelectItems(selectItems.filter(item => item !== value))
        } else{
            setSelectItems([...selectItems, value])
        } 
    }

    const deleteGenre = (ev: any) => {
        const value = ev.target.value;
        setTableActive(true)
        ev.stopPropagation()

        setSelectItems(selectItems.filter(item => item !== value))
    }

    const clickTable = () => {
        setInputActive(true)
        setTableActive(true)
    }

    useEffect(() => {
        const closeBurgerAndSearh = (ev: Event) => {
            const components = ev.composedPath();
            const multiSelect = document.querySelector('.multi-select');
            setTableActive(false)
            if(multiSelect && !components.includes(multiSelect)){
                if(selectItems.length === 0){
                    setInputActive(true)
                    setSelectItems([])
                }else{
                    setInputActive(false)
                } 
                setFindItems([])
            }  
        }

        window?.addEventListener('click', closeBurgerAndSearh)
        return () => {
            window?.removeEventListener('click', closeBurgerAndSearh)
        }
    })
    
    useEffect(() => {
        if(tableActive){
            inputRef.current?.focus()
        }
    })

    useEffect(() => {
        if(selectItems.length === 0) {
            setInputActive(true)
        }
    }, [selectItems])

    return (
        <div className="multi-select">
            <h4 className="multi-select__title">{title}</h4>
            {inputActive
            ? 
            <div className="multi-select__form">
                <input 
                    className="multi-select__input" 
                    placeholder={placeholder} 
                    onChange={findGenre} 
                    onFocus={findGenre} 
                    ref={inputRef}
                    value={inputValue}
                    >
                    </input>
                <List 
                    lines={findItems} 
                    onClick={selectGenre} 
                    selectItems={selectItems}
                />
            </div>
            :
            <div 
                className="multi-select__table" 
                onClick={clickTable}
                >
                    {selectItems.map((item, index) => {
                        return (
                            <NamePlate key={index} name={item} onClick={deleteGenre}/>
                        )
                    })}
            </div>
            }
            
        </div>
    )
}