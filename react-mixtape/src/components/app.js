// @flow

import React from 'react'
import Search from 'components/Search'
import Unauthorised from 'components/Unauthorised'

const clientId = "1f662e1ad1ae494382cd56133ebb7b14";
const getToken = (w: window): ?string =>
    w.location.hash.length > 0 ? w.location.hash.split("=")[1].split("&")[0] : null;

const render = () => {
    const token = getToken(window);
    return token == null
        ? <Unauthorised clientId={clientId} />
        : <Search oAuthToken={token} placeholder="Search..." />;
};

const App = () => render();

export default App;
