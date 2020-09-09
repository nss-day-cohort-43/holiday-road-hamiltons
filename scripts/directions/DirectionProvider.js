let directions = [];

export const useDirections = () => {
    return directions.slice();
};

export const getDirections = () => {
    return fetch("")
        .then(response => response.json())
        .then(parsedDirections => {
            // console.table(parsedCriminals)
            directions = parsedDirections
        }
    )
};