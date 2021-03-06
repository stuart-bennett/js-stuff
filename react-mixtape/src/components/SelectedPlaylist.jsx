/* eslint-disable no-console */
import React from 'react';
import { Icon } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import PropTypes from 'prop-types';
import styles from './selectedPlaylist.css';

const SelectedPlaylist = ({
    name,
    numberOfFollowers,
    numberOfTracks,
    url,
    image,
    isPublic,
    canSave,
    savePlaylist
}) => (
<header className={styles.container}>
    <img src={image} alt={`Cover image for playlist '${name}'`} />
    <div className={styles.title}>
        <h1>{name}</h1>
        <button disabled={!canSave} onClick={savePlaylist}>Save</button>
    </div>
    <span>
        Has <strong>{ numberOfFollowers }</strong> followers
    </span>
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
    isPublic: PropTypes.bool.isRequired,
    canSave: PropTypes.bool.isRequired,
    savePlaylist: PropTypes.func.isRequired
}

export default SelectedPlaylist;
