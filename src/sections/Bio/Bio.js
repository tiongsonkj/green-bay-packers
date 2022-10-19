import React from 'react';
import playersData from '../../data/players.json';
import picture from '../../assets/profile.png';

import './bio.scss';

const Bio = () => {
	const { Hgt, Wgt, SchoolName, DOB, FirstName, LastName } = playersData[0];

    return (
        <section className="bio">
            {/* left col */}
            <div className="bio__left-col"><img src={picture} alt="player-img"/></div>

            {/* right col */}
            <div className="bio__right-col">
                <p>{FirstName} {LastName}</p>
                <p>Height: {Hgt}</p>
                <p>Weight: {Wgt}</p>
                <p>Birthdate: {DOB}</p>
                <p>College: {SchoolName}</p>
            </div>
        </section>
    )
};

export default Bio;