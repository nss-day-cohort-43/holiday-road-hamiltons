let attractions = [];

export const useAttractions = () => {
    return attractions.slice();
};

export const getAttractions = () => {
    return fetch("")
        .then(response => response.json())
        .then(parsedAttractions => {
            // console.table(parsedCriminals)
            attractions = parsedAttractions
        }
    )
};