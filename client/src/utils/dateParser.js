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
    const dmy = databaseDate.split("/");
    const date = new Date(dmy[2], dmy[1] - 1, dmy[0]);
    const day = parseDay(date.getDate());
    const month = monthList[date.getMonth()];
    const year = parseYear(date.getFullYear());
    return `${day} ${month} ${year}`;
}