import React from 'react';
import {Button} from 'react-bootstrap'

const DeleteSong = (props) => {

    return ( 
        <td className='no-border'>
            <Button variant="success" onClick={() => props.deleteSong(props.song)}>Delete</Button>
        </td>
     );
}
 
export default DeleteSong;