import React from 'react';
import {Button} from 'react-bootstrap'

const DeleteSong = (props) => {

    return ( 
        
            <Button variant="success" onClick={() => props.deleteSong(props.song)}>Delete</Button>
        
     );
}
 
export default DeleteSong;