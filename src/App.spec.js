import React from 'react';
import { render } from 'react-testing-library';

import App from './App';

describe('App', () => {
    it('Renders without errors', () => {
        render(<App />)
        expect(true).toBe(true)
    })
})