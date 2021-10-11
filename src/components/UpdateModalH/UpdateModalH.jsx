import React, { Component } from 'react';

import './UpdateModalH.css'

class UpdateModalH extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isOpen: false
         }
    }

    setIsOpen = (bool) => {
        this.setState({
            isOpen: bool
        })

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
                            <h5>Update Song Information</h5>
                        </div>
                        <div className="body">
                            Update content
                        </div>
                        <div className="footer">
                            <button onClick={() => this.setIsOpen(false)}>Cancel</button>
                            <button>Confirm</button>
                        </div>
                    </div>
                </div>
             );
        } 
        else {
            return <button onClick={()=> this.setIsOpen(true)}>Update</button>
        }
        
    }
}
 
export default UpdateModalH;