import './App.css';
import React, { Component } from 'react';
import DisplaySongs from './components/DisplaySongs/DisplaySongs';
import axios from 'axios';
import CreateSong from './components/CreateSong/CreateSong';
import FilterSongs from './components/FilterSongs/FilterSongs';
import 'bootstrap/dist/css/bootstrap.css'
import CreateSongModal from './components/CreateSongModal/CreateSongModal'


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
    let tempSongs = this.state.songs;
    let response = await axios.post('http://127.0.0.1:8000/music/', newSong)
    tempSongs.push(response)
    console.log(response)
    this.getAllSongs()
  }

  // filterSongs = (input,criteriaString) => {
    
  //   if(criteriaString==='all') {
  //     this.getAllSongs()
  //   } else {
  //       let tempSongs = this.state.songs;
  //       let filteredSongs = []
  //       switch(criteriaString) {
  //         case 'title':
  //           filteredSongs = tempSongs.filter((element) => {
  //             return element.title===input
  //           })
  //           this.setState({
  //           songs: filteredSongs
  //           })
  //           break;
  //         case 'artist':
  //           filteredSongs = tempSongs.filter((element) => {
  //             return element.artist===input
  //           })
  //           this.setState({
  //           songs: filteredSongs
  //           })
  //           break;
  //         case 'album':
  //           filteredSongs = tempSongs.filter((element) => {
  //             return element.album===input
  //           })
  //           this.setState({
  //           songs: filteredSongs
  //           })
  //           break;
  //         case 'genre':
  //           filteredSongs = tempSongs.filter((element) => {
  //             return element.genre===input
  //           })
  //           this.setState({
  //           songs: filteredSongs
  //           })
  //           break;
  //         case 'release_date':
  //           filteredSongs = tempSongs.filter((element) => {
  //             return element.release_date===input
  //           })
  //           this.setState({
  //           songs: filteredSongs
  //           })
  //           break;   
  //         default:
  //           this.getAllSongs()     
  //     }
        
  //   }
  // }

  filterSongs = (input) => {
    let tempSongs = this.state.songs.filter(s => {
      if(input===""){
          return true;
      }
      else if(s.title.toLowerCase().includes(input.toLowerCase())) {
          return true;
      }
      else if(s.artist.toLowerCase().includes(input.toLowerCase())) {
          return true;
      }
      else if(s.album.toLowerCase().includes(input.toLowerCase())) {
          return true;
      }
      else if(s.genre.toLowerCase().includes(input.toLowerCase())) {
          return true;
      }
      else if(s.release_date.includes(input)) {
          return true;
      } 
      else {
        return false;
      }
    })
      this.setState({
        songs: tempSongs
      })
      if(input==='') {
        this.getAllSongs()
      }
  }

  likeSong = async (song) => {
    let url = `http://127.0.0.1:8000/music/${song.id}/likes/`
    let response = await axios.patch(url)
    this.getAllSongs()
  }

  filterHelper = (input) => {
    let tempSongs = this.state.songs;
    let filteredSongs = tempSongs.filter((element) => {
      return element.artist===input
    })
    this.setState({
    songs: filteredSongs
    })
  }

  updateSong = async (song) => {
    const url = `http://127.0.0.1:8000/music/${song.id}/`;
    let response = await axios.put(url,song);
    console.log(response);
    let tempSongs = this.state.songs;
    let index = tempSongs.findIndex(s => s.id === song.id)
    tempSongs[index] = song;
    this.setState({
      songs: tempSongs
    })

  }

  render() {
    console.log(this.state.songs) 
    return ( 
      
      
        <div className="container">
        <div className="row">
          <div className="col-12"></div>
        </div>
        <div className="row">
          <FilterSongs songs={this.state.songs} filterSongs={this.filterSongs}/>
          <DisplaySongs likeSong={this.likeSong} getSongs={this.getAllSongs} deleteSong={this.handleRemove} updateSong={this.updateSong} songs={this.state.songs}/>
        </div>

        

        {/* <CreateSong createSong={this.createSong}/>
        <div className="App">
          <div className="col-12">
            
          </div>
        </div> */}
        <div className="row">
          <CreateSongModal createSong={this.createSong}/>
        </div>
        
        
      </div>
      
     );
  }
}
 
export default App;