import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { useParams } from "react-router";

import Card from 'react-bootstrap/Card';

import parse from 'html-react-parser';

export default function Episode(props) {
    const pathParams = useParams();
    const index = props.episodes.map(e => e.id).indexOf(pathParams.episodeId);

    return (
        <React.Fragment>
            <Card className="m-2 shadow-sm">
                <Card.Body>
                    <Card.Title>{props.episodes[index].title}</Card.Title>
                    <Card.Text> {parse(props.episodes[index].content)} </Card.Text>
                    <ReactAudioPlayer
                        src={props.episodes[index].url}
                        autoPlay
                        controls
                    />
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}






