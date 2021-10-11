import React from 'react';
import DeleteSong from '../DeleteSong/DeleteSong';
// import UpdateSong from '../UpdateSong/UpdateSong';
import './DisplaySongs.css'
import UpdateModalH from '../UpdateModalH/UpdateModalH';

const DisplaySongs = (props) => {
    
    
    return ( 
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                    {props.songs.map((song,index)=>{
                        return (
                            <tr key={index}>
                                <td>{song.title}</td>
                                <td>{song.artist}</td>
                                <td>{song.album}</td>
                                <td>{song.release_date}</td>
                                <td>{song.genre}</td>
                                <span>
                                    <DeleteSong song={song} deleteSong={props.deleteSong}/>
                                    {/* <UpdateModal/> */}
                                    {/* <UpdateSong song={song} updateSong={props.updateSong}/> */}
                                    
                                    <UpdateModalH song={song} updateSong={props.updateSong}/>
                                </span>
                                
                            </tr>
                        )
                    })}   
                </tbody>
            </table>
            
        </div>
     );
}
 
export default DisplaySongs;


