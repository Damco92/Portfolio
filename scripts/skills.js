/* ----- SKILLS ----- */
// primary skills
$('#primary').html(dataSkills.primary.map(item =>
    `<div class="text-center col-4 col-md-2 my-3">
        <img class="my-1" src="${item.icon}" />
        <p>${item.name}</p>
    </div>`
).join(''));