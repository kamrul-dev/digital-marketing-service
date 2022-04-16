import React from 'react';
import { Card } from 'react-bootstrap';

const Service = ({ service }) => {
    const { id, image, title, price, description } = service;
    return (
        <div className="col-md-6 col-lg-4">
            <div className='d-flex justify-content-center'>
                <Card className='food-card' style={{ width: '18rem', border: 'none' }}>
                    <Card.Img className='' variant="top" src={image} />
                    <Card.Body className='text-center' >
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Text>
                            ${price}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Service;