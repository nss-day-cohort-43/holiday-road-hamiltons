import { getParks, usePark } from "./ParkProvider.js";

const eventHub = document.querySelector(".dropdownContainer");
const domElement = document.querySelector(".parksDrop")
// const selectedTarget = document.querySelector(".parksPreview")
// obv for preview stuff

eventHub.addEventListener("change", event => {
	if (event.target.id === "parkSelect") {
		const customEvent = new CustomEvent("parkSelected", {
			detail: {
				parkThatWasSelected: event.target.value,
				zipCodeOfParkSelected: getParkByName(event.target.value)
			}
		})		
		eventHub.dispatchEvent(customEvent)
	}
})

const getParkByName = (parkName) => {
	
	return 
};


const render = (parksCollection) => {
	domElement.innerHTML = `
	<select class="parksDrop" id="parkSelect">
	<option value="0">Select a park...</option>
	${parksCollection.map(parksObject => {
		return `<option value="${parksObject.name}">${parksObject.name}</option>`
		
	}).join("")
}
</select>
`
}

export const ParkSelect = () => {
	getParks()
	.then(() => {
		const parksList = usePark()
		render(parksList)
	});
};
