let states = [];

export const useStates = () => {
    return states.slice();
}

export const getStates = () => {
    return fetch("")
        .then(response => response.json())
        .then(parsedStates => {
            states = parsedStates
        }
    )
}