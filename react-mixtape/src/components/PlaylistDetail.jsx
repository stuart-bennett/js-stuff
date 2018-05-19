import PropTypes from 'prop-types';
import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import SearchContainer from '../containers/SearchContainer.jsx';
import SearchResults from './SearchResults.jsx';
import SelectedPlaylist from './SelectedPlaylist.jsx';
import PlaylistTracks from './PlaylistTracks.jsx';
import RemoteData from './RemoteData.jsx';
import Spinner from './Spinner.jsx';

const PlaylistDetail = ({ playlist, searchResults, tracks }) =>
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Row>
            <Col md={12}>
                <SelectedPlaylist {...playlist} />
            </Col>
        </Row>
        <Row nogutter>
            <Col md={6} offset={{ md: 3 }}>
                <SearchContainer />
            </Col>
        </Row>
        <Row>
            <Col md={12}>
                <RemoteData
                    data={searchResults}
                    success={data => <SearchResults results={data} />}
                    fetching={<Spinner />}
                    fail={msg => <div>{msg}</div>}
                />
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
    searchResults: PropTypes.shape({
        state: PropTypes.number.isRequired
    }).isRequired,
    tracks: PropTypes.array.isRequired
};

export default PlaylistDetail;
