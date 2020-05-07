fetch('https://restcountries.eu/rest/v2/all')
.then(Response => Response.json())
.then(data => console.log(data));