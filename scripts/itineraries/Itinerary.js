export const ItineraryHTML = (obj) => {
  return `
  <section class="itinerary">
    <p class"card-title"> ${obj.park} Selected Itinerary}</p>
      <ul class="itineraryPreviews">
        <li> National Parks ${obj.park} </li>
        <li> Eateries ${obj.attraction}</li> 
        <li> Attractions ${obj.eatery}</li> 
      </ul>
  `
}