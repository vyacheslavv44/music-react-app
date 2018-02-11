import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Tracks.css';
import { createStore } from 'redux';

const store = createStore(playlist);

const addTrackBtn = document.querySelectorAll('.addTrack')[0];
const trackInput = document.querySelectorAll('.trackInput')[0];
const list = document.querySelectorAll('.list')[0];


class Tracks extends Component {
  
  handleClick() {
    //console.log('this is:', this);
    const trackName = trackInput.value;
    store.dispatch = { type: 'ADD_TRACK', payload: trackName }
  }
  render() {
    return (
      <div className="Tracks">
        <h1>Песни</h1>

        <input type="text" placeholder="введите трэк" required class="trackInput" />

        
        <button class="addTrack" onClick={(e) => this.handleClick(e)}>Добавить</button>
        <ul class="list">

        </ul>


    


      </div>
    );
  }
}

store.subscribe(() => {
  //console.log('subscribe', store.getState());
  // without it in our list adding (not one at a time) but
  // all items in array with every button's hit.
  list.innerHTML = '';
  //clearing input text field
  trackInput.value = '';
  store.getState().forEach(track => {
    const li = document.createElement('li');
    li.textContent = track;
    list.appendChild(li);
  });
})


function playlist(state = [], action) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state, action.payload
    ];
  }
  return state;
}




export default Tracks;



