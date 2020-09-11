
const render = (notes) => {
    const criminals = useCriminals()
    
   let HTMLArray = notes.map((noteObj) => {
        return NoteHTMLConverter(noteObj);
   })
   console.log("HTMLArray", HTMLArray);
    contentTarget.innerHTML = HTMLArray.join("")
   };



export const ItineraryList = () => {
    getNotes()
        .then(useNotes)
        .then(render)
};