import React, { useEffect } from 'react';
import { NavigationMenu } from './components/NavigationMenu';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';
import { useFilterPost } from './features/filterPost';
import { useTheme } from './features/theme'

function App() {
    const { theme } = useTheme()

    const {activeFilter} = useFilterPost()

    useEffect(() => {
        if(activeFilter){
            document.body.classList.add('scroll-disallowed')
        } else {
            document.body.classList.remove('scroll-disallowed')
        }
    }, [activeFilter])
    return (

            <div className={`App App-${theme}`}>
                <Header></Header>
                <div className="App__section">
                    <NavigationMenu/>
                    <Outlet/>
                </div>
            </div>
        
    );
}

export default App;
