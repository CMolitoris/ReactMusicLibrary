import React, { Component } from 'react';
import './FilterSongs.css'

class FilterSongs extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            input: ''
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.filterSongs(this.state)
    }

    render() { 
        return ( 
            <div>
                {/* <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label for="category">Category: </label>
                    <select onChange={this.handleChange} id="category" name="category">
                        <option value="all">All</option>
                        <option value="title">Title</option>
                        <option value="artist">Artist</option>
                        <option value="album">Album</option>
                        <option value="genre">Genre</option>
                        <option value="release_date">Release Date</option>
                    </select>
                    <input type="text" name="input" onChange={this.handleChange} value={this.state.input}/>
                    <button type="submit">Search</button>
                </form> */}
                <input type="text" name="input" onChange={this.handleChange} value={this.state.input}/>
                <button onClick={() => this.props.filterSongs(this.state.input,'all')}>All</button>
                <button onClick={() => this.props.filterSongs(this.state.input,'title')}>Title</button>
                <button onClick={() => this.props.filterSongs(this.state.input,'album')}>Album</button>
                <button onClick={() => this.props.filterSongs(this.state.input,'artist')}>Artist</button>
                <button onClick={() => this.props.filterSongs(this.state.input,'release_date')}>Release Date</button>
                <button onClick={() => this.props.filterSongs(this.state.input,'genre')}>Genre</button>
            </div>
            
         );
    }
}
 
export default FilterSongs;