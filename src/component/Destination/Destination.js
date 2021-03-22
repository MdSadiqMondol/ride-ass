import React, { useState } from 'react';

import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData'
import { Form, Button } from 'react-bootstrap';


const Destination = () => {
	const { id } = useParams();
	const vehicle = fakeData.find(vehicle => vehicle.id == id);
	const [form, setForm] = useState(true);
	const [place, setPlace] = useState({
		pickFrom: '',
		pickTo: ''
	});
	const showForm = (e) => {
		setForm(!form)
		e.preventDefault()
	}
	const handlePlace = e => {
		const { name, value } = e.target;
		setPlace(prevState => ({
			...prevState,
			[name]: value
		}));
	};
	return (
		<div className="destination-container">
			<div className="search-field">
				{form === true && <Form onSubmit={showForm}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Pick From</Form.Label>
						<Form.Control name="pickFrom" type="text" onBlur={handlePlace} />

					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Pick To </Form.Label>
						<Form.Control name="pickTo" type="text" onBlur={handlePlace} />
					</Form.Group>
					<Form.Group>
						<Form.Label>Date (optional) </Form.Label>
						<Form.Control type="date" />
					</Form.Group>

					<Button variant="primary" type="submit" >
						Submit
 					 </Button>
				</Form>}
				{!form && <div style={{ background: 'salmon', color: '#fff', textAlign: 'center' }}><h3>{place.pickFrom} To {place.pickTo}</h3></div>}
				{form === false && <div style={{ textAlign: 'center' }}><h2>happy ride</h2>  <span className="display-3 font-weight-bold">$100</span></div>}
			</div>
			<div className="map-field" style={{ width: "500px" }}>
				<iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
			</div>

		</div>
	);
};

export default Destination;