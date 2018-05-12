import PropTypes from 'prop-types';
import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import SearchContainer from '../containers/SearchContainer.jsx';
import SearchResults from './SearchResults.jsx';
import SelectedPlaylist from './SelectedPlaylist.jsx';
import PlaylistTracks from './PlaylistTracks.jsx';

const PlaylistDetail = ({ playlist, searchResults, tracks }) =>
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Row>
            <Col md={12}>
                <SelectedPlaylist {...playlist} />
            </Col>
        </Row>
        <Row>
            <Col md={12}>
                <SearchContainer />
            </Col>
        </Row>
        <Row>
            <Col md={12}>
                <SearchResults results={searchResults} />
            </Col>
        </Row>
        <Row>
            <Col md={6} offset={{ md: 3 }}>
                <PlaylistTracks tracks={tracks} />
            </Col>
        </Row>
    </Container>;

PlaylistDetail.propTypes = {
    playlist: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        numberOfFollowers: PropTypes.number.isRequired
    }).isRequired,
    searchResults: PropTypes.array.isRequired,
    tracks: PropTypes.array.isRequired
};

export default PlaylistDetail;
