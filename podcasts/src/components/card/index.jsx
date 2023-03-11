import React from "react";

import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function PodcastCard(props) {
    return (
        <React.Fragment>

            <Col  className="m-0 my-3" xs="12" sm="5" md="3">
                <Card  className="mt-3 mb-4 me-0 shadow-sm" style={{ width: '16rem', display: 'flex', alignItems: 'center' }}>
                    <Image roundedCircle variant="top"
                        style={{ width: '8rem', height: '8rem', marginTop: '-4rem' }}
                        src={props.podcast.img}
                    />
                    <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Link className="over" style={{textDecoration: 'none', color: 'black'}} to={`/podcast/${props.podcast.id}`}>
                        <Card.Title>{props.podcast.name}</Card.Title>
                    </Link>
                        <Card.Text>
                           Author: {props.podcast.author}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </React.Fragment>
    )
};