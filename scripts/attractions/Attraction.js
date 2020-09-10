//attraction HTML

export const attractionHTML = (attractionObj) =>{
    return ` 
    <section id="attraction-card"${attractionObj.id} class="attraction-card">
    <h2>${attractionObj.name}</h2>
    <p>[${attractionObj.city}, ${attractionObj.state}]</p>
    `
}