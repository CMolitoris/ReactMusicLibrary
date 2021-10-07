import React from 'react';

const DeleteSong = (props) => {

    return ( 
        <td className='no-border'><button onClick={() => props.deleteSong(props.song)}>Delete</button></td>
     );
}
 
export default DeleteSong;