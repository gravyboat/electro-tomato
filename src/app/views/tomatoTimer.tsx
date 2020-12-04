import React from 'react';
import './tomatoTimer.scss';

type tomatoAlarm = {
    label: string;
    message: string;
    time: number;
};

const tomatoAlarms: tomatoAlarm[] = [
    {
        label: 'Roma',
        message: 'A standard 30 minute roma',
        time: 30,
    },
    {
        label: 'Heirloom',
        message: 'A focused 60 minute heirloom',
        time: 60,
    },
];

export const Timers = () => {
    return (
        <div className="main-page">
            <div className="main-page__header">
                <h3>Tomatoes</h3>
            </div>
            <ul className="tomatoes">
                {tomatoAlarms.map((alarm: tomatoAlarm) => (
                    <li className="tomato-item">
                        <div>
                            <p className="tomato-item__time"> {alarm.time} </p>
                            <p className="tomato-item__label"> {alarm.label} </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
