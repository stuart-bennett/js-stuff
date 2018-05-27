import PropTypes from 'prop-types';
import React from 'react';
import { Icon } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import Spinner from './Spinner.jsx';
import styles from './menu.css';

const Menu = ({ userId, profileImage, profileUrl, numberOfFollowers }) => {
    if (userId == null) {
        return <Spinner />;
    }

    return (
        <div className={styles.container}>
            <div className={styles.profile}>
                <img
                    className={styles.profileImage}
                    src={ profileImage }
                    alt={ `Profile image for Spotify User ${userId}` }
                />
                <div className={styles.stats}>
                    <span className={styles.userName}>{ userId }</span>
                    <dl>
                        <dt>No. of Followers</dt>
                        <dd className={styles.numberofFollowers}>
                            <Icon
                                icon={IconNames.FOLLOWER}
                                title="Number of Followers" />
                            { numberOfFollowers }
                        </dd>
                        <dt>Profile URL</dt>
                        <dd className={styles.profileUrl}>
                            <Icon
                                icon={IconNames.LINK}
                                title="Spotify Profile" />
                            <a href={ profileUrl }>{ profileUrl }</a>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>);
};

Menu.propTypes = {
    userId: PropTypes.string,
    profileImage: PropTypes.string.isRequired,
    profileUrl: PropTypes.string,
    numberOfFollowers: PropTypes.number
};

export default Menu;
