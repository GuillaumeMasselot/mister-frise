const monthList = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
]

const parseDay = (day) => {
    return (day > 9) ? `${day}` : `0${day}`;
}

const parseYear = (year) => {
    return (year >= 0) ? `${year}` : `${Math.abs(year)} AEC`;
}

export const parseDate = (databaseDate) => {
    const date = new Date(Number(databaseDate));
    const day = parseDay(date.getDate());
    const month = monthList[date.getMonth()];
    const year = parseYear(date.getFullYear());
    return `${day} ${month} ${year}`;
}