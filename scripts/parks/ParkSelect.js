// house the event listener and the drop down for the Parks API
import { usePark, getParks } from "./ParkProvider.js"

const eventHub = document.querySelector(".dropdown")
const domElement = document.querySelector(".parksDrop")

eventHub,addEventListener("change", e => {
    if (e.target.id === "selectPark") {
        const customEvent = new CustomEvent ("parkSelected", {
            detail: {
                chosenAttraction: e.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

const render = (parksCollection) =>{
domElement.innerHTML = `
    <select class="dropdown" id="parkSelect">
        <option value="0">Select a Park</option>
        ${parksCollection.map(parkObj => {
            return`<option value="${parkObj.fullName}>${parkObj.fullName}</option>`
        }).join("")
    }
        </select>
`
    }

    export const parkSelection = () => {
        getParks()
        .then( () =>{
            const parkList = usePark()
            render(parkList)
        })
    }