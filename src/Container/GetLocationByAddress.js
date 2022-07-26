import React, { useState, useRef } from 'react'
import '../css/getLocation.css';
import axios from "axios";
import * as Constants from '../constant'
import Details from './details';

const GetLocationByAddress = (props) => {

    const [address, setAddress] = useState('');
    const [details, setDetail] = useState('');
    const [openDetails, setOpenDetail] = useState(false);


    const getLocation = (props) => {

        if (address.trim().length == 0) {
            alert('Address is mandatory')
        }
        else {
            axios.get('http://api.positionstack.com/v1/forward?access_key=' + Constants.APP_KEY + '&query=' + address.trim()).then(response => response.data)
                .then((data) => {
                    setDetail(data.data.length > 0 ? data.data[0] : []);
                    setOpenDetail(true);
                }).catch((msg) => {
                    alert(msg);
                })
        }
    }

    const cancel = () => {
        setOpenDetail(false);
    }


    return (
        <div id="apply-modal" className="modal" >
            {openDetails && <Details cancel={cancel} details={details} />}

            <div className="modal-content">
                <div className="modal-heading">
                    <div className='latlongsection'>
                        <input onChange={e => { setAddress(e.target.value) }} className="heading1 address" placeholder='Enter Adddress' />
                        <br></br>
                    </div>
                </div>
                <div className="apply-modal-header">
                </div>
                <div className="modalClose">
                    <button onClick={() => { getLocation() }} className="getlocation">Get location</button>
                    <button onClick={props.cancel} className="cancel">Close</button>
                </div>
            </div>
        </div>

    )
}

export default GetLocationByAddress;