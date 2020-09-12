let itineraries = [];


export const useItineraries = () => {
	return notes.slice();
}


export const getItineraries = () => {
  return fetch("https://criminals.glassdale.us/criminals")
  .then(response => response.json())
      .then(parsedResponse => {
              itineraries = parsedResponse
          }
      )
}


export const saveItinerary = Obj => {
	return fetch("https://localhost:8088/notes", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(Obj)
	})
    .then(getItineraries)
    .then(dispatchStateEvent)
}