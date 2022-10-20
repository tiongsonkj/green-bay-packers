import React from 'react';

const YearSum = (props) => {
    
    const data = {
        comp: 0,
        att: 0,
        yards: 0,
        td: 0,
        int: 0,
        sacks: 0,
        hits: 0,
    };
    for (let log of props.gameLogs) {
        data.comp += Number(log["QBCompletions"]);
        data.att += Number(log["QBAttempts"]);
        data.yards += Number(log["QBYards"]);
        data.td += Number(log["QBTouchdowns"]);
        data.int += Number(log["QBInterceptions"]);
        data.sacks += Number(log["QBSacks"]);
        data.hits += Number(log["QBHits"]);
    }
    
    return (
        <tr>
            {/* <td>hi</td> */}
            <td>Totals:</td>
            <td>{data.comp}</td>
            <td>{data.att}</td>
            <td>{data.yards}</td>
            <td>{data.td}</td>
            <td>{data.int}</td>
            <td>{data.sacks}</td>
            <td>{data.hits}</td>
        </tr>
    );
}

export default YearSum;