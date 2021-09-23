import React from 'react';
import { Link } from 'react-router-dom';

const EasterEgg = () => {
    return (
        <div class="easter-egg-txt">
            You found the easter egg!!!
            <div class="img-easter-egg"></div>
            <div class="easter-egg-txt-2">
                You have wasted your time.
            </div>
            <div class="nav">
                <Link to="/portfolio">
                    Return
                </Link>
            </div>
        </div>
    );
};

export default EasterEgg;
