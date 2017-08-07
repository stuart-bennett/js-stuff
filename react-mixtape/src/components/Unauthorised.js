import React from 'react';

type Props = {
    clientId: string
};

const Unauthorised = (p: Props) => <div>
        <a href={p.clientId}>Authorise</a>
    </div>

export default Unauthorised;

