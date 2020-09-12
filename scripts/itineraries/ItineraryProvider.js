//declare var
let itineraries = [];


//point eventHub to container in index
const eventHub = document.querySelector(".previewContainer");


//delare a dispatch function then write a function to save itinerary 
const dispatchStateChangeEvent = () => {
  const itineraryStateChangedEvent = new CustomEvent("itinerarySaved");

  eventHub.dispatchEvent(itineraryStateChangedEvent);
};

//use parsed itinerary reponse, export copy of array
export const useItineraries = () => {
	return itineraries.slice();
}

//declare, fetch, parse and export itineraries
export const getItineraries = () => {
  return fetch("http://localhost:8088/itineraries")
  .then(response => response.json())
      .then(parsedResponse => {
              itineraries = parsedResponse
          }
      )
}

//declare, fetch and export function that uses getINT and dispatch functions
export const saveItinerary = Obj => {
	return fetch("https://localhost:8088/notes", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(Obj)
	})
    .then(getItineraries)
    .then(dispatchStateChangeEvent)
}