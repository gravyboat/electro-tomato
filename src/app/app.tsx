import React from 'react';
import './app.scss';
import { Timers } from './views/tomatoTimer';

export const App = () => {
    return (
        <div className="app">
            <Timers></Timers>
        </div>
    );
};
