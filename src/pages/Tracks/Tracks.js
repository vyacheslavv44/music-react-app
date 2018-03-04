import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReactDOM from 'react-dom';
import './Tracks.css';
import { createStore } from 'redux';

const store = createStore(playlist);

const addTrack = trackName => ({
  type: 'ADD_TRACK',
  payload: trackName
})

// FIXME [YC]: Здесь я бы я еще улучшил, в store хранил бы такой объект: {tracks: []},
// чтобы оставить возможность добавлять другие ключи.
const stateMapper = tracks => ({ tracks });

class Tracks extends Component {
  state = {
    trackName: ''
  };

  componentWillReceiveProps({ trackName }) {
    this.setState({ trackName });
  }

  addTrack = () => {
    const { trackName } = this.state;
    this.props.addTrack(trackName);
  }
  
  renderTrack = trackName => <li>{trackName}<li>
  
  render() {
    return (
      <div className="Tracks">
        <h1>Песни</h1>
        <input type="text" placeholder="введите трэк" required className="trackInput" value={this.state.trackName} />
        <button className="addTrack" onClick={this.addTrack}>Добавить</button>
        <ul class="list">
          {this.props.tracks.map(this.renderTrack, this}
        </ul>
      </div>
    );
  }
}

function playlist(state = [], action) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state, action.payload
    ];
  }
  return state;
}




export default connect(stateMapper, { addTrack })(Tracks);
