let eateries = [];

export const useEatery = () => {
    return eateries.slice();
};

export const getEateries = () => {
    return fetch("")
        .then(response => response.json())
        .then(parsedEateries => {
            // console.table(parsedCriminals)
            eateries = parsedEateries
        }
    )
};