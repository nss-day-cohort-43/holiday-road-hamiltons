

import { useEateries, getEateries } from "./EateryProvider.js"
import { eateriesPreviewPopulate } from "../itineraries/ItineraryList.js";

const eventHub = document.querySelector(".dropdownContainer")
const domElement = document.querySelector(".eateriesDrop")

eventHub.addEventListener("change", event => {
    if (event.target.id === "eaterySelect") {
        const customEvent = new CustomEvent ("eaterySelected", {
            detail: {
                chosenEatery: event.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
        eateriesPreviewPopulate(customEvent)
    }
})

const render = (eateryCollection) =>{
    // eaterySelect and eaterySelected where the issue, throw me in the river
    domElement.innerHTML = `
        <select class="eateriesDrop" id="eaterySelect">
        <option value="0">Select an Eatery</option>
        ${eateryCollection.map(eateryObj => {
            return`<option value="${eateryObj.businessName}">${eateryObj.businessName}</option>`
        }).join("")
        }
        </select>
`
}

export const EaterySelect = () => {
    getEateries()
    .then( () =>{
        const eateryList = useEateries()
        render(eateryList)
    })
}