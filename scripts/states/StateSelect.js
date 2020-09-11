import { theStates } from "./StateProvider.js"

const eventHub = document.querySelector(".dropdownContainer")
const domElement = document.querySelector(".statesDrop")


export const selectState = () => {
    domElement.innerHTML = `
    <select class="dropdownContainer" id="selectState">
        <option value="0">Select a State</option>
    </select>
    `
    const selectTarget = document.querySelector("#statesSelect")
    let stateHTMLRepresentation = "";
    const states = theStates()
    for (const oneState of states) {
        stateHTMLRepresentation += state(oneState);
    }

selectTarget.innerHTML += `
    ${stateHTMLRepresentation}
`}

const state = (stateObj) => {
    return `<option value="${stateObj}">${stateObj}</option>`
}


eventHub.addEventListener("change", e =>{
    if (e.target.id === "stateSelect"){
        const customEvent = new CustomEvent("stateSelected", {
            detail: {
                stateChosen: e.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

