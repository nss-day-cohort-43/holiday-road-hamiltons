export const ItineraryHTMLConverter = (itineraryObj) => {
    return `
        <section class="note">
            <div class="note--title">Itinerary: ${itineraryObj.suspect}</div>
            <div class="itinerary--content">${itineraryObj.notetext}</div>
            <div class="note--timestamp">Timestamp: ${new Date(itineraryObj.date).toLocaleDateString('en-US')}</div>
        </section>
    `
};