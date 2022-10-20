import React from 'react';

import './components.scss';

const Career = (props) => {
    const { comp, att, yards, td, int, sacks, hits } = props.careerStats;

    return (
        <div className="career">
            <div>CAREER</div>
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
        </div>
    )
};

export default Career;