import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import './Tracks.css';
import { createStore } from 'redux';
import { addTrack } from '../../store/reducers/playlist';

const stateMapper = ({ playlist: tracks }) => ({ tracks });


class Tracks extends Component {
  state = {
    trackName: ''
  };


  constructor(props) {
    super(props);
    Object.assign(this.state, props);
  }


  componentWillReceiveProps({ trackName }) {
    this.setState({ trackName });
  }

  addTrack = () => {
    const { trackName } = this.state;
    this.props.addTrack(trackName);
  }

  onNameChange = e => {
    const trackName = e.target.value;
    this.setState({ trackName })
  };

  renderTrack = trackName =>
    <li>{trackName}</li>;


  render() {
    return (
      <div className="Tracks">
        <h1>Песни</h1>
      
        <input type="text" placeholder="введите трэк" required className="trackInput" value={this.state.trackName} onChange={this.onNameChange} />


        <button className="addTrack" onClick={this.addTrack}>Добавить</button>
        <ul class="list">
          {this.props.tracks.map(this.renderTrack, this)}
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
   
   
export default connect(stateMapper, {addTrack})(Tracks);
