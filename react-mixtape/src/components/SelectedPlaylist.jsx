import React from 'react';
import PropTypes from 'prop-types';

const SelectedPlaylist = ({ name, numberOfFollowers }) => (
<header>
    <h1>{name}</h1>
    <span>Has { numberOfFollowers } followers</span>
    <input type="text" placeholder="Search & add new track..." />
</header>
);

SelectedPlaylist.propTypes = {
    name: PropTypes.string.isRequired,
    numberOfFollowers: PropTypes.number.isRequired
}

export default SelectedPlaylist;
