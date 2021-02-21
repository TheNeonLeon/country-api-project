//fetching data from api and creating list item for each object
window.addEventListener('load', loadData => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(Response => Response.json())
    .then(data => {
        let html = '';
        data.forEach(element => {
            html += `
            <li><a href="info.html"</a>
                <img src="${element.flag}">
                <br> ${element.name}
                <br> Capital: ${element.capital}
                <br> Population: ${element.population}
            </li>
            `;
            console.log(data);
            
        document.getElementById('list').innerHTML = html;
        
     });
  });
});