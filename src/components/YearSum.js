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
        data.comp += Number(log.comp);
        data.att += Number(log.att);
        data.yards += Number(log.yards);
        data.td += Number(log.td);
        data.int += Number(log.int);
        data.sacks += Number(log.sacks);
        data.hits += Number(log.hits);
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