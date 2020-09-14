//Take park selected from the ParkSelect module and display it in the parksPreview class box.
    //listen to the event in the ParkSelect 
    //Upon selection, move data to parksPreview class box
//Add details button to each selection in the preview box
    //Populate the park box with more information upon selection of the details button
//Add save button that is disabled until every category has been selected
    //Upon selection, move that information into the save itinerary API
    //Display the saved itinerary info in the Saved box
    



import { getItineraries, useItineraries } from "./ItineraryProvider.js";
import { ItineraryHTML } from "./Itinerary.js";

//access the preview container
const eventHub = document.querySelector(".previewContainer")



const render = (itineraries) => {
    const itineraries = useItineraries()
    contentTarget.innerHTML = itineraries.map((obj) => {
            return ItineraryHTMLConverter(obj)
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