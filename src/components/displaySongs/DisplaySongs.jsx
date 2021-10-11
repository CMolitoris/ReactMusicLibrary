import React from 'react';
import DeleteSong from '../DeleteSong/DeleteSong';
// import UpdateSong from '../UpdateSong/UpdateSong';
import './DisplaySongs.css'
import UpdateModalH from '../UpdateModalH/UpdateModalH';
import {Table} from 'react-bootstrap'


const DisplaySongs = (props) => {
    let counter = 1;
    
    
    return ( 
        <div>
            <Table responsive striped bordered hover variant="light">
                <thead >
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Artist</th>
                        <th scope="col">Album</th>
                        <th scope="col">Release Date</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Update</th>
                    </tr>
                </thead>
                <tbody>
                    {props.songs.map((song,index)=>{
                        return (
                            <tr key={index}>
                                <td scope="row">{counter++}</td>
                                <td>{song.title}</td>
                                <td>{song.artist}</td>
                                <td>{song.album}</td>
                                <td>{song.release_date}</td>
                                <td>{song.genre}</td>
                                
                                <td><DeleteSong song={song} deleteSong={props.deleteSong}/></td>
                                <td><UpdateModalH song={song} updateSong={props.updateSong}/></td>
                            
                                
                            </tr>
                        )
                    })}   
                </tbody>
            </Table>
            
        </div>
     );
}
 
export default DisplaySongs;


