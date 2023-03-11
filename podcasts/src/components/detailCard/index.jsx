import React from "react";

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";


export default function DetailCard(props) {
    if (props.details) {
        return (
            <React.Fragment>
                <Col className="m-3 my-3 mt-5">
                    <Card className="mt-3 mb-4 me-0 shadow-sm" style={{ width: '16rem', display: 'flex', alignItems: 'center' }}>

                        <Image roundedCircle variant="top"
                            style={{ width: '8rem', height: '8rem', marginTop: '-4rem' }}
                            src={props.details.artwork}
                        />

                        <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Card.Title><Link className="over" style={{textDecoration: 'none', color: 'black'}} to={`/podcast/${props.details.id}`}> 
                                {props.details.name} 
                            </Link></Card.Title>
                            <hr style={{
                                color: '#333',
                                width: '100%',
                                height: '0.5px',
                            }} />
                            <Card.Text>
                                Author: {props.details.artistName}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </React.Fragment>
        )
    }
};