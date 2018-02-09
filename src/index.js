import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tracks from './pages/Tracks/Tracks';
//import registerServiceWorker from './registerServiceWorker';

import { Router, Route, Link, browserHistory } from 'react-router-3';
import Routes from './routes';
import { createStore } from 'redux';



function playlist(state = [], action) {
    if(action.type === 'ADD_TRACK') {
        return[
            ...state, action.payload
        ];
    }
    return state;
  }



const store = createStore(playlist);
//querySelector()
const addTrackBtn = document.querySelectorAll('.addTrack')[0];
const trackInput = document.querySelectorAll('.trackInput')[0];
const list = document.querySelectorAll('.list')[0];


// const addTrackBtn = document.querySelector('.addTrack');
// const trackInput = document.querySelector('.trackInput');
// const list = document.querySelector('.list');


store.subscribe(() => {
    //console.log('subscribe', store.getState());
    
    // 33 line - without it in our list adding (not one at a time) but
    // all items in array with every button's hit.
    list.innerHTML = '';
    // 35 line - clearing input text field
    trackInput.value = '';
    store.getState().forEach(track => {
        const li = document.createElement('li');
        li.textContent = track;
        list.appendChild(li);
    });
  })




addTrackBtn.addEventListener('click', () => {
    const trackName = trackInput.value;
    // 50 check for trackName NOT empty
    if (!trackName) {
        return
      }
    store.dispatch({ type: 'ADD_TRACK', payload: trackName});
  });






//registerServiceWorker();

ReactDOM.render(
    <Routes history={browserHistory} />,
    document.getElementById('root')
);
