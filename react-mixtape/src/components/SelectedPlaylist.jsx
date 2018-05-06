import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search.jsx';

const SelectedPlaylist = ({ name, numberOfFollowers }) => (
<header>
    <h1>{name}</h1>
    <span>Has { numberOfFollowers } followers</span>
    <br />
    <Search />
</header>
);

SelectedPlaylist.propTypes = {
    name: PropTypes.string.isRequired,
    numberOfFollowers: PropTypes.number.isRequired
}

export default SelectedPlaylist;
