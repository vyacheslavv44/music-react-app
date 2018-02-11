import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import redux from 'react-redux';//tried here 'redux'
//import registerServiceWorker from './registerServiceWorker';//just don't know what this for

import { Router, Route, Link, browserHistory } from 'react-router-3';
import Routes from './routes';
//import { createStore } from 'redux';




// function playlist(state = [], action) {
//     if(action.type === 'ADD_TRACK') {
//         return[
//             ...state, action.payload
//         ];
//     }
//     return state;
//   }



// const store = createStore(playlist);

// const addTrackBtn = document.querySelectorAll('.addTrack')[0];
// const trackInput = document.querySelectorAll('.trackInput')[0];
// const list = document.querySelectorAll('.list')[0];

//console.log(addTrackBtn);

// store.subscribe(() => {
//     //console.log('subscribe', store.getState());
//     // without it in our list adding (not one at a time) but
//     // all items in array with every button's hit.
//     list.innerHTML = '';
//     //clearing input text field
//     trackInput.value = '';
//     store.getState().forEach(track => {
//         const li = document.createElement('li');
//         li.textContent = track;
//         list.appendChild(li);
//     });
//   })




/* addTrackBtn.addEventListener('click', () => {
    const trackName = trackInput.value;
    //check for trackName NOT empty
    if (!trackName) {
        return
    }
    store.dispatch({ type: 'ADD_TRACK', payload: trackName });
}); */


  


//registerServiceWorker();

ReactDOM.render(
    <Routes history={browserHistory} />,
    document.getElementById('root')
);