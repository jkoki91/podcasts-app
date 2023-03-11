import React, { useState } from "react";
import { Container } from "react-bootstrap";

import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

import { Link } from "react-router-dom";

export default function EpisodiesList(props) {

    return (
        <React.Fragment>
            <Col className="my-3 mt-5" xs="12" sm="7" md="9">
                <Container>
                    <h2>Espisodes {props.episodes.length !== 0 ? props.episodes.length : 'Loading...'}</h2>
                </Container>
                <Container>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Duration</th>

                            </tr>
                        </thead>
                        <tbody>
                            {props.episodes.map(a => {
                                return (
                                    <tr key={a.id}>
                                        <td><Link to={`episode/${a.id}`} style={{textDecoration: 'none'}}> {a.title} </Link></td>
                                        <td>{new Date( a.date).toLocaleDateString()}</td>
                                        <td>{a.duration}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>

                </Container>
            </Col>
        </React.Fragment>
    )
};