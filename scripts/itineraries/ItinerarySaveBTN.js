import { saveItinerary } from "./ItineraryProvider.js"

//find place on DOM index
const eventHub = document.querySelector(".previewContainer");


//check to see if all buttons/dropdowns have been selected
eventHub.addEventListener("change", event => {

    if (event.target.classList[0] === "dropdown") {
        const parkSelected = document.querySelector("#parkSelect").value
        const attractionSelected = document.querySelector("#attractionSelect").value
        const eaterySelected = document.querySelector("#eaterySelect").value
        const saveButton = document.getElementById("#saveButton")

        if (parkSelected !== "0" && attractionSelected !== "0" && eaterySelected !== "0") {
            saveButton.disabled = false
        } else {
            saveButton.disabled = true
        }
    }
})

//eventlistener for saving dropdown selections 
eventHub.addEventListener("click", event => {
    if (event.target.id === "saveButton") {
      const parkSelected = document.querySelector("#parkSelect").value
      const attractionSelected = document.querySelector("#attractionSelect").value
      const eaterySelected = document.querySelector("#eaterySelect").value

//construct itinerary selections ??adding state to this? Please confirm
        const itinerary = {
            // state: stateSelected,
            park: parkSelected,
            attraction: attractionSelected,
            eatery: eaterySelected
        };

        saveItinerary(itinerary)

//delaring dropdown starting value
        const dropdownMenus = document.getElementsByClassName("dropdown")
        for (const menu of dropdownMenus) {
            menu.value = '0';
        }
//detail box with adventure details
        const detailBox = document.getElementsByClassName("details")
        for (const area of detailBox) {
            area.innerHTML = "";
        }
//save button disabled till sections are complete
        document.querySelector("#saveButton").disabled = true;

    }
})

//creating save button and placing it on the DOM
export const SaveButton = () => {
    const HTMLTarget = document.querySelector(".previewContainer");
    
    HTMLTarget.innerHTML += `
        <button type="submit" id="saveButton" disabled>Save Itinerary</button>
    `
}

//style all buttons in main.css