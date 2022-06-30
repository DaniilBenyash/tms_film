import React from 'react';
import { Card } from './components/Card';

function App() {
    
    return (
        <div className="App">
            <Card 
                    title="Harry Potter and the Deathly Hallows: Part 2"
                    imdbID="tt0145487"
                    poster='https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg'
                    favorite={false}
                    trend={false}
            ></Card>
        </div>
    );
}

export default App;
