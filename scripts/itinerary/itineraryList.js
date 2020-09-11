
const render = (notes) => {
    const criminals = useCriminals()
    
   let HTMLArray = notes.map((noteObj) => {
        return NoteHTMLConverter(noteObj);
   })
   
    contentTarget.innerHTML = HTMLArray.join("")
   };



export const ItineraryList = () => {
    getNotes()
        .then(useNotes)
        .then(render)
};