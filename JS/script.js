document.getElementById('show-btn').addEventListener('click', loadData => {
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
//make every list show more info when clicked
document.querySelector("li").addEventListener("click", onClick => {
    console.log("test");
});
//iterate through countries and filter by search query
document.querySelector(".search-btn").addEventListener('click', filterCountry => {
    let ul = document.getElementById("list");
    let li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {

    }
})