//house the event listener function and the drop down menu for the Attraction API
import { useAttractions, getAttractions } from "./AttractionProvider.js"

const eventHub = document.querySelector(".dropdown")
const domElement = document.querySelector(".attractionsDrop")

eventHub,addEventListener("change", e => {
    if (e.target.id === "selectAttraction") {
        const customEvent = new CustomEvent ("attractionSelected", {
            detail: {
                chosenAttraction: e.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

const render = (attractionCollection) =>{


domElement.innerHTML = `
    <select class="dropdown" id="attractionSelect">
        <option value="0">Select an Attraction</option>
        ${attractionCollection.map(attractionObj => {
            return`<option value="${attractionObj.name}>${attractionObj.name}</option>`
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