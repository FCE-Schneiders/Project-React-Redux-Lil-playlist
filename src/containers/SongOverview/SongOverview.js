import React, { Component } from 'react';
import Aux from '../../hoc/_Aux/_Aux';
import SongForm from './../../components/SongForm/SongForm';
import SongList from './../../components/SongList/SongList';


class SongOverview extends Component {
  
    constructor() {
      super()
      this.state = 
      {
        songs: []
      }
      
    }
  
    addSong = (song) => {
              // doe iets om de state aan te passen
    }
  
    render() {
      return (
       <Aux>
       <div>
             <p>dit is tekst uit SongOverview.js</p>
            <SongForm addSong={this.addSong}/>
            <table>
		        <tr className="song-header">  
			        <th className="song-row__item">Song</th>
			        <th className="song-row__item">Artist</th>
			        <th className="song-row__item">Genre</th>
			        <th className="song-row__item">Rating</th>
			      </tr>
		</table>
            <SongList songs={this.state.songs}/>
        </div>
        </Aux>
      );
    }
  }
  
  export default SongOverview;