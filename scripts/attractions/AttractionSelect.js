//house the event listener function and the drop down menu for the Attraction API
import { useAttractions, getAttractions } from "./AttractionProvider.js"
import { attractionsPreviewPopulate } from "../itineraries/ItineraryList.js";

const eventHub = document.querySelector(".dropdownContainer")
const domElement = document.querySelector(".attractionsDrop")

eventHub.addEventListener("change", event => {
    if (event.target.id === "attractionSelect") {
        const customEvent = new CustomEvent ("attractionSelected", {
            detail: {
                chosenAttraction: event.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
        attractionsPreviewPopulate(customEvent)
    }
})

const render = (attractionCollection) =>{

    domElement.innerHTML = `
    <select class="dropdown" id="attractionSelect">
        <option value="0">Select an Attraction</option>
        ${attractionCollection.map(attractionObj => {
            return`<option value="${attractionObj.name}">${attractionObj.name}</option>`
        }).join("")
    }
        </select>
`
    }

    export const attractionsSelection = () => {
        getAttractions()
        .then( () =>{
            const attractionList = useAttractions()
            render(attractionList)
        })
    }