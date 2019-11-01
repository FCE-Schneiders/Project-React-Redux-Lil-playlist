import React, { Component } from 'react';
import Aux from '../../hoc/_Aux/_Aux';
import SongForm from './../../components/SongForm/SongForm';
import SongList from './../../components/SongList/SongList';


class SongOverview extends Component {
  
    // // constructor() {
    // //   super()
    // //   this.state = 
    //   {
    //     songs: []
    //   }
      
    //}
  
    state = {
        songs: [
            {
            id: '1',
            song: 'In the Corner',
            artist:'R.E.M.',
            genre:'Rock',
            rating:'2'


        },
        {
            id: '2',
            song: 'I want it all',
            artist:'Queen',
            genre:'Rock',
            rating:'1'


        },
        {
            id: '3',
            song: 'In the Corner',
            artist:'R.E.M.',
            genre:'Rock',
            rating:'5'


        }



    ] }; 

    addSong = (song) => {
        // doe iets om de state aan te passen
        const songToAdd = {
          number: '10',
          name: 'pppp',
          artist: 'bbbb',
          genre: 'pppp',
          rate: '1111'
        }
        const currentStat = this.state;
        this.setState({
          currentStat: this.state.songs.push(songToAdd)
  
        })
        // let extraSong = this.state.songs[3].artist;
        // console.log(extraSong);
        
    }
  
    render() {
      return (
       <Aux>
        <div>
               
                <SongForm addSong={this.addSong}/>
                <table>
                    <tr className="song-header"> 
                        <th className="song-row__item">#</th>
                        <th className="song-row__item">Song</th>
                        <th className="song-row__item">Artist</th>
                        <th className="song-row__item">Genre</th>
                        <th className="song-row__item">Rating</th>
                    </tr>

                    {this.state.songs.map(songArr => (
                    <tr>
                    
                        <td>{songArr.id}</td>
                        <td>{songArr.song}</td>
                        <td>{songArr.artist}</td>
                        <td>{songArr.genre}</td>
                        <td>{songArr.rating}</td>
                   </tr>
                )) }
                    
            </table>
                <SongList songs={this.state.songs}/>
                {/* oefenbutton om tekst te uploaden  */}
                <input type='button' value='Voeg toe' onClick={this.addSong} />
           
            
              
            </div>

            <div>         
            </div>
        </Aux>
      );
    }
  }
  
  export default SongOverview;