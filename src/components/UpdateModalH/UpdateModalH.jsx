import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './UpdateModalH.css'

class UpdateModalH extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isOpen: false,
            title: props.song.title,
            artist: props.song.artist,
            album: props.song.album,
            release_date: props.song.release_date,
            genre: props.song.genre,
            song: props.song
         }
    }

    setIsOpen = (bool=false) => {
        this.setState({
            isOpen: bool
        })

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
        
        if(this.state.isOpen) {
            return ( 
                
                <div className="modalBackground">
                    <div className="modalContainer">
                        <div className="titleCloseBtn">
                            <button onClick={() => this.setIsOpen(false)}> X </button>
                        </div>
                        
                        <div className="title">
                            <h4>Update Song Information</h4>
                        </div>
                        <div className="body">
                            <form onSubmit={(event) => this.handleSubmit(event)}>
                                <span>
                                    <label>Title: </label>
                                    <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
                                </span>
                                <span>
                                    <br/>
                                    <label> Artist: </label>
                                    <input type="text" name="artist" onChange={this.handleChange} value={this.state.artist}/>
                                </span>
                                <span>
                                    <br/>
                                    <label> Album: </label>
                                    <input type="text" name="album" onChange={this.handleChange} value={this.state.album}/>
                                </span>
                                <span>
                                    <br/>
                                    <label> Release Date: </label>
                                    <input type="datetime" name="release_date" onChange={this.handleChange} value={this.state.release_date}/>
                                </span>
                                <span>
                                    <br/>
                                    <label> Genre: </label>
                                    <input type="text" name="genre" onChange={this.handleChange} value={this.state.genre}/>
                                </span>
                                <div className="footer">
                                    <Button className="btn-danger" onClick={() => this.setIsOpen(false)}>Cancel</Button>
                                    <Button className="btn-success" type="submit">Confirm</Button>
                                </div>
                              
                            </form>
                        </div>
                       
                    </div>
                </div>
             );
        } 
        else {
            return <Button variant="success" onClick={()=> this.setIsOpen(true)}>Update</Button>
        }
        
    }
}
 
export default UpdateModalH;