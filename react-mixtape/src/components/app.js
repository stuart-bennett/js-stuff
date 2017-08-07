// @flow

import React from 'react'
import Search from 'components/Search'
import Unauthorised from 'components/Unauthorised'

const clientId = "1f662e1ad1ae494382cd56133ebb7b14";
const render = () => {
    const token: string = window.location.hash;
    return token.length > 0
        ? <Search placeholder="Search..." />
        : <Unauthorised clientId={clientId} />;

};

const App = () => render();

export default App;
