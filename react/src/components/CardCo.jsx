import React from 'react';
import {Card} from 'react-bootstrap';


const CardCo = (props) => {
  return (
		<Card style={props.styled} className="p-3 mt-3 ">
			<Card.Body>
				<Card.Title className=" d-flex align-items-center justify-content-center">
					{props.cardIcon}
					<span className="fs-2 ms-4">{props.cardAmount}</span>
				</Card.Title>
				<Card.Text className=" d-flex mt-3 text-muted  align-items-center justify-content-center fs-5">
					{props.cardTitle}
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default CardCo