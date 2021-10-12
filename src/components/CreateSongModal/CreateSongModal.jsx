import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


class UpdateSongModal extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isOpen: false,
            title: '',
            artist: '',
            album: '',
            release_date: '',
            genre: ''
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    setIsOpen = (bool=false) => {
        this.setState({
            isOpen: bool
        })

    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createSong(this.state)
        // this.setState({
        //     title: '',
        //     artist: '',
        //     album: '',
        //     release_date: '',
        //     genre: ''
        // })
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
                            <h4>Add Song</h4>
                        </div>
                        <div className="body">
                            <div className="border">
                                <form onSubmit={(event) => this.handleSubmit(event)}>
                                    <label> Title: </label>
                                    <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
                                    <label> Artist: </label>
                                    <input type="text" name="artist" onChange={this.handleChange} value={this.state.artist}/>
                                    <label> Album: </label>
                                    <input type="text" name="album" onChange={this.handleChange} value={this.state.album}/>
                                    <label> Release Date: </label>
                                    <input type="date" name="release_date" onChange={this.handleChange} value={this.state.release_date}/>
                                    <label> Genre: </label>
                                    <input type="text" name="genre" onChange={this.handleChange} value={this.state.genre}/>
                                    <Button className="btn-success"  type="submit">Confirm</Button>
                                </form>
                            </div>
                        </div>
                       
                    </div>
                </div>
             );
        } 
        else {
            return <Button className="btn-success btn btn-block" onClick={()=> this.setIsOpen(true)}>Add Song</Button>
        }
    }
}
 
export default UpdateSongModal;