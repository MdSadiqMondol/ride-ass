import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const TypeOfVehicle = (props) => {
   const {name, image, id} = props.vehicle;
	const history = useHistory()
	const showDetail = id => {
		const url = `destination/${id}`;
		history.push(url)
	}
	return (
		<div onClick={() => showDetail(id)}>
			<Card style={{ width: '18rem',textAlign:'center' }}>
				<Card.Img variant="top" src={image} />
				<Card.Body>
					<Card.Title>{name}</Card.Title>
				</Card.Body>
			</Card>
		</div>
	);
};

export default TypeOfVehicle;