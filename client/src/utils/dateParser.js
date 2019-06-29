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

const parseYear = (year) => {
    return (year >= 0) ? `${year}` : `${Math.abs(year)} av. JC`;
}

export const parseDate = (dateAsString) => {
    if(dateAsString === "" || dateAsString === null) return null;
    const dmy = dateAsString.split("/");
    switch(dmy.length) {
        case 3:
            return `${dmy[0]} ${monthList[Number(dmy[1]-1)]} ${parseYear(dmy[2])}`;
        case 2: 
            return `${monthList[Number(dmy[0]-1)]} ${parseYear(dmy[1])}`;
        case 1:
            return parseYear(dmy[0]);
        default:
            return null;
    }
}

export const parseDateAlt = (dateAsString) => {
    if(dateAsString === "") return null;
    const dmy = dateAsString.split("/");
    switch(dmy.length) {
        case 3:
            return {
                year: dmy[2],
                month: dmy[1] - 1,
                day: dmy[0]
            };
        case 2: 
            return {
                year: dmy[1],
                month: dmy[0] -1,
                day: null
            }
        case 1:
            return {
                year: dmy[0],
                month: null,
                day: null
            }
        default:
            return null;
    }
}