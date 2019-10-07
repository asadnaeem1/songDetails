import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        { title: 'Truth Hurts', duration: '4:45'},
        { title: 'Senorita', duration: '2:30'},
        { title: 'Someone You Loved', duration: '3:15'},
        { title: 'Ran$om', duration: '1:45'},        
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type==='SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})