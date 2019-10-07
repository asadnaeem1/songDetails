import React from 'react';
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';

export default function App() {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <h1>Song Detail App</h1>    
            </div>
            <div className="ui row">
                <div className="column eight wide">
                    <SongList/>
                </div>
                <div className="column eight wide">
                    <SongDetail/>
                </div>
            </div>
        </div>
    )
}
