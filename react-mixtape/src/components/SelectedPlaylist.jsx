/* eslint-disable no-console */
import React from 'react';
import { Icon } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import PropTypes from 'prop-types';

const SelectedPlaylist = ({
    name,
    numberOfFollowers,
    numberOfTracks,
    url,
    image,
    isPublic
}) => (
<header>
    <image src={image} alt={`Cover image for playlist '${name}'`} />
    <div>
        <h1>{name}</h1>
        <span>
            Has <strong>{ numberOfFollowers }</strong> followers
        </span>
    </div>
    <ul>
        <li>
            <Icon icon={IconNames.LINK} />
            <a href={url}>{url}</a>
        </li>

        <li>
            <Icon icon={IconNames.MUSIC} />
            <strong>{ numberOfTracks }</strong> track(s)</li>

        <li>
            <Icon icon={ isPublic ? IconNames.UNLOCK : IconNames.LOCK } />
            Public
        </li>
    </ul>
</header>
);

SelectedPlaylist.propTypes = {
    name: PropTypes.string.isRequired,
    numberOfFollowers: PropTypes.number.isRequired,
    numberOfTracks: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isPublic: PropTypes.bool.isRequired
}

export default SelectedPlaylist;
