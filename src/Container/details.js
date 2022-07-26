import React, { useState, useRef } from 'react'
import '../css/getLocation.css';

const Details = (props) => {
    console.log(props.details)
    return (
        <div id="apply-modal" className="modal" >
            <div className="modal-content" style={{'maxWidth':'450px'}}>
                <div className="modal-heading">
                       <p>
                           {JSON.stringify(props.details, null, '  ')}
                        </p>         
                </div>
                <div className="modalClose">
                    <button onClick={props.cancel} className="cancel">Close</button>
                </div>
            </div>
        </div>

    )
}

export default Details;