import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
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
            <div className="searchBar">
                <label>Search: </label>
                <input type="text" name="input" onChange={this.handleChange} value={this.state.input}/>
                <Button variant="success" onClick={() => this.props.filterSongs(this.state.input,'all')}>All</Button>
                <Button variant="success" onClick={() => this.props.filterSongs(this.state.input,'title')}>Title</Button>
                <Button variant="success" onClick={() => this.props.filterSongs(this.state.input,'album')}>Album</Button>
                <Button variant="success" onClick={() => this.props.filterSongs(this.state.input,'artist')}>Artist</Button>
                <Button variant="success" onClick={() => this.props.filterSongs(this.state.input,'release_date')}>Release Date</Button>
                <Button variant="success" onClick={() => this.props.filterSongs(this.state.input,'genre')}>Genre</Button>
            </div>
            
         );
    }
}
 
export default FilterSongs;