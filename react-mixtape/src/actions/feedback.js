import * as actions from '../actionTypes';

const showFeedback = notification => ({
    type: actions.FEEDBACK_SHOW,
    notification
});

export const raiseNotification = message => dispatch => {
    const notification = {
        message,
        id: new Date()
            .toISOString()
            .replace(" ", "")
            .replace(":", "")
            .replace("-", "")
    };

    dispatch(showFeedback(notification));
    setTimeout(
        () => dispatch(hideFeedback(notification.id), notification.id),
        1000);
}


export const hideFeedback = id => ({
    type: actions.FEEDBACK_HIDE,
    id
});
