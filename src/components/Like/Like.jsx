import React from 'react';
import { Button } from 'react-bootstrap';

const Like = (props) => {
    return ( 
        <Button variant="success" onClick={() => props.likeSong(props.song)}>Like</Button>
     );
}
 
export default Like;