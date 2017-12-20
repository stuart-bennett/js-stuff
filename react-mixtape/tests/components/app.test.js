import fetchMock from 'jest-fetch-mock';
import React from 'react';
import renderer from 'react-test-renderer';
import App from 'components/App';

// Provide mock implementation for Fetch API
window.fetch = fetchMock;
window.location.hash = "#access_token=test.token";
test('App component works', () => {
    const app = renderer.create(<App />);
    expect(app).not.toBeNull();
});
