/* eslint-disable no-console */
import React from 'react';
import { Icon } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import PropTypes from 'prop-types';
import OverlayImage from './OverlayImage.jsx';
import styles from './selectedPlaylist.css';

const SelectedPlaylist = ({
    name,
    numberOfFollowers,
    numberOfTracks,
    url,
    image,
    isPublic
}) => (
<header className={styles.header}>
    <OverlayImage imageUrl={image} altText={`Cover image for playlist '${name}'`} />
    <div className={styles.metaData}>
        <h1>{name}</h1>
        <span className={styles.numberOfFollowers}>
            Has <strong>{ numberOfFollowers }</strong> followers
        </span>
    </div>
    <ul className={styles.statsBlock}>
        <li className="url">
            <Icon icon={IconNames.LINK} />
            <a href={url}>{url}</a>
        </li>

        <li className="numTracks">
            <Icon icon={IconNames.MUSIC} />
            <strong>{ numberOfTracks }</strong> track(s)</li>

        <li className="visibility">
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
