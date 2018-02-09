import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Tracks.css';




class Tracks extends Component {
  render() {
    return (
      <div className="Tracks">
        <h1>Песни</h1>

        <input type="text" placeholder="введите трэк" required class="trackInput" />
    <button class="addTrack">Добавить</button>
    <ul class="list">

    </ul>


    


      </div>
    );
  }
}




export default Tracks;



