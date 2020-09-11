
let notes = [];

const eventHub = document.querySelector(".container");

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("itineraryStateChanged")

    eventHub.dispatchEvent(itineraryStateChangedEvent)
};

export const getItinerary = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })
};

export const useItinerary = () => {
    return notes.slice();
};