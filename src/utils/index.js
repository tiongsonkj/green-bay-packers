import yearStatsData from '../data/yearstats.json';

// return object with career stats
const calculateCareerStats = () => {
    const career = {
        comp: 0,
        att: 0,
        yards: 0,
        td: 0,
        int: 0,
        sacks: 0,
        hits: 0,
    }

    const twentyOne = [];


    for (let game of yearStatsData) {
        career.comp += Number(game["QBCompletions"]);
        career.att += Number(game["QBAttempts"]);
        career.yards += Number(game["QBYards"]);
        career.td += Number(game["QBTouchdowns"]);
        career.int += Number(game["QBInterceptions"]);
        career.sacks += Number(game["QBSacks"]);
        career.hits += Number(game["QBHits"]);

        // go through and spit out the unique years

        // maybe create a new object for each year?
        // can create a smalller objet?
        if (game["Season"] === 2021) {
            const newObj = {
                comp: game["QBCompletions"],
                att: game["QBAttempts"],
                yards: game["QBYards"],
                td: game["QBTouchdowns"],
                int: game["QBInterceptions"],
                sacks: game["QBSacks"],
                hits: game["QBHits"],
                date: game["GameDate"].split(" ")[0]
            }
            twentyOne.push(newObj);
        } 
    }


    
    // console.log(yearStatsData[0]);
    // console.log(yearStatsData.length);
    // console.log(career);

    return {
        career,
        twentyOne
    };
};

export { calculateCareerStats }