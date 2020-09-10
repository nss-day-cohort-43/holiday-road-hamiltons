//House the parks HTML

export const parkHTML = (parksObj) => {
    return `
    <section id="park-card"${parksObj.id} class="park-card">
    <h2>${parkObj.fullName}</h2>
    <p>[${parkObj.description}</p>
    `
}