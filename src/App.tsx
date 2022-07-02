import React from 'react';
import { NavigationMenu } from './components/NavigationMenu';
import { Header } from './components/Header';
import { MainPage } from './page/MainPage';
function App() {
    
    return (
        <div className="App">
            <Header></Header>
            <NavigationMenu/>
            <MainPage></MainPage>
        </div>
    );
}

export default App;
