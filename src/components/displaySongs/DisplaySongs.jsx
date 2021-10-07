import React, { Component } from 'react';
import axios from 'axios';

class DisplaySongs extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs: []
         }
    }

    componentDidMount = () => {
        this.getAllSongs();
    }

    getAllSongs = async () => {
        let response = await axios.get("http://127.0.0.1:8000/music/")
        this.setState({
            songs: response.data
        })
    }

    render() { 
        return ( 
            <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Release Date</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
         );
    }
}
 
export default DisplaySongs;

