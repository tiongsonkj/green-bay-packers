import React, { useEffect, useState } from 'react';
import YearSum from '../../components/YearSum';
import Career from '../../components/Career';
import { calculateCareerStats, getYearGameLogData } from '../../utils';

import './playerStats.scss';

const PlayerStats = () => {
    const { twentyOne, career, years } = calculateCareerStats();
    const [ year, setYear ] = useState(null);
    const [ yearData, setYearData ] = useState([]);

    useEffect(() => {
        console.log(calculateCareerStats());

        // initialize first year
        const sortedYears = years.sort((a, b) => b - a);
        setYear(sortedYears[0]);
    }, []);

    useEffect(() => {
        console.log({ year })
        setYearData(getYearGameLogData(year));
    }, [year])
    
    /* 
        - yearly stat summary
        - career total stats
        - game by game log of the most recent season
        --- with the ability to change seasons to see prior season game log
    */

    // gonna need to sort the data by year...

    // need to identify which columns to use

    const handleSelectChange = (e) => {
        setYear(parseInt(e.target.value));
    }

    console.log({ career, twentyOne, yearData })
    const { comp, att, yards, td, int, sacks, hits } = career;
    return (
        <section className="player-stats">
            <Career careerStats={career}/>


            {/* year  */}
            <div className="player-stats__yearly-stats">
                <div className="head">
                    <span>{year}</span>
                    
                    <div>
                        {/* TODO: sort this out by most recent. it already is but still */}
                        <select id="year-select" onChange={handleSelectChange} value={year}>
                            {years.map(year => (
                                <option>{year}</option>
                            ))}
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
                    {yearData.map(game => {
                        const { QBCompletions, QBAttempts, QBYards, QBTouchdowns, QBInterceptions, QBSacks, QBHits, GameDate } = game;
                        const date = GameDate.split(" ")[0];
                        return (
                            <tr>
                                <td>{date}</td>
                                <td>{QBCompletions}</td>
                                <td>{QBAttempts}</td>
                                <td>{QBYards}</td>
                                <td>{QBTouchdowns}</td>
                                <td>{QBInterceptions}</td>
                                <td>{QBSacks}</td>
                                <td>{QBHits}</td>
                            </tr>
                        )
                    })}

                    <YearSum gameLogs={yearData} />
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