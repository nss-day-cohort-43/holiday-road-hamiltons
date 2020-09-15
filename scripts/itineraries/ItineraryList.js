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

const parksContentTarget = document.querySelector(".parksPreview");
const eateriesContentTarget = document.querySelector(".eateriesPreview");
const attractionsContentTarget = document.querySelector(".attractionsPreview");



const renderParks = (itineraries) => {
    // console.log("renderparkstuff")
    const itinerariesCopy = useItineraries()
    parksContentTarget.innerHTML = itineraries.map((obj) => {   
            return ItineraryHTMLConverter(obj)
        }).join("");
        
}
const renderEateries = (itineraries) => {
    // console.log("rendereateriestuff")
    const itinerariesCopy = useItineraries()
    eateriesContentTarget.innerHTML = itineraries.map((obj) => {
            return ItineraryHTMLConverter(obj)
        }).join("");
        
}
const renderAttractions = (itineraries) => {
    // console.log("rendereateriestuff")
    const itinerariesCopy = useItineraries()
    eateriesContentTarget.innerHTML = itineraries.map((obj) => {
            return ItineraryHTMLConverter(obj)
        }).join("");
        
}



export const parksItineraryList = () => {
    getItineraries()
        .then(useItineraries)
        .then(renderParks)
}
export const eateriesItineraryList = () => {
    getItineraries()
        .then(useItineraries)
        .then(renderEateries)
}
export const attractionItineraryList = () => {
    getItineraries()
        .then(useItineraries)
        .then(renderAttractions)
}




export const parksPreviewPopulate = (event) => {
    console.log("parks preview populate")
    console.log(event)
        parksContentTarget.innerHTML = event.detail.parkThatWasSelected
}
export const eateriesPreviewPopulate = (event) => {
    console.log("eateries preview populate")
    console.log(event)   
        eateriesContentTarget.innerHTML = event.detail.chosenEatery
}
export const attractionsPreviewPopulate = (event) => {
    console.log("attractions preview populate")
    console.log(event)   
        attractionsContentTarget.innerHTML = event.detail.chosenAttraction
}




eventHub.addEventListener("itinerarySaved", () => {	
    const newItineraries = useItineraries()
    render(newItineraries)
})