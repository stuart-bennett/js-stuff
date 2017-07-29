import React from 'react';
import renderer from 'react-test-renderer';
import App from 'components/app';

test('App component works', () => {
    const app = renderer.create(<App />);
    expect(app).not.toBeNull();
});
