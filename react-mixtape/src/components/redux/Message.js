import React from 'react'

type Props = {
    message: string,
    isError: bool
};

const Message = (p: Props) =>
    <div className={"message " +
        (p.isError
            ? "message-negative"
            : "message-positive")}>
        <span>{p.message}</span>
    </div>

export default Message;
