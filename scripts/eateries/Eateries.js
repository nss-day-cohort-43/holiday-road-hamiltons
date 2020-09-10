export const eateryHTML = (eateryObj) =>{
    return ` 
    <section id="eatery-card"${eateryObj.id} class="eatery-card">
    <h2>${eateryObj.businessName}</h2>
    <p>[${eateryObj.city}, ${eateryObj.state}]</p>
    `
    
}