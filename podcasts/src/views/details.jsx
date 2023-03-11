import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import Container from 'react-bootstrap/Container';

import api from "../api/api.js";

import DetailCard from "../components/detailCard/index.jsx";
import EpisodiesList from "../components/episodesList/index.jsx";
import Episode from "../components/episode/index.jsx";

import { Row, Col } from "react-bootstrap";


export default function PodcastDetails() {
    const [podcastDetail, setPodcastDetail] = useState();
    const [episodes, setEpisodes] = useState([]);
    const pathParams = useParams();

    useEffect(() => {
        api.podcasts.getPodcast(pathParams.id).then(c => setPodcastDetail(c));
    }, []);

    useEffect(() => {
        if (podcastDetail) {
            api.podcasts.getEpisodes(podcastDetail.feedUrl).then(data => setEpisodes([...data]))
        }
    }, [podcastDetail]);

    if (podcastDetail && episodes) {
        return (
            <React.Fragment>
                <Container fluid className="pt-5">
                    <Row className="d-flex flex-row justify-content-between">
                        <Col>
                            <DetailCard details={podcastDetail}></DetailCard>
                        </Col>

                        <Col className="mb-3" xs="12" sm="8">
                            {pathParams.episodeId ? 
                                <Episode episodes={episodes}></Episode>
                            :
                                <EpisodiesList episodes={episodes}></EpisodiesList>
                            }
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }

};