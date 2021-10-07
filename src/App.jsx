import './App.css';
import React, { Component } from 'react';
import DisplaySongs from './components/DisplaySongs/DisplaySongs';
import axios from 'axios';
import CreateSong from './components/CreateSong/CreateSong';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      songs: []
     }
  }

  componentDidMount = () => {
    this.getAllSongs();
  }

  componentDidUpdate = (prevProps) => {
      if (prevProps.songs !== this.state.songs) {
        this.setState()
      }
  }

  getAllSongs = async () => {
      let response = await axios.get("http://127.0.0.1:8000/music/")
      this.setState({
          songs: response.data
      })
  }

  handleRemove = (song) => {
    const url = `http://127.0.0.1:8000/music/${song.id}/`;

    axios
      .delete(url)
      .then(res => {
        this.setState(previousState => {
          let newSongs = previousState.songs.filter(s => s.id !== song.id)
          return {
            songs: newSongs
          };
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  createSong = async (newSong) => {
    let tempSongs = this.state.songs
    let response = await axios.post('http://127.0.0.1:8000/music/', newSong)
    tempSongs.push(response)
    console.log(response)
    // this.setState({
    //   songs: tempSongs
    // })
    this.getAllSongs()
    
    // .then((response) => {
    //   console.log(response);
      
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }

  render() {
    console.log(this.state.songs) 
    return ( 
      <div>
          <DisplaySongs deleteSong={this.handleRemove} songs={this.state.songs}/>
          <CreateSong createSong={this.createSong}/>
      </div>
     );
  }
}
 
export default App;