import React from 'react';
import { SearchLine } from './components/SearchLine';

function App() {
    
    return (
        <div className="App">
            <SearchLine disabled={false} filter={true}></SearchLine>
        </div>
    );
}

export default App;
