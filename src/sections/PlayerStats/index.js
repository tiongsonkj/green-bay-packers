import React, { useEffect, useState } from 'react';
import YearSum from '../../components/YearSum';
import Career from '../../components/Career';
import { CareerAndYears, getYearGameLogData } from '../../utils';

import './playerStats.scss';

const PlayerStats = () => {
    const { career, years } = CareerAndYears();
    const [ year, setYear ] = useState(null);
    const [ yearData, setYearData ] = useState([]);

    // handling select boxes
    const [ pre, setPre ] = useState(false);
    const [ post, setPost ] = useState(false);
    const [ reg, setReg ] = useState(true);

    useEffect(() => {
        // initialize first year
        const sortedYears = years.sort((a, b) => b - a);
        setYear(sortedYears[0]);
    }, []);

    useEffect(() => {
        setYearData(getYearGameLogData(year, {Pre: pre, Post: post, Reg: reg}));
    }, [year, pre, post, reg])

    const handleSelectChange = (e) => {
        setYear(parseInt(e.target.value));
    }

    const handleCheckboxChange = (e) => {
        const box = e.target.name;

        switch (box) {
            case "post":
                setPost(!post);
                break;
            case "pre":
                setPre(!pre);
                break;
            default:
                setReg(!reg);
        }
    }

    return (
        <section className="player-stats">
            <Career careerStats={career}/>

            <div className="yearly-stats">
                <div className="head">
                    <span>{year}</span>

                    <div className="select-container">
                        <label>
                            <input 
                                type="checkbox" 
                                name="reg" 
                                checked={reg} 
                                onChange={handleCheckboxChange}
                            /><span>Regular</span>
                        </label>
                        <label>
                            <input 
                                type="checkbox" 
                                name="post" 
                                checked={post} 
                                onChange={handleCheckboxChange}
                            /><span>Post</span>
                        </label>
                        <label>
                            <input 
                                type="checkbox" 
                                name="pre" 
                                checked={pre} 
                                onChange={handleCheckboxChange}
                            /><span>Pre</span>
                        </label>
                    </div>
                    
                    <div>
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
                        <th>OPP</th>
                        <th>COMP</th>
                        <th>ATT</th>
                        <th>YARDS</th>
                        <th>TD</th>
                        <th>INT</th>
                        <th>SACKS</th>
                        <th>HITS</th>
                        <th>QB RTG</th>
                        <th>SEASON</th>
                    </thead>
                    {yearData.map(game => {
                        const { 
                            QBCompletions,
                            QBAttempts,
                            QBYards,
                            QBTouchdowns,
                            QBInterceptions,
                            QBSacks,
                            QBHits,
                            GameDate,
                            TeamAbbr,
                            HomeAbbr,
                            AwayAbbr,
                            SeasonType,
                            QBRating
                        } = game;
                        const date = GameDate.split(" ")[0];
                        const opponent = TeamAbbr === HomeAbbr ? AwayAbbr : HomeAbbr;
                        return (
                            <tr>
                                <td>{date}</td>
                                <td>{opponent}</td>
                                <td>{QBCompletions}</td>
                                <td>{QBAttempts}</td>
                                <td>{QBYards}</td>
                                <td>{QBTouchdowns}</td>
                                <td>{QBInterceptions}</td>
                                <td>{QBSacks}</td>
                                <td>{QBHits}</td>
                                <td>{QBRating}</td>
                                <td>{SeasonType}</td>
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
