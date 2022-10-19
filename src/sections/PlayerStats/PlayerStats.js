import React, { useEffect, useState } from 'react';
import YearSum from '../../components/YearSum';
import { calculateCareerStats } from '../../utils';

import './playerStats.scss';

const PlayerStats = () => {
    // const [ careerStats, setCareerStats ] = useState(calculateCareerStats().career);
    // const [ currentYear, setCurrentYear ] = useState(calculateCareerStats().twentyOne);
    const { twentyOne, career } = calculateCareerStats();
    const [ yearSum, setYearSum ] = useState(null);

    useEffect(() => {
        console.log(calculateCareerStats());


    }, []);
    
    /* 
        - yearly stat summary
        - career total stats
        - game by game log of the most recent season
        --- with the ability to change seasons to see prior season game log
    */

    // gonna need to sort the data by year...

    // need to identify most recent season...
    // need to identify which columns to use

    // career stats...
    // go through the entire json file and...
    // create the object...

    console.log({ career, twentyOne })
    const { comp, att, yards, td, int, sacks, hits } = career;
    return (
        <section className="player-stats">
            {/* career */}
            {/* TODO: move into its own component */}
            <table className="career-table">
                <thead>
                    <th>COMP</th>
                    <th>ATT</th>
                    <th>YARDS</th>
                    <th>TD</th>
                    <th>INT</th>
                    <th>SACKS</th>
                    <th>HITS</th>
                </thead>
                <tr>
                    <td>{comp}</td>
                    <td>{att}</td>
                    <td>{yards}</td>
                    <td>{td}</td>
                    <td>{int}</td>
                    <td>{sacks}</td>
                    <td>{hits}</td>
                </tr>
            </table>


            {/* year  */}
            <div className="player-stats__yearly-stats">
                <div className="head">
                    <span>2021</span>
                    
                    <div>
                        {/* TODO: make this a map of the unique years */}
                        <select id="year-select">
                            <option>2020</option>
                            <option>2019</option>
                            <option>2018</option>
                        </select>
                    </div>
                </div>

                <table className="game-logs">
                    <thead>
                        <th>GAME DATE</th>
                        <th>COMP</th>
                        <th>ATT</th>
                        <th>YARDS</th>
                        <th>TD</th>
                        <th>INT</th>
                        <th>SACKS</th>
                        <th>HITS</th>
                    </thead>
                    <tr>
                        <td></td>
                    </tr>
                    {twentyOne.map(game => {
                        const { comp, att, yards, td, int, sacks, hits, date } = game;
                        console.log({ game, date })

                        return (
                            <tr>
                                <td>{date}</td>
                                <td>{comp}</td>
                                <td>{att}</td>
                                <td>{yards}</td>
                                <td>{td}</td>
                                <td>{int}</td>
                                <td>{sacks}</td>
                                <td>{hits}</td>
                            </tr>
                        )
                    })}

                    <YearSum gameLogs={twentyOne} />
                </table>
            </div>
        </section>
    )
};

export default PlayerStats;

/* career stat colums to use... 
    - QBAttempts
    - QBCompletions
    - Compl Percentage? (seperate calculation)
    - QBYards
    - QBTouchdowns
    - QBInterceptions
    - avg yards per pass attempt? (seperate calculation)
    - QBLong
    - QBSacks
    - QBHits
    - QB Rating? (how would i calculate this for his career)

    ------
    nice to have:
    - games played / started
    - record
*/


/* yearly stat colums to use... 
    - QBAttempts
    - QBCompletions
    - Compl Percentage? (seperate calculation)
    - QBYards
    - QBTouchdowns
    - QBInterceptions
    - avg yards per pass attempt? (seperate calculation)
    - QBLong
    - QBSacks
    - QBHits
    - QB Rating? (how would i calculate this for his career or for the year)
*/

/* Game by game log
    - QBAttempts
    - QBCompletions
    - Compl Percentage? (seperate calculation)
    - QBYards
    - QBTouchdowns
    - QBInterceptions
    - avg yards per pass attempt? (seperate calculation)
    - QBLong
    - QBSacks
    - QBHits
    - QB Rating
    - game date
    - opponent
*/