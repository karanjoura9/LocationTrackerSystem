import React, { useState, useRef } from 'react'
import '../css/getLocation.css';
import axios from "axios";
import * as Constants from '../constant'
import Details from './details';

const GetLocationByLatLong = (props) => {


    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [details, setDetail] = useState('');
    const [openDetails, setOpenDetail] = useState(false);


    const getLocation = (props) => {

        if (latitude.trim().length == 0 || longitude.trim().length == 0) {
            alert('All fields are mandatory')
        }
        else {
            axios.get('http://api.positionstack.com/v1/reverse?access_key=' + Constants.APP_KEY + '&query=' + latitude.trim() + "," + longitude.trim()).then(response => response.data)
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
        <>
            <div id="apply-modal" className="modal" >
            {openDetails && <Details cancel={cancel} details={details} />}
         
                <div className="modal-content">
                    <div className="modal-heading">
                        <div className='latlongsection'>
                            <input onChange={e => { setLatitude(e.target.value) }} className="heading1" placeholder='Enter Latitude' />
                            <br></br>
                            <input onChange={e => { setLongitude(e.target.value) }} className="heading1" placeholder='Enter Longitude' />
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
        </>
    )
}

export default GetLocationByLatLong;