import React, { Component } from 'react';

class CreateSong extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            artist: '',
            album: '',
            release_date: null
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createSong(this.state)
    }

    render() { 
        return ( 
            <form>
                <label for="title"></label>
                <input type="text" name="title" value={this.state.title}/>
                <label for="artist"></label>
                <input type="text" name="artist" value={this.state.artist}/>
                <label for="album"></label>
                <input type="text" name="album" value={this.state.album}/>
                <label for="release_date"></label>
                <input type="date" name="release_date" value={this.state.release_date}/>
            </form>
         );
    }
}
 
export default CreateSong;