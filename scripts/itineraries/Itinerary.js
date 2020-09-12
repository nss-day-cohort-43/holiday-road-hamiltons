export const CriminalHTML = (criminalObj) => {
	return `
		<section id="officer-${criminalObj.id}" class="card-criminal">
			<p><strong> ${criminalObj.name}</strong> 
			<br>Age: ${criminalObj.age}
      <br>Crime: ${criminalObj.conviction}
      <br>Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}
      <br>Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}
      <br>
			<p><button id="associates--${criminalObj.id}">🧑‍🤝‍🧑Suposed Alibi</button></p>
			${AlibiDialog(criminalObj.id)}
		</section>
	`
}