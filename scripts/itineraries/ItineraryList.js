import { getItineraries, useItineraries } from "./ItineraryProvider.js";
import { ItineraryHTML } from "./Itinerary.js";

//access the preview container
const eventHub = document.querySelector(".previewContainer")



const render = (itineraries) => {
    const itineraries = useItineraries()
    contentTarget.innerHTML = itineraries.map((obj) => {
            return NoteHTMLConverter(obj)
        }).join("");
}


export const ItineraryList = () => {
    getItineraries()
        .then(useItineraries)
        .then(render)
}


eventHub.addEventListener("itinerarySaved", () => {	
    const newItineraries = useItineraries()
    render(newItineraries)
})