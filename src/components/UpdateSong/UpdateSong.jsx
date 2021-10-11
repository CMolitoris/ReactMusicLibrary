import React, { Component } from 'react';

class UpdateSong extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: props.song.title,
            artist: props.song.artist,
            album: props.song.album,
            release_date: props.song.release_date,
            genre: props.song.genre,
            song: props.song
            
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.song.title = this.state.title
        this.props.song.artist = this.state.artist
        this.props.song.album = this.state.album
        this.props.song.release_date = this.state.release_date
        this.props.song.genre = this.state.genre
        this.props.updateSong(this.props.song)
    }

    render() { 
        return ( 
            // <button onClick={() => this.props.UpdateSong(this.props.song)}>Update</button>
            <div className="border">
                <h4>Update</h4>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label>Title: </label>
                    <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
                    <label> Artist: </label>
                    <input type="text" name="artist" onChange={this.handleChange} value={this.state.artist}/>
                    <label> Album: </label>
                    <input type="text" name="album" onChange={this.handleChange} value={this.state.album}/>
                    <label> Release Date: </label>
                    <input type="datetime" name="release_date" onChange={this.handleChange} value={this.state.release_date}/>
                    <label> Genre: </label>
                    <input type="text" name="genre" onChange={this.handleChange} value={this.state.genre}/>
                    
                    <button type="submit">Update</button>
                </form>
            </div>
            
         );
    }
}
 
export default UpdateSong;