import PropTypes from 'prop-types';
import React from 'react';
import styles from './overlayImage.css';

const OverlayImage = ({ imageUrl, altText }) =>
    <div className={styles.container}>
        <div className={styles.overlay}></div>
        <img src={imageUrl} alt={altText} />
    </div>;

OverlayImage.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired
};

export default OverlayImage;
