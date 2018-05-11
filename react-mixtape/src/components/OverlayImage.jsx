import PropTypes from 'prop-types';
import React from 'react';
import styles from './overlayImage.css';

const colours = [
    'purple',
    'green',
    'orange',
    'yellow'
];

const urlToColour = {};

const getRandomColour = () => colours[Math.floor(Math.random() * colours.length)];
const tryGetRandomColour = (url) => {
    if (!urlToColour[url]) {
        urlToColour[url] = getRandomColour();
    }

    return urlToColour[url];
};

const OverlayImage = ({ imageUrl, altText }) => {
    return <div className={styles.container}>
        <div
            className={styles.overlay}
            style={{ backgroundColor: tryGetRandomColour(imageUrl) }}>
        </div>
        <img src={imageUrl} alt={altText} />
    </div>
};

OverlayImage.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired
};

export default OverlayImage;
