// House the event listener and the drop down for the Eatery API

import { useEateries, getEateries } from "./EateryProvider.js"

const eventHub = document.querySelector(".dropdownContainer")
const domElement = document.querySelector(".eateriesDrop")

eventHub.addEventListener("change", event => {
    if (event.target.id === "selectEatery") {
        const customEvent = new CustomEvent ("EaterySelected", {
            detail: {
                chosenEatery: event.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

const render = (eateryCollection) =>{
    domElement.innerHTML = `
        <select class="dropdown" id="eaterySelect">
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