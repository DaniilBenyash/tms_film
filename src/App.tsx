import React, { useEffect } from 'react';
import { NavigationMenu } from './components/NavigationMenu';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';
import { useFilterPost } from './features/filterPost';

function App() {
    const {activeFilter} = useFilterPost()
    useEffect(() => {
        if(activeFilter){
            document.body.classList.add('scroll-disallowed')
        } else {
            document.body.classList.remove('scroll-disallowed')
        }
    }, [activeFilter])
    return (

            <div className="App">
                <Header></Header>
                <div className="App__section">
                    <NavigationMenu/>
                    <Outlet/>
                </div>
            </div>
        
    );
}

export default App;
