import React from 'react';
import playersData from '../../data/players.json';
import picture from '../../assets/arod.png';

import './bio.scss';

const Bio = () => {
	const { Hgt, Wgt, SchoolName, DOB, FirstName, LastName } = playersData[0];
    const birthday = DOB.split(" ")[0];

    return (
        <section className="bio">
            <div className="bio__left-col"><img src={picture} alt="player-img"/></div>

            <div className="bio__right-col">
                <p className="name">{FirstName} {LastName}</p>
                <div className="bio-row"><span className="bio-row__label">Height:</span> <span className="bio-row__value">{Hgt}</span></div>
                <div className="bio-row"><span className="bio-row__label">Weight:</span> <span className="bio-row__value">{Wgt}</span></div>
                <div className="bio-row"><span className="bio-row__label">Birthdate:</span> <span className="bio-row__value">{birthday}</span></div>
                <div className="bio-row"><span className="bio-row__label">College:</span> <span className="bio-row__value">{SchoolName}</span></div>
            </div>
        </section>
    )
};

export default Bio;