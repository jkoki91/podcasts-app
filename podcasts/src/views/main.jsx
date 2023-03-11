import React, { useEffect, useState } from "react";

import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import PodcastCard from "../components/card";

import api from "../api/api.js";

export default function Main() {
    const [allPodcasts, setAllPodcasts] = useState([]);
    const [filteredPodcasts, setFilteredPodcasts] = useState([]);

    useEffect(()=>{
        api.podcasts.getAll().then(c => {
            setAllPodcasts(c)
            setFilteredPodcasts(c)
        });
    },[]);
    
    const handlerSearch = (e) => {
        setFilteredPodcasts(allPodcasts.filter(elem => (
            elem.author.toLowerCase().includes(e.target.value.toLowerCase()) || elem.name.toLowerCase().includes(e.target.value.toLowerCase())
        )))
    }

    return (
        <React.Fragment>
            <Row className="pe-4  d-flex flex-row-reverse mb-5">
                <Col xs={10} md={4} className="p-2 me-4">
                    <InputGroup onChange={handlerSearch} className="m-3" data-testid="filter-input">
                        <Form.Control
                            placeholder="Filter podcasts..."
                            aria-label="filter"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
                <Col xs={1} className="p-2">
                    <h4 className="m-3"><Badge className="mt-1" bg="primary">100</Badge></h4>
                </Col>
            </Row>
            <Row className="ps-3 d-flex flex-row justify-content-evenly " >
                {filteredPodcasts.map( a => <PodcastCard key={a.id} podcast={a} ></PodcastCard> )}
            </Row>

        </React.Fragment>
    )
};