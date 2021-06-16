import React, {useState} from 'react';
import {Popup} from 'react-map-gl';
import axios from 'axios';

const RegisterPopup = (props) => {

  const latitude = props.coordinates.latitude;
  const longitude = props.coordinates.longitude;

  const [inputs,setInputs] = useState({});


  const handleInputChange = (e) => {
		const target = e.target;
		const value = target.value;
		const name = target.name;

		setInputs({
			...inputs,
			[name]: value,
			latitude: parseFloat(latitude),
      longitude: parseFloat(longitude)
		});
	}

	const submitHandler = async e => {
		e.preventDefault();
		const response = await axios.post('http://localhost:3001/log', inputs);
    props.onSubmit();
		console.log(response);
	};


  return (
    <Popup
      latitude={parseFloat(latitude)}
      longitude={parseFloat(longitude)}
      closeButton={true}
      closeOnClick={false}
      onClose={props.closePopup}
     >
      <form onSubmit={e => submitHandler(e)}>
					<label>Title:</label>
					<br />
					<input type="text" id="title" name="title" onChange={(e)=>handleInputChange(e)} required />
					<br />
					<label>Description:</label>
					<br />
					<input type="text" id="description" name="description" onChange={(e)=>handleInputChange(e)} />
					<br />
					<label>Image link:</label>
					<br />
					<input type="text" id="image" name="image" onChange={(e)=>handleInputChange(e)} />
					<br />
					<label>Date visited:</label>
					<br />
					<input type="date" id="date" name="date" onChange={(e)=>handleInputChange(e)} required />
					<br />
					<button>Save</button>
				</form>
    </Popup>
  )
};
export default RegisterPopup;