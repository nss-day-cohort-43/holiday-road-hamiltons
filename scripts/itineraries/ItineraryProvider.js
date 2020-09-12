let itineraries = [];


export const useItineraries = () => {
	return notes.slice();
}

export const saveItinerary = Obj => {
	return fetch("https://localhost:8088/notes", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(Obj)
	})
	.then(() => {
		return getItineraries()
	})
    .then(dispatchStateChangeEvent)
}