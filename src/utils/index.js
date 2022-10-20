import yearStatsData from '../data/yearstats.json';

const CareerAndYears = () => {
    const career = {
        comp: 0,
        att: 0,
        yards: 0,
        td: 0,
        int: 0,
        sacks: 0,
        hits: 0,
    }
    const years = [];

    for (let game of yearStatsData) {
        career.comp += Number(game["QBCompletions"]);
        career.att += Number(game["QBAttempts"]);
        career.yards += Number(game["QBYards"]);
        career.td += Number(game["QBTouchdowns"]);
        career.int += Number(game["QBInterceptions"]);
        career.sacks += Number(game["QBSacks"]);
        career.hits += Number(game["QBHits"]);

        // new array of unique years
        if (!years.includes(game["Season"])) {
            years.push(game["Season"]);
        }
    }

    return {
        career,
        years
    };
};

const getYearGameLogData = (year, seasonType) => {
    const seasonTypeFilter = [];
    for (const [key, value] of Object.entries(seasonType)) {
        if (value) {
            seasonTypeFilter.push(key);
        }
    }

    return yearStatsData
        .filter(game => game["Season"] === year)
        .filter(game => seasonTypeFilter.includes(game["SeasonType"]));
}


export { 
    CareerAndYears,
    getYearGameLogData
};