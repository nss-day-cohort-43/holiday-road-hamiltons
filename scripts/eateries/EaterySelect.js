import { useEateries, getEateries } from "./EateryProvider.js"
import { eateriesPreviewPopulate } from "../itineraries/ItineraryList.js";

const eventHub = document.querySelector(".dropdownContainer")
const domElement = document.querySelector(".eateriesDrop")

eventHub.addEventListener("change", event => {
    if (event.target.id === "EaterySelected") {
        const customEvent = new CustomEvent ("EaterySelected", {
            detail: {
                chosenEatery: event.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
        eateriesPreviewPopulate(customEvent)
    }
})

const render = (eateryCollection) =>{
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

export const eaterySelection = () => {
    getEateries()
    .then( () =>{
        const eateryList = useEateries()
        render(eateryList)
    })
}