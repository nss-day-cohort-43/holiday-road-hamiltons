export const parkName = (parkObj) =>{
    return ` 
    <section id="park-card"${parkObj.id} class="park-card">
    <h2>${parkObj.parkName}</h2>
    
    `  
}








// export const parkHTML = (parkObj) =>{
//     return ` 
//     <section id="park-card"${parkObj.id} class="park-card">
//     <h2>${parkObj.parkName}</h2>
//     <p>[${parkObj.city}, ${parkObj.state}, ${parkObj.description}]</p>
//     `  
// }