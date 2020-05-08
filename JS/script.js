document.getElementById('btn').addEventListener('click', loadData => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(Response => Response.json())
    .then(data => {
        let html = '';
        data.forEach(element => {
            html += `
            <li>${element.name}</li>
            `;
        });
        document.getElementById('list').innerHTML = html;
    });
});
