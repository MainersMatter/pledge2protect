import React from 'react';

import './welcome-to-maine.scss';


const WelcomeToMaine = () => {
    return (
        <div className="welcome-to-maine">
            <h2>Welcome to Maine!</h2>
            <p className="take-pledge">Take the Pledge to Keep Yourself and the State of Maine Healthy!</p>
            <p>Your actions to protect your wellbeing and the wellbeing of others are commendable. And we can't wait to welcome you to Maine!</p>
            <p className="agree">Agreeing to and signing this pledge will make your visit to Maine more safe, smooth, and free of worries.</p>
            <p className="link-to-pledge">
                <a href="#pledge">
                    <span className="sr-only">Scroll to pledge</span>
                </a>
            </p>
        </div>
    )
};

export default WelcomeToMaine;
